"use strict";
// booleano
var booleano = true;
// numerico
var numero = 2020;
// string
var texto = 'soy un string';
// any
var cualquiera = false;
any: cualquiera = 2021;
any: cualquiera = "soy otro string";
// arreglos
var array = [10, 20, 30];
// let array2: number[] = [20,40,50];
// taplas
var tupla = [10, "20", true];
var valores;
(function (valores) {
    valores[valores["boleano"] = 1] = "boleano";
    valores[valores["numero"] = 10] = "numero";
})(valores || (valores = {}));
var nombre = 'oliver';
var edad = 26;
// let mensaje2:string = 'hola soy ';
// let mensaje3:string = ' tengo '
var mensaje2 = "hola soy " + nombre + " y tengo " + edad;
console.log(booleano);
console.log(numero);
console.log(cualquiera);
console.log(array[2]);
console.log(tupla[0]);
console.log(valores.boleano);
console.log(valores.numero);
console.log(mensaje2);
