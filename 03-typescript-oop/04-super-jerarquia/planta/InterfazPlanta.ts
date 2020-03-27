import { Planta } from './planta';


class InterfazPlanta extends Planta {

    constructor(
    ) {
        super(13, 4, 'rosa');
    }

    tamanioDePlanta() {
        let tamaño = super.getTamanio();
        console.log(`el tamaño de la planta es ${tamaño}`);
    }
}

let rosa = new InterfazPlanta();
rosa.tamanioDePlanta();