"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("../src/models/book");
var library_1 = require("../src/models/library");
var transaction_1 = require("../src/models/transaction");
var readline = require("readline");
var library = new library_1.Library();
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function mainMenu() {
    console.log("\nLibrary Menu:\n    1. Insert Book\n    2. Find Book\n    3. Remove Book\n    4. List Books\n    5. Apply Discount\n    6. Sell Book\n    0. Exit");
    rl.question('Choose an option: ', function (option) {
        switch (option) {
            case '1':
                insertBook();
                break;
            case '2':
                findBook();
                break;
            case '3':
                removeBook();
                break;
            case '4':
                listBooks();
                break;
            case '5':
                applyDiscount();
                break;
            case '6':
                sellBook();
                break;
            case '0':
                rl.close();
                break;
            default:
                console.log('Invalid option.');
                mainMenu();
                break;
        }
    });
}
function insertBook() {
    rl.question('Enter book details (title,author,genre,language,price,format,isbn,description,condition,location,publicationDate,publisher,pageCount): ', function (input) {
        var _a = input.split(','), title = _a[0], author = _a[1], genre = _a[2], language = _a[3], price = _a[4], format = _a[5], isbn = _a[6], description = _a[7], condition = _a[8], location = _a[9], publicationDate = _a[10], publisher = _a[11], pageCount = _a[12];
        var book = new book_1.Book(title, author, genre, language, parseFloat(price), format, isbn, description, condition, location, new Date(publicationDate), publisher, parseInt(pageCount));
        library.addBook(book);
        console.log("Book added: ".concat(book.title));
        mainMenu();
    });
}
function findBook() {
    rl.question('Enter ISBN of the book to find: ', function (isbn) {
        var book = library.findBook(isbn);
        if (book) {
            console.log("Book found: ".concat(book.title));
        }
        else {
            console.log('Book not found.');
        }
        mainMenu();
    });
}
function removeBook() {
    rl.question('Enter ISBN of the book to remove: ', function (isbn) {
        if (library.removeBook(isbn)) {
            console.log('Book removed.');
        }
        else {
            console.log('Book not found.');
        }
        mainMenu();
    });
}
function listBooks() {
    var books = library.listBooks();
    if (books.length === 0) {
        console.log('No books in library.');
    }
    else {
        books.forEach(function (book) { return console.log(book); });
    }
    mainMenu();
}
function applyDiscount() {
    rl.question('Enter ISBN of the book to apply discount: ', function (isbn) {
        var book = library.findBook(isbn);
        if (book) {
            rl.question('Enter discount percentage: ', function (discount) {
                var discountedPrice = transaction_1.Transactions.applyDiscount(book, parseFloat(discount));
                console.log("Discounted price: $".concat(discountedPrice));
                mainMenu();
            });
        }
        else {
            console.log('Book not found.');
            mainMenu();
        }
    });
}
function sellBook() {
    rl.question('Enter ISBN of the book to sell: ', function (isbn) {
        transaction_1.Transactions.sellBook(library, isbn);
        mainMenu();
    });
}
mainMenu();
