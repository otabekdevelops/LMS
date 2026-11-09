import pool from "../config/db.js"
class TeacherController {

    async create(req,res,next) {
        try {
            const {  fullname, phone, password, experience, job, description, portfolio, github, telegram, linkedin} = req.body
            let existUser = await pool.query(`select * from staff where phone=$1`,[phone])
            if (existUser.rows.length){
                return next(new ErrorException(409, "User not found with this phone"))
            }
            let hashpass = await argon2.hash(password)
            await pool.query(`insert into staff (fullname, phone, password, experience, job, description, portfolio, github, telegram, linkedin) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,[fullname, phone, hashpass, experience, job, description, portfolio, github, telegram, linkedin])
            return {
                status : 201,
                message : "User successfully created"
            }
            
        } catch (error) {
            
        }
    }
}

const teacherController = new TeacherController()

export default teacherController