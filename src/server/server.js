import express from 'express';

import cors from 'cors';
import mugRoutes from './mugRoutes.js';
import mugPicsRoutes from './mugPicsRoutes.js';

const app = express();
const PORT = process.env.PORT || 8888;

app.use(express.json());
app.use(cors());
app.use(express.static("dist"));

app.use('/mugs', mugRoutes);

app.use('/mug_pics', mugPicsRoutes);

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
});