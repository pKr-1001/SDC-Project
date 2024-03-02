import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8888;
const pool = new pg.Pool({
    connectionString: process.env.LOCAL_DB_URL
});

pool.connect()
    .then((client) => {
        console.log(`Connected to postgres using connection string ${process.env.LOCAL_DB_URL}`);
        client.release();
    })
    .catch((err) => {
        console.log("Failed to connect to postgres:", err);
    });

app.use(express.json());
app.use(cors());
//app.use(express.static(/*"folder"*/));

app.get('/', (req, res) => {
    res.send('Homepage');
});

app.get('/products', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM fellow_carter_move_mug');
        console.log("Result of get all products query: ", data.rows);
        res.json(data.rows)
    }
    catch(err){
        console.error(err)
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});