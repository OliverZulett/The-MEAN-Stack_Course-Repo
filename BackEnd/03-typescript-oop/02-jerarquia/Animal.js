"use strict";
// SUPERCLASE
class Animal {
    // inicializacion o constructor
    constructor(nombre, edad, peso, color, sexo) {
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
}
class Perro extends Animal {
    // Estado
    constructor(nombre, edad, peso, color, sexo) {
        super(nombre, edad, peso, color, sexo);
    }
    // Comportamiento
    ladra() {
        console.log(`${this.nombre} esta ladrando`);
    }
}
let Donkan = new Perro('Donkan', 7, 25, 'cafe', true);
Donkan.ladra();
Donkan.respira();
Donkan.come('comida balanceada');
// Donkan.getNombre();
Donkan.duerme(12);
class Gato extends Animal {
    // Estado
    constructor(nombre, edad, peso, color, sexo) {
        super(nombre, edad, peso, color, sexo);
    }
    // Comportamiento
    maulla() {
        console.log(`${this.nombre} esta maullando`);
    }
}
let Snowball = new Gato('Snowball', 7, 25, 'cafe', true);
Snowball.maulla();
Snowball.respira();
Snowball.come('pescado');
// Donkan.getNombre();
Snowball.duerme(15);
