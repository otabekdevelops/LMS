import express from 'express'
import buyCourseController from '../controller/buyCourse.js'
import { authGuard } from '../guards/auth.guard.js'
import { roleGuard } from '../guards/role.guard.js'

const router = express.Router()

router
    .post("/:courseId", authGuard, roleGuard("student","teacher"), buyCourseController.buy)

export default router