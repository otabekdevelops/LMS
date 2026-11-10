import express from 'express'
import categoryController from '../controller/category.js'
import validMiddle from '../middleware/validation.js'
import { authGuard } from '../guards/auth.guard.js'
import { roleGuard } from '../guards/role.guard.js'
const router = express.Router()

router
    .post("/create", authGuard, roleGuard("admin"), categoryController.create)
    .get("/getAll", authGuard, roleGuard("admin"), categoryController.getAllcategories)
    .get("/getbyid/:id", authGuard, roleGuard("admin"), categoryController.getbyid)
    .delete("/delete/:id", authGuard, roleGuard("admin"), categoryController.delete)

export default router

