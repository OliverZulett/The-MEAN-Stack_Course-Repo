import { statusResponse } from "./statusResponse.function";
import { Response, Request } from 'express'

export default function Auth(user:any, res:Response, id: string) {
    const userAuth = user;
    if (userAuth._id === id || userAuth.role === 'ADMIN_ROLE') {
        return true
    }
    return false
}
