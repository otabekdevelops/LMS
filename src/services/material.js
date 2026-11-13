import pool from "../config/db.js"
import { ErrorException } from "../utils/error.js"
class MaterialService{
    constructor(){}

    async createMaterial(req, res, next){
        try {
            const { lesson_id, description, file } = req.body

        await pool.query(`insert into materials(lesson_id, description, file) 
            values ($1,$2,$3)`,[lesson_id, description, file])
        return {
            status : 201,
            message : "Material successfully created"
        }
        } catch (error) {
            return next(new ErrorException(500, error)) 
        }
        
    }

    async getAllmaterials(req,res,next){
        try {
            let data = await pool.query("select * from materials")
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
        let materials = await pool.query(`select * from materials where id=$1`,[id])
        return {
            status : 200,
            data : materials.rows
        }
    }

    async delete(req,res,next){
        let { id } = req.params
        let result = await pool.query("delete from tasks where id=$1", [id])
        if (!result.rows.length){
            return next(new ErrorException(400, "No material found with given id"))
        }
        return {
            status : 204,
            message : "The material successfully deleted"
        }
    }
}

let materialService = new MaterialService()

export default materialService