"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
function createToken(user) {
    return jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, config_1.default.JWTSECRET, {
        expiresIn: 86400
    });
}
exports.createToken = createToken;
