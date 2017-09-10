const express = require("express");

const router = express.Router();

const formidable = require('express-formidable')
router.use(formidable());

const dbClient = require('./dbClient');
const ObjectId = require('mongodb').ObjectId;


router.get('/', function(req, res) {
    const callback = (err, product) => {
        res.render('index', {
            product: product
        })
    }

    dbClient.getData({}, callback)

});

router.get('/item-:productid', (req, res) => {

    const productid = req.params.productid;

    const callback = (err, product) => {
        res.render('single-item', {
            product: product[0]
        })
    }
    const query = ObjectId(productid);

    dbClient.getData(query, callback)

});

router.get('/admin', function(req, res) {
    res.render('admin')
});

router.post('/add-product', function(req, res) {
    // let newProduct = req.fields;
    // dbClient.insertData(newProduct)

    // const callback = (err, product) => {
    //     res.render('index', {
    //         product: product
    //     })
    // }

    // dbClient.getData({}, callback)

    let newProduct = req.fields;
    const callBack = (error, posts) => {
        if (error) {
            console.error(error);
            return res.redirect('/error');
        }
        //const producty = req.fields;
        //console.log(producty);
        return res.redirect('/');
    }
    dbClient.insertData(newProduct, callBack);
});

module.exports = router;