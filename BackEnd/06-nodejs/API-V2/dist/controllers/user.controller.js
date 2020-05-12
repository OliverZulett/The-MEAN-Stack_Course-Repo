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
const statusResponse_function_1 = require("../functions/statusResponse.function");
const createTokens_function_1 = require("../functions/createTokens.function");
const verifyAuthorization_function_1 = __importDefault(require("../functions/verifyAuthorization.function"));
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
    if (!verifyAuthorization_function_1.default(req.user, res, id)) {
        return statusResponse_function_1.statusResponse(res, 401, `Usuario no autorizado para realizar la peticion`, null);
    }
    yield user_model_1.default.findById(id, (err, user) => {
        if (err) {
            return statusResponse_function_1.statusResponse(res, 500, `Usuario con el id: ${id} no encontrado`, err);
        }
        statusResponse_function_1.statusResponse(res, 200, '', null, { user: user });
    });
});
exports.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dataRecibida = req.body;
    if (!dataRecibida || Object.keys(req.body).length === 0) {
        return statusResponse_function_1.statusResponse(res, 400, 'error al recibir los datos', null);
    }
    const user = (yield user_model_1.default.findOne({ email: req.body.email })) || (yield user_model_1.default.findOne({ nit: req.body.nit }).catch((err) => console.log('error en el nit')));
    if (user) {
        return statusResponse_function_1.statusResponse(res, 400, 'El usuario ya exite', null);
    }
    const newUser = new user_model_1.default(req.body);
    yield newUser.save((err, newUser) => {
        if (err) {
            return statusResponse_function_1.statusResponse(res, 500, 'error al guardar usuario', err);
        }
        statusResponse_function_1.statusResponse(res, 201, 'usuario guardado', null, { new_user: newUser, token: createTokens_function_1.createToken(newUser) });
    });
});
exports.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    console.log(req.body);
    if (!verifyAuthorization_function_1.default(req.user, res, id)) {
        return statusResponse_function_1.statusResponse(res, 401, `Usuario no autorizado para realizar la peticion`, null);
    }
    if (!req.body || Object.keys(req.body).length === 0) {
        return statusResponse_function_1.statusResponse(res, 400, 'error al recibir los datos', null);
    }
    yield user_model_1.default.findById(id, (err, userForUpdate) => {
        if (err) {
            return statusResponse_function_1.statusResponse(res, 500, `no se encontro el usuario con el id: ${id}`, err);
        }
        user_model_1.default.findByIdAndUpdate(id, Object.assign(Object.assign({}, userForUpdate._doc), req.body), (err, userUpdated) => {
            if (err) {
                return statusResponse_function_1.statusResponse(res, 500, `error al actualizar usuario`, err);
            }
            statusResponse_function_1.statusResponse(res, 200, 'usuario actualizado', null, { updated_user: Object.assign(Object.assign({}, userForUpdate._doc), req.body) });
        });
    });
});
exports.deleteUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!verifyAuthorization_function_1.default(req.user, res, id)) {
        return statusResponse_function_1.statusResponse(res, 401, `Usuario no autorizado para realizar la peticion`, null);
    }
    yield user_model_1.default.findByIdAndDelete(id, (err, user) => {
        if (err) {
            return statusResponse_function_1.statusResponse(res, 500, `Usuario con el id: ${id} no encontrado`, err);
        }
        statusResponse_function_1.statusResponse(res, 200, 'Usuario eliminado con exito', null, { user: user });
    });
});
