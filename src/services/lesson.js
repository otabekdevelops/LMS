import pool from "../config/db.js"
import { ErrorException } from "../utils/error.js"
class LessonService{
    constructor(){}

    async createLesson(req, res, next){
        try {
            const { section_id, name, description, file } = req.body
        let result = await pool.query(`select * from lessons where name=$1`,[name])
        if (result.rows.length){
            return next(new ErrorException(409, "The given name is already in use"))
        }

        await pool.query(`insert into lessons(section_id, name, description, file) 
            values ($1,$2,$3,$4)`,[section_id, name, description, file])
        return {
            status : 201,
            message : "Lesson successfully created"
        }
        } catch (error) {
            return next(new ErrorException(500, error)) 
        }
        
    }

    async getAlllessons(req,res,next){
        try {
            let data = await pool.query("select * from lessons")
            return {
                status: 200,
                data : data.rows
            }
        } catch (error) {
            return next(new ErrorException(500, error)) 
        }
    }

    async getbyid(req,res){
        let { id } = req.params
        let lessons = await pool.query(`select * from lessons where id=$1`,[id])
        return {
            status : 200,
            data : lessons.rows
        }
    }

    async delete(req,res,next){
        try {
            let { id } = req.params
            let result = await pool.query(`update lessons set status = $1 where id = $2`,['inactive', id])
            if (!result.rows.length){
                return next(new ErrorException(400, "No lesson found with given id"))
            }
            return {
                status : 204,
                message : "The lesson successfully deleted"
            }
        } catch (error) {
            return next(new ErrorException(500, error))
        }
        
    }
}

let lessonService = new LessonService()

export default lessonService