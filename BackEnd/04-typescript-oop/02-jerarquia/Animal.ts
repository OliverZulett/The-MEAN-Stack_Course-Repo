// SUPERCLASE

class Animal { //Nombre de clase
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
}

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
        console.log(`${this.nombre} esta ladrando`);
    }
}

let Donkan = new Perro('Donkan', 7, 25, 'cafe', true);
Donkan.ladra();
Donkan.respira();
Donkan.come('comida balanceada');
// Donkan.getNombre();
Donkan.duerme( 12 );

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
        console.log(`${this.nombre} esta maullando`);
    }
}

let Snowball = new Gato('Snowball', 7, 25, 'cafe', true);
Snowball.maulla();
Snowball.respira();
Snowball.come('pescado');
// Donkan.getNombre();
Snowball.duerme( 15 );
