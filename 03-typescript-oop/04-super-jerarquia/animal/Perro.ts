import { Animal } from './Animal';

// SUBCLASE 

class Perro extends Animal {
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
    public ladra(): void {
        // console.log(`${this.nombre} esta ladrando`);
        super.hacerRuido('ladrando')
    }
}

let Donkan = new Perro('Donkan', 7, 25, 'cafe', true);
console.log(`${Donkan.getTipo()}`);

Donkan.ladra();
Donkan.respira();
Donkan.come('comida balanceada');
// Donkan.getNombre();
Donkan.duerme( 12 );
