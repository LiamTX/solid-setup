import express from 'express';

import {
    healthCheckController
} from '../../useCases';

class Routes {
    public router: express.Router;

    constructor() {
        this.router = express.Router();
        this.setApiRoutes();
    }

    setApiRoutes(): void {
        this.router.get('/healthcheck', async (req, res) => healthCheckController.handle(req, res));
    }
}

export default new Routes().router;