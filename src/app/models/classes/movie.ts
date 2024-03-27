import { MovieI } from "../interfaces/movie-i";

export class Movie implements MovieI{
    constructor(
        public id: number,
        public title: string,
        public score: number,
        public creationDate: Date,
        public lastEditDate: Date,
    
        
    ) {}
}
