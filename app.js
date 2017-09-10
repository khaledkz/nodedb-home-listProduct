const express = require("express");
const app = express();
var exphbs = require('express-handlebars');

app.use(express.static("public"));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const siteController = require('./controllers/siteController');
app.use('/', siteController);

app.listen('3000')