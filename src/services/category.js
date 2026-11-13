import pool from "../config/db.js"
import { ErrorException } from "../utils/error.js"
class CourseService{
    constructor(){}

    async createCategory(req, res, next){
        try {
            const { name } = req.body
        let result = await pool.query(`select * from categories where name=$1`,[name])
        if (result.rows.length){
            return next(new ErrorException(409, "The given name is already in use"))
        }

        await pool.query(`insert into categories( name ) values ($1)`,[ name ])
        return {
            status : 201,
            message : "Category successfully created"
        }
        } catch (error) {
            return next(new ErrorException(500, error)) 
        }
        
    }

    async getAllcategories(req,res,next){
        try {
            let data = await pool.query("select * from category where status='active' ")
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
        let category = await pool.query(`select * from category where id=$1`,[id])
        return {
            status : 200,
            data : category.rows
        }
    }

    async delete(req,res,next){
        let { id } = req.params
        let result = await pool.query(`update category set status = $1 where id = $2`,['inactive', id])
        if (!result.rows.length){
            return next(new ErrorException(400, "No category found with given id"))
        }
        return {
            status : 204,
            message : "The category successfully deleted"
        }
    }
}

let courseService = new CourseService()

export default courseService