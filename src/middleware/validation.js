import { ErrorException } from '../utils/error.js'
import schema from '../utils/validation.js'
 
export default {
    createStaff : (req,res,next) => {
        let { error } = schema.staffSchema.validate(req.body)
        if (error) {
            return next(new ErrorException(400, error.message))
        }  
        return next()
    },
    createTeacher : (req,res,next) => {
        let { error } = schema.teacherSchema.validate(req.body)
        if (error) {
            return next(new ErrorException(400, error.message))
        }  
        return next()
    },
    createStudent : (req,res,next) => {
        let { error } = schema.studentSchema.validate(req.body)
        if (error) {
            return next(new ErrorException(400, error.message))
        }  
        return next()
    }
}