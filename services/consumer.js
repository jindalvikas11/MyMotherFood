const utils = require('./utils.js');

const addConsumer = function (req, res) {
    const body = req.body;



    const consumerId = utils.getUniqueKey('401');

    const item = {
        'id': consumerId,
        'first_name': body.firstName,
        'last_name': body.lastName,
        'phone': body.phone,
        'address_key': null,
        'email': body.email
    };

    const itemLogin = {
        'userid': body.email,
        'password': body.password,
        'id': consumerId,
        'user_type': body.type,
        'recovery_email': body.email,
        'recovery_phone': body.phone
    };


    const savePromiseSupp = utils.saveItem.call(this, "MyMotherFood.ConsumerInfo", item);

    const savePromiseLogin = utils.saveItem.call(this, "MyMotherFood.LoginInfo", itemLogin);


    savePromiseLogin.then((results, fields) => {
        req.mmfSession.userInfo = JSON.stringify(itemLogin);
        res.json({
            code: '00',
            message: 'success',
            supplierId: consumerId,
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

const getDetails = function (req, res) {

    let consumerId;

    console.log(req.mmfSession.userInfo);
    if (!req.mmfSession.userInfo) {
        consumerId = 'notauthorized';
    } else {
        consumerId = (JSON.parse(req.mmfSession.userInfo)).id;
    }


    const getPromise = utils.getItems.call(this, 'MyMotherFood.ConsumerInfo', 'id', consumerId);

    getPromise.then((results, fields) => {
        if (results.length) {
            const result = results[0];
            res.json({
                firstName: result.first_name,
                lastName: result.last_name,
                email: result.email,
                phone: result.phone,
                type: result.user_type
            });
        } else {
            res.json({
                code: '01',
                message: 'Invalide Session'
            });
        }
    }).catch(err => {
        res.json({
            code: '02',
            message: 'fail',
            error: err.stack
        });
    });

};

module.exports = { addConsumer, getDetails };