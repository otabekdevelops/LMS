import CategoryService from "../services/category.js"
class CategoryController {

    async create(req,res,next) {
        let resData = await CategoryService.createCategory(req,res,next) 
        return res.status(resData.status).json(resData)
    }
    async getAllcategories(req,res,next){
        let resData = await CategoryService.getAllcategories(req,res,next)
        return res.status(resData.status).json(resData)
    }

    async getbyid(req,res){
        let resData = await CategoryService.getbyid(req)
        return res.status(resData.status).json(resData)
    }

    async delete(req,res,next) {
        let resData = await CategoryService.delete(req,res,next)
        return res.status(resData.status).json(resData)
    }
}

const categoryController = new CategoryController()

export default categoryController