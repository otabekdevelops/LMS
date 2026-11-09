import express from 'express'
import teacherController from '../controller/teacher.js'
import { authGuard } from '../guards/auth.guard.js'
import { roleGuard } from '../guards/role.guard.js'

const router = express.Router()

router
    .post("/create", authGuard, roleGuard("admin"), teacherController.create)

export default router