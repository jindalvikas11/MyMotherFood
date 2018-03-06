
const mysql = require('mysql');

var NodeGeocoder = require('node-geocoder');

var options = {
    provider: 'google',
   
    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: 'AIzaSyDixmuqcPc2JdfDpSgAtEaKlmSFKKJJkYc', // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
};
   
var geocoder = NodeGeocoder(options);

let connection;

if (process && process.env.RDS_HOSTNAME) {
    connection = mysql.createConnection({
        host: process.env.RDS_HOSTNAME,
        user: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        port: process.env.RDS_PORT
    });
} else {
    connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '2035447',
        port: '3306'
    });
}

const getCoordinates = function(adrObj){
    
    return new Promise((resolve, reject) => {
        const address = adrObj.adrline1 + ' ' + adrObj.adrline2 + ', ' + adrObj.city + ', ' + adrObj.state + ', ' + adrObj.country;
        
        console.log(address);

        geocoder.geocode(address, function(err, res) {
            console.log(JSON.stringify(res));
            console.log(JSON.stringify(err));
            
            if(err || res.length === 0){
                reject('Location not found');
            }else{
                resolve(res[0]);
            }
        });     
    }); 
}

const saveItem = function (table, item) {
    return new Promise((resolve, reject) => {
        const querStmt = 'INSERT INTO ' + table + ' SET ?';
        connection.query(querStmt, item, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results, fields);
            }
            //connection.destroy();
        });
    });
};

const updateItem = function (table, cols, values, colName, colVal) {
    return new Promise((resolve, reject) => {
        console.log(cols);
       
        const querStmt = 'UPDATE ' + table + ' SET ' + cols.join(' = ?, ') + ' = ? WHERE ' 
                         + colName + ' = ?';

        console.log(querStmt);

        values.push(colVal);
        connection.query(querStmt, values, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results, fields);
            }
            //connection.destroy();
        });
    });
};

const deleteItem = function(table, colName, colVal){
    return new Promise((resolve, reject) => {
        const querStmt = 'DELETE FROM ' + table + ' WHERE ' + colName + '=' + "'" + colVal + "'";
        connection.query(querStmt, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results, fields);
            }
            //connection.destroy();
        });
    });
};

const getItems = function (table, columnName, columnVal) {
    return new Promise((resolve, reject) => {
        const querStmt = "SELECT * FROM " + table + " WHERE " + columnName + "='" + columnVal + "'";
        connection.query(querStmt, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results, fields);
            }
            //connection.destroy();
        });
    });
};



const getUniqueKey = function (prefix) {
    return (prefix + Math.floor(Math.random().toFixed(12) * 10e11));
}

function randomString() {
    const length = 32;
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}


module.exports = { saveItem, getItems, getUniqueKey, randomString, updateItem, deleteItem, getCoordinates };