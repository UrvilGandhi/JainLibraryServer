const express = require('express');
const bodyParser = require('body-parser');

//Import routes for the books
const book = require('./routes/book.route');

//Initialize our express app
const app = express();

//Mongoose SetUp connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://gandhi07:Xolo%40q600@cluster0.pqqrxgx.mongodb.net/?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const cors = require('cors');
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/books', book);

const port = 1008;

app.listen(port, () => {
    console.log("Server is up and running on the port : " + port);
})