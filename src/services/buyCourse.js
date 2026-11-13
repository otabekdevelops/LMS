import pool from "../config/db.js"
import { ErrorException } from "../utils/error.js"

class BuyCourseService {

    async buyCourse(req) {
        const studentId = req.user.id
        const courseId = Number(req.params.courseId)

        if (!Number.isInteger(courseId) || courseId <= 0) {
            throw new ErrorException(400, "Invalid course id")
        }

        const course = await pool.query(
            `select id from courses where id=$1 and status='active'`,
            [courseId]
        )
        if (!course.rows.length) {
            throw new ErrorException(404, "Course not found")
        }

        const bought = await pool.query(
            `select id from studentCourse where student_id=$1 and course_id=$2`,
            [studentId, courseId]
        )
        if (bought.rows.length) {
            throw new ErrorException(409, "You have already bought this course")
        }

        await pool.query(
            `insert into studentCourse (student_id, course_id, created_at) values ($1, $2, current_date)`,
            [studentId, course.rows[0].id]
        )

        return {
            status: 201,
            message: "Course successfully bought"
        }
    }
}

const buyCourseService = new BuyCourseService()

export default buyCourseService