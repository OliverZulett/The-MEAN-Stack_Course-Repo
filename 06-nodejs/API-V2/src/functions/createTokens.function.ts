import Customer, {ICustomer} from '../models/customer.model';
import jwt from 'jsonwebtoken';
import config from '../config/config'

export function createToken(customer: ICustomer) {
    return jwt.sign({id: customer.id, email: customer.email}, config.JWTSECRET, {
        expiresIn: 86400
    });
}