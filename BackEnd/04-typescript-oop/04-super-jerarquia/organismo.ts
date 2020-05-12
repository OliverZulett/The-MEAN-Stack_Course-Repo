export class Organismo {
    // Estado
    protected tipo: string;

    constructor( tipo:string ) {
        this.tipo = tipo;
    }

    // Comportamiento

    getTipo(): string {
        return this.tipo;
    }
}