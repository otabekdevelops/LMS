import TeacherService from '../services/teacher.js'
class TeacherController {

    async create(req,res,next) {
        let resData = await TeacherService.create(req,res,next) 
        return res.status(resData.status).json(resData)
    }
    async getAllteachers(req,res,next){
        let resData = await TeacherService.getAllteachers(req,res,next)
        return res.status(resData.status).json(resData)
    }

    async getbyid(req,res){
        let resData = await TeacherService.getbyid(req)
        return res.status(resData.status).json(resData)
    }

    async delete(req,res,next) {
        let resData = await TeacherService.delete(req,res,next)
        return res.status(resData.status).json(resData)
    }
}

const teacherController = new TeacherController()

export default teacherController