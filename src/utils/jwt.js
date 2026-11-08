import JWT from 'jsonwebtoken'
import { configDotenv } from 'dotenv'
configDotenv()

export function AccessToken (payload) {
    return JWT.sign(payload, process.env.SECRET_KEY, {expiresIn:"24h"})
}

export function RefreshToken (payload) {
    return JWT.sign(payload, process.env.SECRET_KEY, {expiresIn:"24h"})
}