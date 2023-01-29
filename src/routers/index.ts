import { Router } from "express";

import clientRouter from "./client/user";

const router = Router();

router.use("/", clientRouter);

export default router;
