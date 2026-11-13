import express from 'express'
import sectionController from '../controller/section.js'
import validMiddle from '../middleware/validation.js'
import { authGuard } from '../guards/auth.guard.js'
import { roleGuard } from '../guards/role.guard.js'
const router = express.Router()

router
    .post("/create", authGuard, roleGuard("admin","teacher"),sectionController.create)
    .get("/getAll", authGuard, roleGuard("admin","teacher"), sectionController.getAllsections)
    .get("/getbyid/:id", authGuard, roleGuard("admin"), sectionController.getbyid)
    .delete("/delete/:id", authGuard, roleGuard("admin"), sectionController.delete)

export default router