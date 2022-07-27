const Book = require('../models/book.model');

// Simple version without validation or sanitation
exports.home = function (req, res) {
    res.send('Welcome to Jain Library');
};

// Create an entry of book in database
exports.book_create = function (req, res) {
    console.log(req.body);
    let book = new Book(
        {
            name: req.body.name,
            author: req.body.author,
            tika: req.body.tika,
            language: req.body.language,

        }
    );

    book.save(function (err) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.send('Book registered successfully');
        }
    })
};

exports.book_list = function (req, res) {
    console.log(req.body);
    Book.find(function (err, book) {
        if (err) return next(err);
        res.send( book );
    })
}

exports.book_details = function (req, res) {
    console.log(req.body);
    Book.findById(req.params.id, function (err, book) {
        if (err) return next(err);
        res.send(book);
    })
};