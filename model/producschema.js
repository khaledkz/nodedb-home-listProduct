// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    name: String,
    price: Number,
    date: String,
    rate: Number
});

// Compile model from schema
var Product = mongoose.model('products', Schema);

//Export model
module.exports = Product;