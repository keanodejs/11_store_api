var express = require('express');
var app = express();

var BodyParser = require('body-parser'); // middle
app.use(BodyParser.urlencoded({
    extended: true
}));
app.use(BodyParser.json());

var users = require('./routes/users.js');
app.use(users);

var products = require('./routes/products.js');
app.use(products);

app.listen(3000);
