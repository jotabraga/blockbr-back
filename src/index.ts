import express from 'express';
import { AppDataSource } from './data-source';
import { routes } from './routes';
import cors from 'cors'

AppDataSource.initialize().then(() => {
    const app = express();
    app.use(express.json())
    app.use(cors({
        allowedHeaders: '*',
        origin: '*',
        credentials: true,
        methods: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
    }));

    app.get('/health', (_req, res) => {
        return res.json('All right folks')
    });
    app.use(routes);

    const port = process.env.PORT || 4000;

    return app.listen(port, () => {
        console.log(`Server is listening on port ${port}`)
    })
})