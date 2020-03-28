import { Cat } from './pets/animals/animal/Cat';
import { Dog } from './pets/animals/animal/Dog';
import { Plant } from './pets/plant/Plant';

const Snowball = new Cat( 'Snowball', new Date('2018-01-01'), 'blanco', 'macho', 8, 50, 'siames');
const Donkan = new Dog('Donkan', new Date('2019-01-01'), 'cafe', 'macho', 23, 80, 'mestizo');
const Girasol = new Plant('Girasol', new Date('2019-01-01'), 14);

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