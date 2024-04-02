import { GameI } from "../interfaces/game-i";

export class Game implements GameI {
    type:string = 'game';

    constructor(
        public id: number,
        public title: string,
        public score: number,
        public synopsis: string,
        public creationDate: Date,
        public lastEditDate: Date,
        
    ) {}
}
