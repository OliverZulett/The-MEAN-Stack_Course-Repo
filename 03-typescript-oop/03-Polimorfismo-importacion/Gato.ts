import { Animal } from './Animal';

// SUBCLASE 

class Gato extends Animal {
    // Estado
    constructor(
        nombre:string,
        edad: number,
        peso: number,
        color: string,
        sexo: boolean
    ) {
        super( nombre, edad, peso, color, sexo);
    }

    // Comportamiento
    public maulla(): void {
        super.hacerRuido('maullando');
    }
}

let Snowball = new Gato('Snowball', 7, 25, 'cafe', true);
Snowball.maulla();
Snowball.respira();
Snowball.come('pescado');
// Donkan.getNombre();
Snowball.duerme( 15 );