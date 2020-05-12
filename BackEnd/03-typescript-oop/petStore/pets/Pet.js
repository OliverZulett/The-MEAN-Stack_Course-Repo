"use strict";
// Super clase Abstracta
Object.defineProperty(exports, "__esModule", { value: true });
var Pet = /** @class */ (function () {
    // Estado: no se declaran variables
    // colo un contructor vacio con las 
    // variables que se usaran en las 
    // subclases
    function Pet(type) {
        this.type = type;
    }
    // Comportamiento: se declaran metodos que deben ser 
    // instanciados desde las Subclases
    Pet.prototype.getType = function () {
        return this.type;
    };
    ;
    return Pet;
}());
exports.Pet = Pet;
