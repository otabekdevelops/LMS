import TaskService from '../services/task.js'
class TaskController {

    async create(req,res,next) {
        let resData = await TaskService.createTask(req,res,next) 
        return res.status(resData.status).json(resData)
    }
    async getAllmaterials(req,res,next){
        let resData = await TaskService.getAlltasks(req,res,next)
        return res.status(resData.status).json(resData)
    }

    async getbyid(req,res){
        let resData = await TaskService.getbyid(req)
        return res.status(resData.status).json(resData)
    }

    async delete(req,res,next) {
        let resData = await TaskService.delete(req,res,next)
        return res.status(resData.status).json(resData)
    }
}

const taskController = new TaskController()

export default taskController