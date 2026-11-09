import TeacherService from '../services/teacher.js'
class TeacherController {

    async create(req,res,next) {
        let resData = await TeacherService.create(req,res,next) 
        return res.status(resData.status).json(resData)
    }
}

const teacherController = new TeacherController()

export default teacherController