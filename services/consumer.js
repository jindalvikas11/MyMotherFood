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

const getCartItems = function (req, res) {
    let consumerId;
    if (!req.mmfSession.userInfo) {
        res.redirect('/public/#/signin');
        return;
    } else {
        if(!req.query.isSupplier){
            consumerId = (JSON.parse(req.mmfSession.userInfo)).id;
        }else{
            consumerId = req.query.consumerId;
        }
    }

    const getPromise = utils.getItems.call(this, 'MyMotherFood.CartInfo', 'consumerId', consumerId);

    getPromise.then((results, fields) => {
        res.json(results);
    }).catch(err => {
        res.json({
            code: '02',
            message: 'Get Food Items failed',
            error: err.stack
        });
    });
};

const getAllInfo = function(req, res){
    let type,id;
    if(req.mmfSession.userInfo){
        const userInfo = JSON.parse(req.mmfSession.userInfo);
        type = userInfo.user_type;
        id = userInfo.id;
    }else{
        res.redirect('/public/#/signin');
        return;
    }

    let infoMethod;

    if(type === 'C'){
        infoMethod = `GetConsumerInfo`;
    }else{

    }

    const executePromise = utils.executeProcedure.call(this, infoMethod, id);

    executePromise.then((results, fields) => {
        console.log(JSON.stringify(results[0]));
        results = processResponse(results[0]);
        res.json(results);
    }).catch(err => {
        res.json({
            code: '02',
            message: 'Get Food Items failed',
            error: err.stack
        });
    });
}

const processResponse = function(results){
    let response = {
        userInfo : {
            firstName: results[0].first_name,
            lastName: results[0].last_name,
            phone: results[0].phone,
            email: results[0].email
        }
    };

    let cartItems = new Array;
    response.cart = cartItems;

    for(let i = 0; i < results.length; i++){
        if(!results[i].id) continue;
        cartItems.push({
            id: results[i].id,
            supplier:{
                id: results[i].supplierId,
                firstName: results[i].SuppFirstName,
                lastName: results[i].SuppLastName,
                phone: results[i].SuppPhone,                
                email: results[i].SuppEmail
            },
            food:{
                id: results[i].foodId,
                name: results[i].name,
                img: results[i].img,
                quantity: results[i].quantity,
                price: results[i].price
            }
        });
    }
    return response;
}

module.exports = { addConsumer, getDetails, getCartItems, getAllInfo };