// Get Books
const Book = require('./models/book');
const connectDatabase = require("./db");


module.exports.getBooks = async (callback, limit) => {
    await connectDatabase();
    Book.find(callback).limit(limit);
}

// Get Book
module.exports.getBookById = async (id, callback) => {
    await connectDatabase();
    Book.findById(id, callback);
}

// Add Book
module.exports.addBook = async (book, callback) => {
    await connectDatabase();
    Book.create(book, callback);
}

// Update Book
module.exports.updateBook = async (id, book, options, callback) => {
    await connectDatabase();
    var query = { _id: id };
    var update = {
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        release_date: book.release_date
    }
    Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeBook = async (id, callback) => {
    await connectDatabase();
    var query = { _id: id };
    Book.remove(query, callback);
}
