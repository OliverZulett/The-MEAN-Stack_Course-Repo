import { Pet } from '../Pet';

export abstract class Animal extends Pet {

    private name: string;
    private bornDate: Date;
    private color: string;
    private sex: string;
    private weight: number;
    private height: number;
    private race: string;

    constructor(
        name: string,
        bornDate: Date,
        color: string,
        sex: string,
        weight: number,
        height: number,
        race: string
    ) {
        super('Animal');
        this.name = name;
        this.bornDate = bornDate;
        this.color = color;
        this.sex = sex;
        this.weight = weight;
        this.height = height;
        this.race = race;
    }

    protected getName(): string {
        return this.name;
    }

    protected getBornDate(): Date {
        return this.bornDate;
    }

    protected getColor(): string {
        return this.color;
    }

    protected getSex(): string {
        return this.sex;
    }

    protected getWeight(): number {
        return this.weight;
    }

    protected getHeight(): number {
        return this.height;
    }

    protected getRace(): string {
        return this.race;
    }
    

}
