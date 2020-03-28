import { Animal } from '../Animal';
import { PetInterface } from '../PetInterface';

export class Dog extends Animal implements PetInterface {

    constructor(
        name: string,
        bornDate: Date,
        color: string,
        sex: string,
        weight: number,
        height: number,
        race: string
    ) {
        super(
            name,
            bornDate,
            color,
            sex,
            weight,
            height,
            race
        );
    }

    private getAge(): string {
        const age = new Date().getFullYear() - this.getBornDate().getFullYear();
        return `${age} años`;
    }

    public showPetData(): void {
        const data = {
            tipo: this.getType(),
            nombre : this.getName(),
            edad : this.getAge(),
            color : this.getColor(),
            sexo : this.getSex(),
            raza : this.getRace(),
            peso : `${this.getWeight()} kg`,
            altura : `${this.getHeight()} cm`
        }
        console.table(data);
    }

    public makeNoise(): void {
        console.log(`${this.getName()} esta ladrando.`);
    }

}
