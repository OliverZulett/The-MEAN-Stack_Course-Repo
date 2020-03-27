"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const organismo_1 = require("../organismo");
// SUPERCLASE
class Animal extends organismo_1.Organismo {
    // inicializacion o constructor
    constructor(nombre, edad, peso, color, sexo) {
        super('animal');
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.color = color;
        this.sexo = sexo;
    }
    // Comportamiento
    getNombre() {
        return this.nombre;
        // console.log(`El gato se llama ${this.nombre}`);
    }
    getEdad() {
        return this.edad;
    }
    respira() {
        console.log(`${this.getNombre()} esta respirando`);
    }
    come(tipoDeAlimento) {
        console.log(`${this.nombre} come solo comida de tipo : ${tipoDeAlimento}`);
    }
    duerme(horasQueDuerme) {
        console.log(`${this.nombre} duerme un total de ${horasQueDuerme} hrs`);
    }
    meow() {
        console.log(`${this.nombre} hace meow`);
    }
    recorre(distancia) {
        const velocidad = 10;
        return distancia / velocidad;
    }
    hacerRuido(tipoDeRuido) {
        console.log(`${this.nombre} esta ${tipoDeRuido}`);
    }
}
exports.Animal = Animal;
