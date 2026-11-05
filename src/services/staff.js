import pool from "../config/db.js"
import argon2 from "argon2"
class StaffService{
    constructor(){}

    async createStaff(req){
        const {fullname, phone, password, role} = req.body
        let existUser = await pool.query(`select id from staff where phone=${phone}`)
        if (existUser.rows.length){
            return {
                status : 409,
                message : "User already exist with this phone number"
            }
        }
        let hashpass = await argon2.hash(password)
        await pool.query(`insert into staff(fullname, phone, password, role) values ($1,$2,$3,$4)`,[fullname, phone, hashpass, role])
        return {
            status : 201,
            message : "User successfully created"
        }
    }

    async getAllstaff(req){
        let data = await pool.query("select id, fullname, phone, role, status from staff where status='active' ")
        return {
            status: 200,
            data : data.rows
        }
    }

    async getbyid(req,res){
        let { id } = req.params
        let staff = await pool.query(`select * from staff where id=${id}`)
        return {
            status : 200,
            data : staff.rows
        }
    }
    async delete(req,res){
        let { id } = req.params
        let result = await pool.query(`update staff set status = $1 where id = $2`,['inactive', id])
        if (!result.rows.length){
            return {
                status : 409,
                message : "No user found with given id"
            }
        }
        return {
            status : 204,
            message : "User successfully deleted"
        }
    }
}

let staffService = new StaffService()

export default staffService