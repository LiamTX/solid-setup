import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import router from './routes/routes';

class Api {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middlewares();
    }

    middlewares(): void {
        this.express.use(cors());
        this.express.use(express.json());
        dotenv.config();
        this.express.use('/api', router);
    }
}

export default new Api().express;
