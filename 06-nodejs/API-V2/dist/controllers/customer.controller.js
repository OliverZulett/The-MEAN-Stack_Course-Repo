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
const customer_model_1 = __importDefault(require("../models/customer.model"));
const statusResponse_function_1 = require("../functions/statusResponse.function");
exports.customersList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield customer_model_1.default.find({}, "_id name surname", (err, customers) => {
        if (err) {
            return statusResponse_function_1.statusResponse(res, 500, 'error al buscar clientes', err);
        }
        statusResponse_function_1.statusResponse(res, 200, "Lista de clientes", null, { customers: customers });
    });
});
exports.getCustomerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    yield customer_model_1.default.findById(id, (err, customer) => {
        if (err) {
            return statusResponse_function_1.statusResponse(res, 500, `Cliente con el id: ${id} no encontrado`, err);
        }
        statusResponse_function_1.statusResponse(res, 200, '', null, { customer: customer });
    });
});
exports.createCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dataRecibida = req.body;
    if (!dataRecibida || Object.keys(req.body).length === 0) {
        return statusResponse_function_1.statusResponse(res, 400, 'error al recibir los datos', null);
    }
    const customer = (yield customer_model_1.default.findOne({ email: req.body.email })) || (yield customer_model_1.default.findOne({ nit: req.body.nit }).catch((err) => console.log('error en el nit')));
    if (customer) {
        return statusResponse_function_1.statusResponse(res, 400, 'El cliente ya exite', null);
    }
    const newCustomer = new customer_model_1.default(req.body);
    yield newCustomer.save((err, newCustomer) => {
        if (err) {
            return statusResponse_function_1.statusResponse(res, 500, 'error al guardar cliente', err);
        }
        statusResponse_function_1.statusResponse(res, 201, 'cliente guardado', null, { new_customer: newCustomer });
    });
});
exports.updateCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    console.log(req.body);
    if (!req.body || Object.keys(req.body).length === 0) {
        return statusResponse_function_1.statusResponse(res, 400, 'error al recibir los datos', null);
    }
    yield customer_model_1.default.findById(id, (err, customerForUpdate) => {
        if (err) {
            return statusResponse_function_1.statusResponse(res, 500, `no se encontro el cliente con el id: ${id}`, err);
        }
        customer_model_1.default.findByIdAndUpdate(id, Object.assign(Object.assign({}, customerForUpdate._doc), req.body), (err, customerUpdated) => {
            if (err) {
                return statusResponse_function_1.statusResponse(res, 500, `error al actualizar cliente`, err);
            }
            statusResponse_function_1.statusResponse(res, 200, 'cliente actualizado', null, { updated_customer: Object.assign(Object.assign({}, customerForUpdate._doc), req.body) });
        });
    });
});
exports.deleteCustomerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    yield customer_model_1.default.findByIdAndDelete(id, (err, customer) => {
        if (err) {
            return statusResponse_function_1.statusResponse(res, 500, `Cliente con el id: ${id} no encontrado`, err);
        }
        statusResponse_function_1.statusResponse(res, 200, 'Cliente eliminado con exito', null, { customer: customer });
    });
});
