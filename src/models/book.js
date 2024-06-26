"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author, genre, language, price, format, isbn, description, condition, location, publicationDate, publisher, pageCount) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.language = language;
        this.price = price;
        this.format = format;
        this.isbn = isbn;
        this.description = description;
        this.condition = condition;
        this.location = location;
        this.publicationDate = publicationDate;
        this.publisher = publisher;
        this.pageCount = pageCount;
    }
    return Book;
}());
exports.Book = Book;
