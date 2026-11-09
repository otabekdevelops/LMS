import Joi from "joi";

export default {
    staffSchema : Joi.object({
        fullname : Joi.string().min(3).max(30).required(),
        phone: Joi.string().pattern(/^\+?998(9[0123456789]|3[3]|7[1]|8[8])[0-9]{7}$/).required(),
        password : Joi.string().alphanum().min(6),
        role : Joi.string().max(20).required()
    }),
    teacherSchema : Joi.object({
        fullname : Joi.string().min(3).max(30).required(),
        phone: Joi.string().pattern(/^\+?998(9[0123456789]|3[3]|7[1]|8[8])[0-9]{7}$/).required(),
        password : Joi.string().alphanum().min(6),
        experience : Joi.number().integer().min(0).max(60).required(),
        job : Joi.string().max(50).required(),
        description : Joi.string().max(1000).allow(""),
        portfolio : Joi.string().allow(""),
        github : Joi.string().allow(""),
        telegram : Joi.string().allow(""),
        linkedin : Joi.string().allow("")
    }),
    studentSchema : Joi.object({
        fullname : Joi.string().min(3).max(30).required(),
        phone: Joi.string().pattern(/^\+?998(9[0123456789]|3[3]|7[1]|8[8])[0-9]{7}$/).required(),
        password : Joi.string().alphanum().min(6),
        
    })
}
