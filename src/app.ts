import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
    res.send("Ok!");
});

// app.use(router);
// app.use(errorHandlingMiddleware);

export async function init() {
    //   await connectDatabase();
}

export default app;