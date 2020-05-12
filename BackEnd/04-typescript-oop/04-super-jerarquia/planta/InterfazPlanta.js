"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const planta_1 = require("./planta");
class InterfazPlanta extends planta_1.Planta {
    constructor() {
        super(13, 4, 'rosa');
    }
    tamanioDePlanta() {
        let tamaño = super.getTamanio();
        console.log(`el tamaño de la planta es ${tamaño}`);
    }
}
let rosa = new InterfazPlanta();
rosa.tamanioDePlanta();
