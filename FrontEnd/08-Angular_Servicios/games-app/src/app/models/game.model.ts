import { IGame } from './game.interface';

export class Game implements IGame {
    id: string;
    name: string;
    description: string;
    released: Date;
    background_1: string;
    background_2: string;
    rating: number;
    platforms: string[];
    developers: string[];
    genres: string[];
    video: string;
}