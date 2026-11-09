import { verifyToken } from "../utils/jwt.js"
import { ErrorException } from "../utils/error.js"

export const authGuard = (req, res, next) => {
    try {
        const header = req.headers.authorization
        if (!header) {
            return next(new ErrorException(401, "Token required"))
        }

        const token = header.split(" ")[1]
        req.user = verifyToken(token)   // { id, role }
        return next()
    } catch (error) {
        return next(new ErrorException(401, "Invalid or expired token"))
    }
}