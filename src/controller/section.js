import SectionService from '../services/section.js'
class SectionController {

    async create(req,res,next) {
        let resData = await SectionService.createSection(req,res,next) 
        return res.status(resData.status).json(resData)
    }
    async getAllsections(req,res,next){
        let resData = await SectionService.getAllsections(req,res,next)
        return res.status(resData.status).json(resData)
    }

    async getbyid(req,res){
        let resData = await SectionService.getbyid(req)
        return res.status(resData.status).json(resData)
    }

    async delete(req,res,next) {
        let resData = await SectionService.delete(req,res,next)
        return res.status(resData.status).json(resData)
    }
}

const sectionController = new SectionController()

export default sectionController