import express from 'express'
import staffController from '../controller/staff.js'
import validMiddle from '../middleware/validation.js'
import { authGuard } from '../guards/auth.guard.js'
import { roleGuard } from '../guards/role.guard.js'
const router = express.Router()

router
    .post("/create", authGuard, roleGuard("admin"), validMiddle.createStaff, staffController.createStaff)
    .get("/getAll", authGuard, roleGuard("admin"), staffController.getAllstaff)
    .get("/getbyid/:id", authGuard, roleGuard("admin"), staffController.getbyid)
    .delete("/delete/:id",authGuard, roleGuard("admin"), staffController.delete)

export default router 