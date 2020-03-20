"use strict";
function funcionSinRetorno() {
    console.log('soy una funcion sin retorno');
}
funcionSinRetorno();
function funcionConRetorno() {
    var a = 10;
    var b = 30;
    return a * b;
}
var variableDeRetorno = funcionConRetorno();
console.log(variableDeRetorno);
function funcionConParametroObligatorios(numeroA, numeroB) {
    return numeroA * numeroB;
}
variableDeRetorno = funcionConParametroObligatorios(50, 100);
console.log(variableDeRetorno);
function funcionConParametroOpcionales(numeroA) {
    if (numeroA) {
        return numeroA;
    }
    return 0;
}
variableDeRetorno = funcionConParametroOpcionales();
console.log(variableDeRetorno);
variableDeRetorno = funcionConParametroOpcionales(20);
console.log(variableDeRetorno);
function funcionConParametroPorDefecto(anio) {
    if (anio === void 0) { anio = 2020; }
    return anio;
}
variableDeRetorno = funcionConParametroPorDefecto();
console.log(variableDeRetorno);
variableDeRetorno = funcionConParametroPorDefecto(2021);
console.log(variableDeRetorno);
var variableDeFuncion = function (anio) {
    if (anio === void 0) { anio = 2020; }
    return anio;
};
console.log(variableDeFuncion());
// let funcionDeFecla = ( nombre:string ):string => `hola soy ${nombre}`;
var funcionDeFecla = function (nombre) {
    return "hola soy " + nombre;
};
console.log(funcionDeFecla('jose'));
// TArea
// devolver los datos de usuario segun un id e imprimirlo en un mensaje de bienvenida
// entrada id:3434534
// salida hola jose tienes 34 y tu cernet es 234242
// lo suban a un repositorio de github y envien el enlace a la clase
