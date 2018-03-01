
const express = require('express');

const bodyParser = require('body-parser');

const AWS = require('aws-sdk');

const cors = require('cors');

const utils = require('./utils.js');

const supplier = require('./supplier.js');

const login = require('./login.js');

AWS.config.update({
    region: "us-east-1",
});

const app = express();

app.use(bodyParser.json());

app.options('*', cors());

app.post('/Supplier/AddSupplier', cors(), supplier.addSupplier);

app.post('/Supplier/AddAllInfo', cors(), supplier.addSupplierAllInfo);

app.post('/Login/verifyLogin', cors(), login.verifyLogin);

var port = process.env.PORT || 8080;

var server = app.listen(port);

