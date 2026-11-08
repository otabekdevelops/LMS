import argon2 from "argon2"
import pool from "../config/db.js"
import { BadRequestError, InternalServerError, NotFoundError } from "../utils/error.js"
import { AccessToken, RefreshToken } from "../utils/jwt.js"
class AuthService {

    async login (req,res,next) {
        try {
            let { phone, password } = req.body
        
            let IsExist = await pool.query("select * from staff where phone=$1",[phone])
            if (!IsExist.rows.length) {
                return next(new NotFoundError(404, "User not found")) 
            }

            IsExist = await pool.query("select * from staff where password=$1",[password])

            if(!await argon2.verify(IsExist.rows.password, password)) {
                return next(new BadRequestError(400, "Incorrect password or phone number"))
            }
            console.log("Buyergacha keldi")

        return {
            age:25
        }
        } catch (error) {
            return next(new InternalServerError(500, error)) 
        }
    }
}

const authService = new AuthService()

export default authService