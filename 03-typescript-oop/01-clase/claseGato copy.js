"use strict";
var Gato = /** @class */ (function () {
    function Gato(nombre) {
        this.nombre = nombre;
    }
    // Comportamiento
    Gato.prototype.getNombre = function () {
        console.log(this.nombre);
    };
    return Gato;
}());
var Snowball = new Gato('snowball');
Snowball.getNombre();
