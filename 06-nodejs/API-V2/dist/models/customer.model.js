"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
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
exports.default = mongoose_1.model('Customer', customerSchema);
