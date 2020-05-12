import { Organismo } from '../organismo';

// subclase
class Planta extends Organismo{
    // Estado
    // parametros
    private tamanio: number;
    private edad: number;
    private especie: string;

    // inicializador
    constructor(
        tamanio: number,
        edad: number, 
        especie: string
    ) {
        super( 'planta' );
        this.tamanio = tamanio;
        this.edad = edad;
        this.especie = especie;
    }

    public getTamanio(): number {
        return this.tamanio;
    }

    public getEdad(): number {
        return this.edad;
    }

    public getEspecie(): string {
        return this.especie;
    }
}

let Girasol = new Planta(10, 2, 'girasol');
console.log(Girasol.getTipo());
console.log(Girasol.getTamanio());
console.log(Girasol.getEdad());
console.log(Girasol.getEspecie());