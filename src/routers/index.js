import staffRouter from "./staff.js"
import authRouter from "./auth.js"
import { Router } from 'express'

const main = Router()

main.use("/api/v1", staffRouter)
main.use("/api/v1", authRouter)

export default main
