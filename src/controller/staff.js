import staffService from "../services/staff.js"
class Staffcontroller{
    constructor(){}

    createStaff(req,res){
        let res = staffService.createStaff(req) 
        return res.status(res.status).json(res)
    }

}