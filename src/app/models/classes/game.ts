import { GameI } from "../interfaces/game-i";

export class Game implements GameI {
    constructor(
        public id: number,
        public title: string,
        public score: number,
        public creationDate: Date,
        public lastEditDate: Date,
        
    ) {}
}
