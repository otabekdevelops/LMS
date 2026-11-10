import LessonService from '../services/lesson.js'
class LessonController {

    async create(req,res,next) {
        let resData = await LessonService.createLesson(req,res,next) 
        return res.status(resData.status).json(resData)
    }
    async getAlllessons(req,res,next){
        let resData = await LessonService.getAlllessons(req,res,next)
        return res.status(resData.status).json(resData)
    }

    async getbyid(req,res){
        let resData = await LessonService.getbyid(req)
        return res.status(resData.status).json(resData)
    }

    async delete(req,res,next) {
        let resData = await LessonService.delete(req,res,next)
        return res.status(resData.status).json(resData)
    }
}

const lessonController = new LessonController()

export default lessonController