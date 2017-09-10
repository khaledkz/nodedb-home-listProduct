const MongoClient = require('mongodb').MongoClient;

const mongoConnection = 'mongodb://Localhost:27017/store';

var assert = require('assert');
var url = 'mongodb://localhost:27017/test';


const getData = (collectionName, query, callBack) => {

    MongoClient.connect(mongoConnection, (err, db) => {

        const cursor = db.collection(collectionName).save(query);

        cursor.toArray((err, myData) => {
            db.close();
            callBack(err, myData)
        });

    });
};

// const insertData = (collectionName, query) => {

//     MongoClient.connect(mongoConnection, (err, db) => {

//         const cursor = db.collection(collectionName).insert(query);


//         cursor.toArray((err, myData) => {
//             db.close();
//             // callBack(err, myData)
//         });

//     });

// };


const insertData = (collectionName, myQuery, callBack) => {

    MongoClient.connect(mongoConnection, (err, db) => {

        const cursor = db.collection(collectionName).insertOne(myQuery, function(err, result) {
            assert.equal(err, null);
            console.log("Inserted a document into the restaurants collection.");
            callback();
        });
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            assert.equal(null, err);
            if (err) throw err;
            cursor(db, function() {
                db.close();
            });
        });
    });
};

module.exports = {
    getData,
    insertData
};