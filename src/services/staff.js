import pool from "../config/db.js"
import argon2 from "argon2"
import { ErrorException } from "../utils/error.js"
class StaffService{
    constructor(){}

    async createStaff(req, res, next){
        try {
            const {fullname, phone, password, role} = req.body
        let existUser = await pool.query(`select * from staff where phone=$1`,[phone])
        if (existUser.rows.length){
            return next(new ErrorException(409, "User already exist"))
        }
        let hashpass = await argon2.hash(password)
        await pool.query(`insert into staff(fullname, phone, password, role) values ($1,$2,$3,$4)`,[fullname, phone, hashpass, role])
        return {
            status : 201,
            message : "User successfully created"
        }
        } catch (error) {
            return next(new ErrorException(500, error)) 
        }
        
    }

    async getAllstaff(req,res,next){
        try {
            let data = await pool.query("select id, fullname, phone, role, status from staff where status='active' ")
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
        let staff = await pool.query(`select id, fullname, phone, role, status from staff where id=$1`, [id])
        return {
            status : 200,
            data : staff.rows
        }
    }

    async delete(req,res,next){
        let { id } = req.params
        let result = await pool.query(`update staff set status = $1 where id = $2`,['inactive', id])
        if (!result.rows.length){
            return next(new ErrorException(400, "No user found with given id"))
        }
        return {
            status : 204,
            message : "User successfully deleted"
        }
    }
}

let staffService = new StaffService()

export default staffService