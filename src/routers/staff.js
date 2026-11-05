import express from 'express'
import staffController from '../controller/staff.js'
import validMiddle from '../middleware/validation.js'
const router = express.Router()

router
    .post("/create",validMiddle.createStaff, staffController.createStaff)
    .get("/getAll", staffController.getAllstaff)
    .get("/getbyid/:id", staffController.getbyid)
    .delete("/delete/:id", staffController.delete)

export default router 