
const utils = require('./utils.js');

const createLogin = function(req, res){
    const body = req.body;

    const item = {
        'userid': body.userid,
        'password': body.password,
        'id': body.id,
        'user_type': body.userType,
        'recovery_email': body.email,
        'recovery_phone': body.phone
    };


    const savePromise = utils.saveItem.call(this, "MyMotherFood.LoginInfo", item);
    
    savePromise.then((results,fields) => {
        res.json({
            code: '00',
            message: 'success',
            results: results,
            fields: fields
        });
    }).catch((err) => {
        res.json({
            code: '01',
            message: 'fail',
            error: err.stack
        });
    });
};

module.exports = { createLogin };