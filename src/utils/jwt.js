import JWT from 'jsonwebtoken'
import { configDotenv } from 'dotenv'
configDotenv()

export function AccessToken(payload) {
    return JWT.sign(payload, process.env.SECRET_KEY, { expiresIn: "15m" })
}

export function RefreshToken(payload) {
    return JWT.sign(payload, process.env.SECRET_KEY, { expiresIn: "7d" })
}

export function verifyToken(token) {
    return JWT.verify(token, process.env.SECRET_KEY)
}