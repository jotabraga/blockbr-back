import { Router } from "express";

import * as controller from "../../controllers/user";

const router = Router();

router.get("/", controller.getAllUsers);
router.post("/", controller.createUser);
router.put("/", controller.updateUser);
router.delete("/", controller.deleteUser);


export default router;