import { BookI } from "../interfaces/book-i";

export class Book implements BookI {
    constructor(
        public id: number,
        public title: string,
        public score: number,
        public creationDate: Date,
        public lastEditDate: Date,
        
    ) {}
}
