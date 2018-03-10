
const express = require('express');

const bodyParser = require('body-parser');

const AWS = require('aws-sdk');

const cors = require('cors');

const utils = require('./utils.js');

const supplier = require('./supplier.js');

const consumer = require('./consumer.js');

const file = require('./file.js');


const food = require('./food.js');


const sessions = require('client-sessions');

var https = require('https');

//const SessionStore = require('express-sql-session')(session);

const login = require('./login.js');

var path = require('path');

var fs = require('fs');

var payment = require('./payment.js');

AWS.config.update({
    region: "us-east-1",
});

const app = express();

//app.use(bodyParser.json());

app.use(bodyParser.json({limit:'50mb'})); 
app.use(bodyParser.urlencoded({extended:true, limit:'50mb'}));

const secretKey = utils.randomString();




/*app.use(session({
    cookieName: 'session',
    secret: secretKey,
}));*/

//app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));

/*var options = {
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: 'MyMotherFood'
};
 
var sessionStore = new SessionStore(options);*/
 
app.use(sessions({
    cookieName: 'mmfSession',
    secret: secretKey,
    duration: 24 * 60 * 60 * 1000,
    cookie: { 
        path: '/'
    },
}));


app.post('/Supplier/AddSupplier',  supplier.addSupplier);

app.post('/Consumer/AddConsumer',  consumer.addConsumer);

app.get('/Consumer/GetDetails',  consumer.getDetails);

app.post('/Supplier/AddAllInfo',  supplier.addSupplierAllInfo);

app.get('/Supplier/GetDetails',  supplier.getDetails);

app.get('/Supplier/GetFoodItems',  supplier.getFoodItems);

app.post('/Supplier/GetAllSuppliers',  supplier.getAllSuppliers);



app.post('/Login/verifyLogin',  login.verifyLogin);

app.get('/Login/SignOut',  login.signOut);

app.post('/Food/AddFood',  food.addFood);

app.post('/Food/EditFood',  food.editFood);

app.post('/Food/DeleteFood',  food.deleteFood);

app.post('/File/WriteFile',  file.writeFile);

app.get('/File/ReadFile/:filename',  file.readFile);

app.post('/Food/AddToCart',  food.addToCart);

app.post('/Food/DeleteFromCart',  food.deleteFromCart);


app.get('/Consumer/GetCartItems',  consumer.getCartItems);

app.get('/User/GetAllInfo',  consumer.getAllInfo);

app.get('/Payment/PayBill',  payment.payBill);

app.get('/Payment/GetToken',  payment.getToken);





app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use('/public', express.static(path.join(__dirname, 'public')));


app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

var options = {
    key: fs.readFileSync( './localhost.key' ),
    cert: fs.readFileSync( './localhost.cert' ),
    requestCert: false,
    rejectUnauthorized: false
};

var port = process.env.PORT || 8080;

https.createServer(options, app).listen(port);

//var server = app.listen(port);

