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

router.get('/book/:_id', (req, res) => {
    Book.getBookById(req.params._id, (err, book) => {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});

router.post('/book', (req, res) => {
    var book = req.body;
    Book.addBook(book, (err, book) => {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});

router.put('/book/:_id', (req, res) => {
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id, book, {}, (err, book) => {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});

router.delete('/book/:_id', (req, res) => {
    var id = req.params._id;
    Book.removeBook(id, (err, book) => {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});


module.exports = router;
