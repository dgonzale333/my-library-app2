"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
var Transactions = /** @class */ (function () {
    function Transactions() {
    }
    Transactions.applyDiscount = function (book, discount) {
        return book.price - (book.price * discount / 100);
    };
    Transactions.sellBook = function (library, isbn) {
        var book = library.findBook(isbn);
        if (book) {
            library.removeBook(isbn);
            console.log("Book sold: ".concat(book.title));
            return true;
        }
        console.log("Book with ISBN ".concat(isbn, " not found."));
        return false;
    };
    return Transactions;
}());
exports.Transactions = Transactions;
