const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    author: { type: String, max: 100 },
    tika: { type: String, max: 100 },
    language: { type: String, required: true, max: 100 }
});

const Books = mongoose.connection.useDb('JainLibrary');

//export the model
module.exports = Books.model('Book', BookSchema);