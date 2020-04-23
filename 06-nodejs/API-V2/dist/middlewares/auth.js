"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statusResponse_function_1 = require("../functions/statusResponse.function");
exports.default = (req, res, next) => {
    const userAuth = req.user;
    if (userAuth._id !== id || userAuth.role === 'ADMIN_ROLE') {
        return statusResponse_function_1.statusResponse(res, 401, `Usuario no autorizado para realizar la peticion`, null);
    }
};
