const mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var myproduct = new Schema({
    name: String,
    price: Number,
    date: String,
    rate: Number
});

// Compile model from schema
var Product = mongoose.model('products', myproduct);

//Export model
module.exports = Product;