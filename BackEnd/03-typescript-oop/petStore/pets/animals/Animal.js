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
var Pet_1 = require("../Pet");
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal(name, bornDate, color, sex, weight, height, race) {
        var _this = _super.call(this, 'Animal') || this;
        _this.name = name;
        _this.bornDate = bornDate;
        _this.color = color;
        _this.sex = sex;
        _this.weight = weight;
        _this.height = height;
        _this.race = race;
        return _this;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.getBornDate = function () {
        return this.bornDate;
    };
    Animal.prototype.getColor = function () {
        return this.color;
    };
    Animal.prototype.getSex = function () {
        return this.sex;
    };
    Animal.prototype.getWeight = function () {
        return this.weight;
    };
    Animal.prototype.getHeight = function () {
        return this.height;
    };
    Animal.prototype.getRace = function () {
        return this.race;
    };
    return Animal;
}(Pet_1.Pet));
exports.Animal = Animal;
