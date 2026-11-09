import express from 'express'
import teacherController from '../controller/teacher.js'
import { authGuard } from '../guards/auth.guard.js'
import { roleGuard } from '../guards/role.guard.js'
import validMiddle from '../middleware/validation.js'

const router = express.Router()

router
    .post("/create", authGuard, roleGuard("admin"), validMiddle.createTeacher, teacherController.create)
    .get("/getAll", authGuard, roleGuard("admin"), teacherController.getAllteachers)
    .get("/getbyid/:id", authGuard, roleGuard("admin"), teacherController.getbyid)
    .delete("/delete/:id", authGuard, roleGuard("admin"), teacherController.delete)

export default router