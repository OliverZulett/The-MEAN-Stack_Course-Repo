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
const statusResponse_function_1 = require("../../functions/statusResponse.function");
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
    if (!dataRecibida) {
        return statusResponse_function_1.statusResponse(res, 400, 'error al recibir los datos', null);
    }
    const customer = (yield customer_model_1.default.findOne({ email: req.body.email })) || (yield customer_model_1.default.findOne({ nit: req.body.nit }));
    // console.log(customer);
    if (customer) {
        return statusResponse_function_1.statusResponse(res, 400, 'El cliente ya exites', null);
    }
    const newCustomer = new customer_model_1.default(req.body);
    yield newCustomer.save((err, newCustomer) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: "error al guardar cliente",
                errors: err,
            });
        }
        res.status(201).json({
            ok: true,
            message: "Cliente guardado",
            newCustomer: newCustomer,
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
