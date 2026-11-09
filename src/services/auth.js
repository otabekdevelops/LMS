import argon2 from "argon2"
import pool from "../config/db.js"
import {  ErrorException } from "../utils/error.js"
import { AccessToken, RefreshToken } from "../utils/jwt.js"
class AuthService {

    async login (req,res,next) {
        try {
            let { phone, password } = req.body
        
            let result = await pool.query("select * from staff where phone=$1",[phone])

            let user = result.rows[0]
            if (!user) {
                return next(new ErrorException(404, "User not found")) 
            }

            if(!await argon2.verify(user.password, password)) {
                return next(new ErrorException(400, "Incorrect password or phone number"))
            }
            console.log("Buyergacha keldi", user)

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