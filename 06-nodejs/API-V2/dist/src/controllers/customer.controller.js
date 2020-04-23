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
const statusResponse_function_1 = require("../../functions/statusResponse.function");
exports.usersList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.find({}, "_id name surname", (err, users) => {
        if (err) {
            return statusResponse_function_1.statusResponse(res, 500, 'error al buscar usuarios', err);
        }
        statusResponse_function_1.statusResponse(res, 200, "Lista de usuarios", null, { users: users });
    });
});
exports.getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    yield user_model_1.default.findById(id, (err, user) => {
        if (err) {
            return statusResponse_function_1.statusResponse(res, 500, `Usuario con el id: ${id} no encontrado`, err);
        }
        statusResponse_function_1.statusResponse(res, 200, '', null, { user: user });
    });
});
exports.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dataRecibida = req.body;
    if (!dataRecibida) {
        return statusResponse_function_1.statusResponse(res, 400, 'error al recibir los datos', null);
    }
    const user = (yield user_model_1.default.findOne({ email: req.body.email })) || (yield user_model_1.default.findOne({ nit: req.body.nit }));
    // console.log(user);
    if (user) {
        return statusResponse_function_1.statusResponse(res, 400, 'El usuario ya exites', null);
    }
    const newUser = new user_model_1.default(req.body);
    yield newUser.save((err, newUser) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: "error al guardar usuario",
                errors: err,
            });
        }
        res.status(201).json({
            ok: true,
            message: "Usuario guardado",
            newUser: newUser,
        });
    });
});
statusResponse_function_1.statusResponse;
// function statusResponse(res: Response, code: number, message: string = '', errors: any, object?: Object) {
//   const response: object = {};
//   if (errors) {
//     Object.assign(response, { ok: false });
//     Object.assign(response, { errors: errors });
//   }
//   if (message) {
//     Object.assign(response, { message: message });
//   }
//   if (object) {
//     Object.assign(response, object);
//   }
//   res.status(code).json(response);
// }
