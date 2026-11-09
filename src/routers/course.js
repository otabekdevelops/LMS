import express from 'express'
import courseController from '../controller/course.js'
import validMiddle from '../middleware/validation.js'
const router = express.Router()

router
    .post("/create", validMiddle.createStaff, courseController.create)
    .get("/getAll", courseController.getAllcourses)
    .get("/getbyid/:id", courseController.getbyid)
    .delete("/delete/:id", courseController.delete)

export default router