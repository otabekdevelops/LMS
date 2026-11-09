import express from 'express'
import studentController from '../controller/student.js'
import { authGuard } from '../guards/auth.guard.js'
import { roleGuard } from '../guards/role.guard.js'
import validMiddle from '../middleware/validation.js'

const router = express.Router()

router
    .post("/create", authGuard, roleGuard("admin"), validMiddle.createStudent, studentController.create)
    .get("/getAll", authGuard, roleGuard("admin"), studentController.getAllstudents)
    .get("/getbyid/:id", authGuard, roleGuard("admin"), studentController.getbyid)
    .delete("/delete/:id", authGuard, roleGuard("admin"), studentController.delete)

export default router