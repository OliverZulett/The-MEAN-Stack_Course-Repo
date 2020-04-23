import { Strategy, ExtractJwt, StrategyOptions  } from "passport-jwt";
import config from "../config/config";
import Customer from "../models/customer.model";

const opts:StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.JWTSECRET
}

export default new Strategy(opts, async (payload, done)=> {
    try {
        const customer = await Customer.findById(payload.id);
        if (customer) {
            return done(null, customer);
        }
        return done(null, false)
    } catch (error) {
        console.log(error);
    }
});