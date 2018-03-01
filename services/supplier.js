
 const utils = require('./utils.js');

 const addSupplier = function(req, res){
    const body = req.body;

    const item = {
        'id': utils.getUniqueKey('101'),
        'first_name': body.firstName,
        'last_name': body.lastName,
        'phone': body.phone,
        'address_key': body.addressKey,
        'payment_key': body.paymentKey,
        'email': body.email
    };


    const savePromise = utils.saveItem.call(this, "MyMotherFood.SupplierInfo", item);
    
    savePromise.then((results,fields)=>{
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


const addSupplierAllInfo = function(req, res){
    const body = req.body;

    const adrKey = utils.getUniqueKey('201');
    const itemAdr = {
        'adr_key': adrKey,
        'adrline1': body.adrline1,
        'adrline2': body.adrline2,
        'city': body.city,
        'state': body.state,
        'country': body.country,
    };

    const supplierId = utils.getUniqueKey('101');

    const itemSupp = {
        'id': supplierId,
        'first_name': body.firstName,
        'last_name': body.lastName,
        'phone': body.phone,
        'address_key': adrKey,
        'email': body.email
    };

    const itemLogin = {
        'userid': body.email,
        'password': body.password,
        'id': supplierId,
        'user_type': body.type,
        'recovery_email': body.email,
        'recovery_phone': body.phone
    };


    const savePromiseAdr = utils.saveItem.call(this, "MyMotherFood.Address", itemAdr);

    const savePromiseSupp = utils.saveItem.call(this, "MyMotherFood.SupplierInfo", itemSupp);

    const savePromiseLogin = utils.saveItem.call(this, "MyMotherFood.LoginInfo", itemLogin);
    
    
    savePromiseAdr.then(savePromiseSupp).then(savePromiseLogin).then((results,fields)=>{
        res.json({
            code: '00',
            message: 'success',
            supplierId: supplierId,
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

module.exports = { addSupplier, addSupplierAllInfo };