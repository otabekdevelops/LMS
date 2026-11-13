import argon2 from "argon2"
import pool from "../config/db.js"
import {  ErrorException } from "../utils/error.js"
import { AccessToken, RefreshToken } from "../utils/jwt.js"
class AuthService {

    async login (req,res,next) {
        try {
            let { phone, password } = req.body
        
            const result = await pool.query(
            `select id, fullname, phone, password, role, status from staff where phone = $1
             union all
             select id, fullname, phone, password, 'teacher' as role, status from teachers where phone = $1
             union all
             select id, fullname, phone, password, 'student' as role, status from students where phone = $1`,
            [phone]
        )
            

            let user = result.rows[0]
            if (!user) {
                return next(new ErrorException(404, "User not found")) 
            }

            if(!await argon2.verify(user.password, password)) {
                return next(new ErrorException(400, "Incorrect password or phone number"))
            }

        return {
            status : 201,
            message : "Logged in",
            accessToken : AccessToken({ id: user.id, role: user.role }),
            refreshToken : RefreshToken({ id: user.id})
        }
        } catch (error) {
            return next(new ErrorException(500, error)) 
        }
    }
}

const authService = new AuthService()

export default authService