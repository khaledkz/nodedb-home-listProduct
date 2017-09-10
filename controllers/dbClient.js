const MongoClient = require('mongodb').MongoClient;
const mongoConnection = 'mongodb://Localhost:27017/store';
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';
const Product = require('../model/producschema');
const mongoose = require('mongoose');

const getData = (collectionName, query, callBack) => {
    // MongoClient.connect(mongoConnection, (err, db) => {
    //     const cursor = db.collection(collectionName).find(query);
    //     cursor.toArray((err, myData) => {
    //         db.close();
    //         callBack(err, myData)
    //     });
    // });

    mongoose.connect(mongoConnection);
    Product.find(query, callBack);
};
const insertData = (collectionName, myQuery) => {
    MongoClient.connect(mongoConnection, (err, db) => {
        const cursor = db.collection(collectionName).insertOne(myQuery, (err, result) => {
            assert.equal(err, null);
            console.log("Inserted a document into the restaurants collection.");
        });
    });
};
module.exports = {
    getData,
    insertData
};