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
var Plant = /** @class */ (function (_super) {
    __extends(Plant, _super);
    function Plant(spices, bornDate, height) {
        var _this = _super.call(this, 'Plant') || this;
        _this.spices = spices;
        _this.bornDate = bornDate;
        _this.height = height;
        return _this;
    }
    Plant.prototype.getAge = function () {
        var age = new Date().getFullYear() - this.bornDate.getFullYear();
        return age + " a\u00F1os";
    };
    Plant.prototype.showPlantData = function () {
        var data = {
            tipo: this.getType(),
            especie: this.spices,
            edad: this.getAge(),
            altura: this.height + " cm"
        };
        console.table(data);
    };
    return Plant;
}(Pet_1.Pet));
exports.Plant = Plant;
