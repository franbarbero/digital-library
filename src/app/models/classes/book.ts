import { BookI } from "../interfaces/book-i";

export class Book implements BookI {
    
    type:string = 'book';
    constructor(
        public id: number,
        public title: string,
        public score: number,
        public synopsis: string,
        public creationDate: Date,
        public lastEditDate: Date,
        
    ) {}
}
