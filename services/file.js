var fs = require('fs');

var utils = require('./utils.js');




const writeFile = function (req, res) {

    var dir = 'temp';
    
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    var buf = new Buffer(req.body.data.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    
    req.body.name = utils.getUniqueKey('701');
    fs.writeFile(dir + '/' + req.body.name, buf, (err) => {
        if (err) throw err;
        res.json({
            code: '00',
            name: req.body.name
        });
    });
}

const readFile = function (req, res) {
    var filename = req.params.filename;
    fs.readFile('temp/'+filename, (err, data) => {
        if (err) throw err;
        else {
            res.send(data);
        }
    });

}

module.exports = { writeFile, readFile };