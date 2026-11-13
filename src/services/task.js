import pool from "../config/db.js"
import { ErrorException } from "../utils/error.js"
class TaskService{
    constructor(){}

    async createTask(req, res, next){
        try {
            const { lesson_id, task, file } = req.body

        await pool.query(`insert into tasks(lesson_id, task, file) 
            values ($1,$2,$3)`,[lesson_id, description, file])
        return {
            status : 201,
            message : "Task successfully created"
        }
        } catch (error) {
            return next(new ErrorException(500, error)) 
        }
        
    }

    async getAlltasks(req,res,next){
        try {
            let data = await pool.query("select * from tasks")
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
        let tasks = await pool.query(`select * from tasks where id=$1`,[id])
        return {
            status : 200,
            data : tasks.rows
        }
    }

    async delete(req,res,next){
        let { id } = req.params
        let result = await pool.query("delete from tasks where id=$1", [id])
        if (!result.rows.length){
            return next(new ErrorException(400, "No task found with given id"))
        }
        return {
            status : 204,
            message : "The material successfully deleted"
        }
    }
}

let taskService = new TaskService()

export default taskService