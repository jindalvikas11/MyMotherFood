
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

const verifyLogin = function(req, res){
    const body = req.body;
    const getPromise = utils.getItems.call(this, 'MyMotherFood.LoginInfo', 'userid', body.email);

    getPromise.then((results,fields) => {
        if(results.length){
            const result = results[0];
            if(result.password === body.password){
                req.mmfSession.userInfo = JSON.stringify(result);
                res.json({
                    code: '00',
                    message: 'success',
                    id: result.id,
                    type: result.user_type
                });
                res.end();
            }else{
                res.json({
                    code: '01',
                    message: 'Invalid Credentials. Please try again.',
                });
            }
        }else{
            res.json({
                code: '01',
                message: 'Invalid Credentials. Please try again.',
            });
        }  
    }).catch((err) => {
        res.json({
            code: '02',
            message: 'fail',
            error: err.stack
        });
    });
};

const signOut = function(req, res){
    req.mmfSession.reset();
    res.redirect('/public/#/signin');
};

module.exports = { createLogin, verifyLogin, signOut };