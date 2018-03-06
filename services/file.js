var fs = require('fs');
var AWS = require('aws-sdk');
var utils = require('./utils.js');

AWS.config.update({
    region: 'us-east-1',
    accessKeyId: 'AKIAIOW6Y5VRCRJ5NPPQ',
    secretAccessKey: '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'
});

const writeFile = function (req, res) {
    var s3 = new AWS.S3();

    var params = {
        Bucket: "mymotherfood",
        Key: req.body.name
    };

    if (req.body.name) {

        s3.deleteObject(params, (err, data) => {
            if (err) console.log(err, err.stack); // an error occurred
            else {
                req.body.name = utils.getUniqueKey('701');
                createFile(req, res);
            }
        });
    } else {
        req.body.name = utils.getUniqueKey('701');
        createFile(req, res);
    }
}

const createFile = function (req, res) {
    var s3 = new AWS.S3();
    var buf = new Buffer(req.body.data.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    setTimeout(() =>
        s3.putObject({
            Bucket: 'mymotherfood',
            CacheControl: 'no-cache',
            Key: (req.body.name),
            Body: buf,
            ContentEncoding: 'base64',
            ContentType: 'image/jpeg',
            ACL: 'public-read'
        }, function (resp) {
            res.json({
                code: '00',
                name: req.body.name
            })
        }), 2000);
}

module.exports = { writeFile };