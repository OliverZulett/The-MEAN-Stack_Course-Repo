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
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const customerSchema = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "El nombre es necesario"],
    },
    surname: {
        type: String,
        trim: true,
        required: [true, "El apellido es necesario"],
    },
    email: {
        type: String,
        required: [true, "El email es necesario"],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "La contraseña es necesaria"],
    },
    nit: {
        type: [Number, "el nit solo admite numeros"],
        trim: true,
        required: [true, "El nit o ci es necesario"],
    },
    adress: {
        type: String,
        trim: true
    },
    phone: {
        type: Number,
        trim: true,
    },
}, {
    collection: "customers",
});
// Asignamos un middleware
customerSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const customer = this;
        if (!customer.isModified('password'))
            return next();
        const salt = yield bcrypt_1.default.genSalt(10); //cuantas veces va a encriptar
        const hash = yield bcrypt_1.default.hash(customer.password, salt); //contraseña cifrada
        customer.password = hash;
        next(); //el next continua con el codigo es como el return 
    });
});
customerSchema.pre('findByIdAndDelete', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const customer = this;
        if (!customer.isModified('password'))
            return next();
        const salt = yield bcrypt_1.default.genSalt(10); //cuantas veces va a encriptar
        const hash = yield bcrypt_1.default.hash(customer.password, salt); //contraseña cifrada
        customer.password = hash;
        next(); //el next continua con el codigo es como el return 
    });
});
// methodos para el esquema
customerSchema.methods.comparePassword = function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcrypt_1.default.compare(password, this.password);
    });
};
exports.default = mongoose_1.model('Customer', customerSchema);
