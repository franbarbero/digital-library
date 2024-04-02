import { MovieI } from "../interfaces/movie-i";

export class Movie implements MovieI{
    type:string = 'movie';

    constructor(
        public id: number,
        public title: string,
        public score: number,
        public synopsis: string,
        public creationDate: Date,
        public lastEditDate: Date,
    
        
    ) {}
}
