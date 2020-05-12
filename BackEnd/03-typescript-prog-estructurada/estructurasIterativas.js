"use strict";
var arrayParaIterar = [10, 20, 30];
for (var _i = 0, arrayParaIterar_1 = arrayParaIterar; _i < arrayParaIterar_1.length; _i++) {
    var valor = arrayParaIterar_1[_i];
    console.log(valor);
}
for (var indice in arrayParaIterar) {
    console.log(indice);
}
arrayParaIterar.forEach(function (valor, indice) {
    console.log(valor);
    console.log(indice);
});
