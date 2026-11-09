import CourseService from '../services/course.js'
class CourseController {

    async create(req,res,next) {
        let resData = await CourseService.createCourse(req,res,next) 
        return res.status(resData.status).json(resData)
    }
    async getAllcourses(req,res,next){
        let resData = await CourseService.getAllcourses(req,res,next)
        return res.status(resData.status).json(resData)
    }

    async getbyid(req,res){
        let resData = await CourseService.getbyid(req)
        return res.status(resData.status).json(resData)
    }

    async delete(req,res,next) {
        let resData = await CourseService.delete(req,res,next)
        return res.status(resData.status).json(resData)
    }
}

const courseController = new CourseController()

export default courseController