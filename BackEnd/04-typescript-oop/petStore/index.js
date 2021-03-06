"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cat_1 = require("./pets/animals/animal/Cat");
var Dog_1 = require("./pets/animals/animal/Dog");
var Plant_1 = require("./pets/plant/Plant");
var Snowball = new Cat_1.Cat('Snowball', new Date('2018-01-01'), 'blanco', 'macho', 8, 50, 'siames');
var Donkan = new Dog_1.Dog('Donkan', new Date('2019-01-01'), 'cafe', 'macho', 23, 80, 'mestizo');
var Girasol = new Plant_1.Plant('Girasol', new Date('2019-01-01'), 14);
console.group('cat');
Snowball.makeNoise();
Snowball.showPetData();
console.groupEnd();
console.group('dog');
Donkan.makeNoise();
Donkan.showPetData();
console.groupEnd();
console.group('plant');
Girasol.showPlantData();
console.groupEnd();
