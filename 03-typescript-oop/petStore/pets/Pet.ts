// Super clase Abstracta

export abstract class Pet {

    // Estado: no se declaran variables
    // colo un contructor vacio con las 
    // variables que se usaran en las 
    // subclases
    constructor(public type: string) {
    }

    // Comportamiento: se declaran metodos que deben ser 
    // instanciados desde las Subclases
    protected getType(): string{
        return this.type;
    };

}
