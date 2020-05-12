import { Pet } from '../Pet';
import { PlantInterface } from './PlantInterface';

export class Plant extends Pet implements PlantInterface {

    private spices: string;
    private bornDate: Date;
    private height: number;

    constructor(
        spices: string,
        bornDate: Date,
        height: number
    ) {
        super('Plant');
        this.spices = spices;
        this.bornDate = bornDate;
        this.height = height;
    }

    private getAge(): string {
        const age = new Date().getFullYear() - this.bornDate.getFullYear();
        return `${age} años`;
    }

    public showPlantData(): void {
        const data = {
            tipo : this.getType(),
            especie : this.spices,
            edad : this.getAge(),
            altura : `${this.height} cm`
        }
        console.table(data)
    }

}
