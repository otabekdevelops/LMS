import pool from "../config/db.js"
import { ErrorException } from "../utils/error.js"
class MaterialService{
    constructor(){}

    async createMaterial(req, res, next){
        try {
            const {banner, intro_video, name, description, price, category_id } = req.body
        let result = await pool.query(`select * from materials where name=$1`,[name])
        if (result.rows.length){
            return next(new ErrorException(409, "The given name is already in use"))
        }

        await pool.query(`insert into materials(banner, intro_video, name, description, price, category_id) 
            values ($1,$2,$3,$4,$5,$6)`,[banner, intro_video, name, description, price, category_id])
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
            let data = await pool.query("select * from materials where status='active' ")
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
        let result = await pool.query(`update materials set status = $1 where id = $2`,['inactive', id])
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