import express from 'express'
import materialController from '../controller/material.js'
import validMiddle from '../middleware/validation.js'
import { authGuard } from '../guards/auth.guard.js'
import { roleGuard } from '../guards/role.guard.js'
const router = express.Router()

router
    .post("/create", authGuard, roleGuard("admin"),materialController.create)
    .get("/getAll", authGuard, roleGuard("admin"), materialController.getAllmaterials)
    .get("/getbyid/:id", authGuard, roleGuard("admin"), materialController.getbyid)
    .delete("/delete/:id", authGuard, roleGuard("admin"), materialController.delete)

export default router