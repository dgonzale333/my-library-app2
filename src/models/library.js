"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.findBook = function (isbn) {
        return this.books.find(function (book) { return book.isbn === isbn; });
    };
    Library.prototype.removeBook = function (isbn) {
        var index = this.books.findIndex(function (book) { return book.isbn === isbn; });
        if (index !== -1) {
            this.books.splice(index, 1);
            return true;
        }
        return false;
    };
    Library.prototype.listBooks = function () {
        return this.books;
    };
    return Library;
}());
exports.Library = Library;
