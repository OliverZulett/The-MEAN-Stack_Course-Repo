"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const organismo_1 = require("../organismo");
// subclase
class Planta extends organismo_1.Organismo {
    // inicializador
    constructor(tamanio, edad, especie) {
        super('planta');
        this.tamanio = tamanio;
        this.edad = edad;
        this.especie = especie;
    }
    getTamanio() {
        return this.tamanio;
    }
    getEdad() {
        return this.edad;
    }
    getEspecie() {
        return this.especie;
    }
}
let Girasol = new Planta(10, 2, 'girasol');
console.log(Girasol.getTipo());
console.log(Girasol.getTamanio());
console.log(Girasol.getEdad());
console.log(Girasol.getEspecie());
