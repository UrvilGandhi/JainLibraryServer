const { Router } = require('express');
const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

//Require the controllers
const book_controller = require('../controllers/book.controller');

// test url to check all of our files are communicating correctly
router.get('/home', book_controller.home);
router.post('/create', book_controller.book_create);
router.get('/list', book_controller.book_list);
router.get('/details/:id', book_controller.book_details);

module.exports = router;