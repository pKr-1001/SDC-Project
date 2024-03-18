import express from 'express';
import pool from './pool.js';
import Redis from 'redis';
import axios from 'axios';

const router = express.Router();
const redisClient = Redis.createClient();

const DEFAULT_EXPIRATION = 3600;

await redisClient.connect();

router.get('/', async (req, res) => {
    const mugs = await getOrSetCache('mugs', async () => {
        const { data } = await axios.get('https://fec-project-tjyl.onrender.com/mugs')
        res.json(data)
        return data
    })
    res.json(mugs)
})

const getOrSetCache = async (key, cb) => {
    return new Promise( async (resolve, reject) => {
        try {
            const dataFromCache = await redisClient.GET(key);
            if (dataFromCache !== null) {
                // Data found in cache
                resolve(JSON.parse(dataFromCache));
            } else {
                // Data not found in cache, fetch from API
                const freshData = await cb()
                // const { data } = await axios.get('https://fec-project-tjyl.onrender.com/mugs');
                // Set data in cache
                await redisClient.SETEX(key, DEFAULT_EXPIRATION, JSON.stringify(freshData));
                resolve(freshData);
            }
        } catch (error) {
            reject(error);
        }
    })
}


router.get('/:id', async (req, res) => {
    try {
        const id = Number.parseInt(req.params.id);
        const mugs = await getOrSetCache(`mugs:${id}`, async () => {
            const { data } = await axios.get(`https://fec-project-tjyl.onrender.com/mugs/${id}`)
            if (data.length == 0) return res.sendStatus(500)
            return data
        })
            res.json(mugs)

        } catch (error) {
            console.log(error)
        }
})

router.post('/', async (req, res) => {
    const { mug_name, mug_description_1, mug_cost } = req.body
    try {
        const data = await pool.query(
            `INSERT INTO mugs (mug_name, mug_description_1, mug_cost) VALUES
            ($1, $2, $3) RETURNING *`,
            [mug_name, mug_description_1, mug_cost]
        )
        console.log("Result of post request: ", data.rows[0]);
        res.json(data.rows[0]);
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
})

router.patch('/:id', async (req, res) => {
    const id = Number.parseInt(req.params.id);
    const {
        mug_name,
        mug_description_1,
        mug_description_2,
        mug_shipping, 
        mug_cost
    } = req.body;
    try {
        const data = await pool.query(
            `UPDATE mugs SET
            mug_name = COALESCE($1, mug_name), 
            mug_description_1 = COALESCE($2, mug_description_1),
            mug_description_2 = COALESCE($3, mug_description_2), 
            mug_shipping = COALESCE($4, mug_shipping), 
            mug_cost = COALESCE($5, mug_cost) WHERE
            mug_id = $6 RETURNING *`,
            [mug_name, mug_description_1, mug_description_2, mug_shipping, mug_cost, id]
        );
        console.log("Results of patch request: ", data.rows[0]);
        res.json(data.rows[0]);
    }
    catch(err){
        console.error(err);
        res.sendStatus(500);
    }
})

router.delete('/:id', async (req, res) => {
    const id = Number.parseInt(req.params.id);
    try {
        const data = await pool.query(
            `DELETE FROM mugs
            WHERE mug_id = $1`,
            [id]
        )

        if (data.rowCount > 0) {
            res.status(200).json({ message: 'Resource deleted successfully' });
        } else {
            res.status(404).json({ message: 'Resource not found' });
        }
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
})

export default router;