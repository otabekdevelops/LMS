import staffService from "../services/staff.js"
class Staffcontroller{
    constructor(){}

    async createStaff(req,res,next){
        let resData = await staffService.createStaff(req,res,next) 
        return res.status(resData.status).json(resData)
    }
    async getAllstaff(req,res,next){
        let resData = await staffService.getAllstaff(req,res,next)
        return res.status(resData.status).json(resData)
    }

    async getbyid(req,res){
        let resData = await staffService.getbyid(req)
        return res.status(resData.status).json(resData)
    }

    async delete(req,res,next) {
        let resData = await staffService.delete(req,res,next)
        return res.status(resData.status).json(resData)
    }

}

let staffController = new Staffcontroller()

export default staffController