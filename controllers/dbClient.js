const MongoClient = require('mongodb').MongoClient;
const mongoConnection = 'mongodb://Localhost:27017/store';
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';
const Product = require('../model/producschema');
const mongoose = require('mongoose');

const getData = (query, callBack) => {
    mongoose.connect(mongoConnection);
    Product.find(query, callBack);
};
const insertData = (myQuery, callBack) => {
    mongoose.connect(mongoConnection);
    const newProduct = new Product(myQuery);
    newProduct.save(callBack);
};
const deleteData = (myQuery, callBack) => {
    mongoose.connect(mongoConnection);
    Product.remove(myQuery, callBack);
};
module.exports = {
    getData,
    insertData,
    deleteData
};