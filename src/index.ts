import express from 'express';
import { AppDataSource } from './data-source';

AppDataSource.initialize().then(() => {
    const app = express();
    app.use(express.json())

    app.get('/health', (_req, res) => {
        return res.json('All right folks')
    })

    const port = process.env.PORT || 4000;

    return app.listen(port, () => {
        console.log(`Server is listening on port ${port}`)
    })
})