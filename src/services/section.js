import pool from "../config/db.js"
import { ErrorException } from "../utils/error.js"
class SectionService{
    constructor(){}

    async createSection(req, res, next){
        try {
            const { name, course_id } = req.body
        let result = await pool.query(`select * from sections where name=$1`,[name])
        if (result.rows.length){
            return next(new ErrorException(409, "The given name is already in use"))
        }

        await pool.query(`insert into sections(name, course_id) 
            values ($1,$2)`,[name, course_id])
        return {
            status : 201,
            message : "Section successfully created"
        }
        } catch (error) {
            return next(new ErrorException(500, error)) 
        }
        
    }

    async getAllsections(req,res,next){
        try {
            let data = await pool.query("select * from sections where status='active' ")
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
        let sections = await pool.query(`select * from sections where id=$1`,[id])
        return {
            status : 200,
            data : sections.rows
        }
    }

    async delete(req,res,next){
        let { id } = req.params
        let result = await pool.query(`update sections set status = $1 where id = $2`,['inactive', id])
        if (!result.rows.length){
            return next(new ErrorException(400, "No sections found with given id"))
        }
        return {
            status : 204,
            message : "The section successfully deleted"
        }
    }
}

let sectionService = new SectionService()

export default sectionService