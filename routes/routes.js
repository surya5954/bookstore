var express = require('express');
const Book = require('../handle');
var router = express.Router();

router.get('/books', (req, res) => {
    Book.getBooks((err, books) => {
        if (err) {
            throw err;
        }
        res.status(200).send(books);
    });
});

router.get('/books/:_id', (req, res) => {
    Book.getBookById(req.params._id, (err, book) => {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});

router.post('/books', (req, res) => {
    var book = req.body;
    Book.addBook(book, (err, book) => {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});

router.put('/books/:_id', (req, res) => {
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id, book, {}, (err, book) => {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});

router.delete('/books/:_id', (req, res) => {
    var id = req.params._id;
    Book.removeBook(id, (err, book) => {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});


module.exports = router;