import staffRouter from "./staff.js"
import authRouter from "./auth.js"
import teacherRouter from "./teacher.js"
import studentRouter from "./student.js"
import courseRouter from "./course.js"
import categoryRouter from "./category.js"
import lessonRouter from "./lesson.js"
import sectionRouter from "./section.js"
import materialRouter from "./material.js"
import { Router } from 'express'

const main = Router()

main.use("/api/v1/staff", staffRouter)
main.use("/api/v1", authRouter)
main.use("/api/v1/teacher", teacherRouter)
main.use("/api/v1/student", studentRouter)
main.use("/api/v1/course", courseRouter)
main.use("/api/v1/category", categoryRouter)
main.use("/api/v1/lessom", lessonRouter)
main.use("/api/v1/section", sectionRouter)
main.use("/api/v1/material", materialRouter)

export default main
