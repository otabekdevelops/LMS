import MaterialService from '../services/material.js'
class MaterialController {

    async create(req,res,next) {
        let resData = await MaterialService.createMaterial(req,res,next) 
        return res.status(resData.status).json(resData)
    }
    async getAllmaterials(req,res,next){
        let resData = await MaterialService.getAllmaterials(req,res,next)
        return res.status(resData.status).json(resData)
    }

    async getbyid(req,res){
        let resData = await MaterialService.getbyid(req)
        return res.status(resData.status).json(resData)
    }

    async delete(req,res,next) {
        let resData = await MaterialService.delete(req,res,next)
        return res.status(resData.status).json(resData)
    }
}

const materialController = new MaterialController()

export default materialController