import express from 'express'
import lessonController from '../controller/lesson.js'
import validMiddle from '../middleware/validation.js'
import { authGuard } from '../guards/auth.guard.js'
import { roleGuard } from '../guards/role.guard.js'
const router = express.Router()

router
    .post("/create", authGuard, roleGuard("admin","teacher"),lessonController.create)
    .get("/getAll", authGuard, roleGuard("admin"), lessonController.getAlllessons)
    .get("/getbyid/:id", authGuard, roleGuard("admin"), lessonController.getbyid)
    .delete("/delete/:id", authGuard, roleGuard("admin"), lessonController.delete)

export default router