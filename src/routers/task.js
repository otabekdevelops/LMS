import express from 'express'
import taskController from '../controller/task.js'
import validMiddle from '../middleware/validation.js'
import { authGuard } from '../guards/auth.guard.js'
import { roleGuard } from '../guards/role.guard.js'
const router = express.Router()

router
    .post("/create", authGuard, roleGuard("admin","teacher"),taskController.create)
    .get("/getAll", authGuard, roleGuard("admin"), taskController.getAllmaterials)
    .get("/getbyid/:id", authGuard, roleGuard("admin"), taskController.getbyid)
    .delete("/delete/:id", authGuard, roleGuard("admin"), taskController.delete)

export default router