import argon2 from "argon2"
import pool from "../config/db.js"
import { ErrorException } from "../utils/error.js"
class TeacherController {

    async create(req,res,next) {
        try {
            const {  fullname, phone, password, experience, job, description, portfolio, github, telegram, linkedin} = req.body
            let existUser = await pool.query(`select * from teachers where phone=$1`,[phone])
            if (existUser.rows.length){
            return next(new ErrorException(409, "User already exist"))
        }
            let hashpass = await argon2.hash(password)
            await pool.query(`insert into teachers (fullname, phone, password, experience, job, description, portfolio, github, telegram, linkedin) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,[fullname, phone, hashpass, experience, job, description, portfolio, github, telegram, linkedin])
            return {
                status : 201,
                message : "User successfully created"
            }

        } catch (error) {
            return next(new ErrorException(500, error))
        }
    }

    async getAllteachers(req,res,next){
        try {
            let data = await pool.query("select id, fullname, phone, experience,  job, description, portfolio, github, telegram, linkedin, status from teachers where status='active' ")
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
        let teachers = await pool.query(`select id, fullname, phone, experience,  job, description, portfolio, github, telegram, linkedin, status from teachers where id=$1`,[id])
        return {
            status : 200,
            data : teachers.rows
        }
    }

    async delete(req,res,next){
        let { id } = req.params
        let result = await pool.query(`update teachers set status = $1 where id = $2`,['inactive', id])
        if (!result.rows.length){
            return next(new ErrorException(400, "No user found with given id"))
        }
        return {
            status : 204,
            message : "User successfully deleted"
        }
    }
}

const teacherController = new TeacherController()

export default teacherController