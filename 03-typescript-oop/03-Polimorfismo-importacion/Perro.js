"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
// SUBCLASE 
class Perro extends Animal_1.Animal {
    // Estado
    constructor(nombre, edad, peso, color, sexo) {
        super(nombre, edad, peso, color, sexo);
    }
    // Comportamiento
    ladra() {
        // console.log(`${this.nombre} esta ladrando`);
        super.hacerRuido('ladrando');
    }
}
let Donkan = new Perro('Donkan', 7, 25, 'cafe', true);
Donkan.ladra();
Donkan.respira();
Donkan.come('comida balanceada');
// Donkan.getNombre();
Donkan.duerme(12);
