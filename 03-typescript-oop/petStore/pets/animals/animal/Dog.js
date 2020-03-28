"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = require("../Animal");
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, bornDate, color, sex, weight, height, race) {
        return _super.call(this, name, bornDate, color, sex, weight, height, race) || this;
    }
    Dog.prototype.getAge = function () {
        var age = new Date().getFullYear() - this.getBornDate().getFullYear();
        return age + " a\u00F1os";
    };
    Dog.prototype.showPetData = function () {
        var data = {
            tipo: this.getType(),
            nombre: this.getName(),
            edad: this.getAge(),
            color: this.getColor(),
            sexo: this.getSex(),
            raza: this.getRace(),
            peso: this.getWeight() + " kg",
            altura: this.getHeight() + " cm"
        };
        console.table(data);
    };
    Dog.prototype.makeNoise = function () {
        console.log(this.getName() + " esta ladrando.");
    };
    return Dog;
}(Animal_1.Animal));
exports.Dog = Dog;
