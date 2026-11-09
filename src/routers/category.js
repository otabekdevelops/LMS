import express from 'express'
import categoryController from '../controller/category.js'
import validMiddle from '../middleware/validation.js'
const router = express.Router()

router
    .post("/create", validMiddle.createStaff, categoryController.create)
    .get("/getAll", categoryController.getAllcourses)
    .get("/getbyid/:id", categoryController.getbyid)
    .delete("/delete/:id", categoryController.delete)

export default router

