import { IGameCard } from './card-model.interface';

export class GameCard implements IGameCard {
    id: number;
    name: string;
    rating: number;
    background: string;

}
