import StudentService from '../services/student.js'
class StudentController {

    async create(req,res,next) {
        let resData = await StudentService.create(req,res,next) 
        return res.status(resData.status).json(resData)
    }
    async getAllstudents(req,res,next){
        let resData = await StudentService.getAllstudents(req,res,next)
        return res.status(resData.status).json(resData)
    }

    async getbyid(req,res){
        let resData = await StudentService.getbyid(req)
        return res.status(resData.status).json(resData)
    }

    async delete(req,res,next) {
        let resData = await StudentService.delete(req,res,next)
        return res.status(resData.status).json(resData)
    }
}

const studentController = new StudentController()

export default studentController