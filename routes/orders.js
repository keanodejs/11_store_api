var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/store';

// Create Routes for Prodocts

app.get('/orders', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('orders');

        collection.find({}).toArray(function(err, data) {
            
            res.json(data);
            db.close();
        });
    });
});

app.get('/orders/:id', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('orders');

        collection.findOne({'_id' : ObjectId(req.params.id)}, function(err, data) {
            
            res.send(data);
            db.close();
        });
    });
});

app.post('/orders', function(req, res) {

    MongoClient.connect(url, function(err, db) {


        // connect to users, and products collection
        var ordersCollection = db.collection('orders');
        // declare an orders object

        // search for a user with the objectid from req.body

        // add the user to the orders object

        // create the status and add it to the orders object

        // search for the product 

        // do a foreach on all products id from req.body.products

        // search for product in collection and add it to the orders object.

        // write order object to collection order in mongodb


        collection.insert(req.body, function(err, data) {
            
            res.send({"msg" : "Product created"});
            db.close();
        });
    });
});

// Update Route
app.put('/orders/:id', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('orders');

        collection.update({'_id' : ObjectId(req.params.id)}, {$set: req.body}, function(err, data) {
            
            res.send({"msg" : "order updated"});
            db.close();
        });
    });
});

// delete Route
app.delete('/orders/:id', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('orders');

        collection.remove({'_id' : ObjectId(req.params.id)}, function(err, data) {
            
            res.send({"msg" : "order deleted"});
            db.close();
        });
    });
});

module.exports = app;
