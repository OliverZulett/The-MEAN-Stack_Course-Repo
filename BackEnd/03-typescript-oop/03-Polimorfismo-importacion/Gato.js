"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
// SUBCLASE 
class Gato extends Animal_1.Animal {
    // Estado
    constructor(nombre, edad, peso, color, sexo) {
        super(nombre, edad, peso, color, sexo);
    }
    // Comportamiento
    maulla() {
        super.hacerRuido('maullando');
    }
}
let Snowball = new Gato('Snowball', 7, 25, 'cafe', true);
Snowball.maulla();
Snowball.respira();
Snowball.come('pescado');
// Donkan.getNombre();
Snowball.duerme(15);
