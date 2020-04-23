"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const createTokens_function_1 = require("../functions/createTokens.function");
// export const singUp = async (req:Request, res:Response):Promise<Response> => {
//     if (!req.body.email || !req.body.password) {
//         return res.status(400).json(
//             {
//                 msg: 'please, send your email and password'
//             }
//         );
//     }
//     const user = await User.findOne({email: req.body.email})
//     console.log(user);
//     if (user) {
//         return res.status(400).json(
//             {
//                 msg: 'The user already exists'
//             }
//         );
//     }
//     const newUser = new User(req.body);
//     await newUser.save();
//     return res.status(400).json(newUser);
// }
exports.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            msg: 'please, send your email and password'
        });
    }
    const user = yield user_model_1.default.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ msg: 'the user does not exists' });
    }
    const isMatch = yield user.comparePassword(req.body.password);
    if (isMatch) {
        return res.status(200).json({ token: createTokens_function_1.createToken(user) });
    }
    return res.status(400).json({
        mgg: 'the email or password are incorrect'
    });
});
