
// SUPERCLASE

export class Animal { 
    // Estado

    // atributos
    protected nombre: string;
    protected edad: number;
    public peso: number;
    public color: string;
    public sexo: boolean;

    // inicializacion o constructor
    constructor(
        nombre:string,
        edad: number,
        peso: number,
        color: string,
        sexo: boolean
    ) {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.color = color;
        this.sexo = sexo;
    }

    // Comportamiento
    private getNombre():string {
        return this.nombre;
        // console.log(`El gato se llama ${this.nombre}`);
    }

    public getEdad(): number {
        return this.edad;
    }

    public respira():void {
        console.log(`${this.getNombre()} esta respirando`);
    }

    public come( tipoDeAlimento:string ):void {
        console.log(`${this.nombre} come solo comida de tipo : ${tipoDeAlimento}`);
    }

    protected duerme( horasQueDuerme: number ): void {
        console.log(`${this.nombre} duerme un total de ${horasQueDuerme} hrs`);
    }

    public meow(): void {
        console.log(`${this.nombre} hace meow`);
    }

    public recorre( distancia: number ): number {
        const velocidad:number = 10;
        return distancia/velocidad;
    }

    protected hacerRuido( tipoDeRuido:string): void {
        console.log(`${this.nombre} esta ${tipoDeRuido}`);
    }
}