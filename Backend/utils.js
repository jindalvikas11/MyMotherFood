
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT
});

const saveItem = function (table, item) {
    return new Promise((resolve, reject) => {
        const querStmt = 'INSERT INTO ' + table + ' SET ?';
        connection.query(querStmt, item, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results, fields);
            }
        });
    });
};

const getItems = function (table, id) {
    return new Promise((resolve, reject) => {
        var docClient = new AWS.DynamoDB.DocumentClient()

        var params = {
            TableName: table,
            Key: {
                "id": id
            }
        };

        docClient.get(params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                const item = data.Item ? JSON.parse(data.Item.itemsJSON) : {};
                resolve(item);
            }
        });
    });
};



const getUniqueKey = function (prefix) {
    return (prefix + Math.floor(Math.random().toFixed(12) * 10e12));
}

module.exports = { saveItem, getItems, getUniqueKey };