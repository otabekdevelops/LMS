import express from 'express'
import main from './routers/index.js'
import { configDotenv } from 'dotenv'
import fs from 'fs'
import { join } from 'path'

configDotenv()

const app = express()
app.use(express.json())
app.use(main)

app.use((error, req, res, next) => {
    const status = error.status || 500
    console.log(status, error.message)

    if (status < 500) {
        return res.status(status).json({
            status,
            message: error.message
        })
    }

    fs.appendFileSync(join(process.cwd(), "src", "log", "logger.txt"),
        `[${new Date()}]-${req.method}-${req.url}-${error.message}\n`
    )
    return res.status(500).json({
        status: 500,
        message: "Internal Server Error"
    })
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running`)
})