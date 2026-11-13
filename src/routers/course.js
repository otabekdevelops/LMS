import express from 'express'
import courseController from '../controller/course.js'
import validMiddle from '../middleware/validation.js'
import { authGuard } from '../guards/auth.guard.js'
import { roleGuard } from '../guards/role.guard.js'
const router = express.Router()

router
    .post("/create", authGuard, roleGuard("admin","teacher"),courseController.create)
    .get("/getAll", authGuard, roleGuard("admin","teacher"), courseController.getAllcourses)
    .get("/getbyid/:id", authGuard, roleGuard("admin"), courseController.getbyid)
    .delete("/delete/:id", authGuard, roleGuard("admin"), courseController.delete)

export default router