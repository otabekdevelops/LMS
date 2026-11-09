import staffRouter from "./staff.js"
import authRouter from "./auth.js"
import teacherRouter from "./teacher.js"
import studentRouter from "./student.js"
import courseRouter from "./course.js"
import categoryRouter from "./category.js"
import { Router } from 'express'

const main = Router()

main.use("/api/v1/staff", staffRouter)
main.use("/api/v1", authRouter)
main.use("/api/v1/teacher", teacherRouter)
main.use("/api/v1/student", studentRouter)
main.use("/api/v1/course", courseRouter)
main.use("/api/v1/course", categoryRouter)

export default main
