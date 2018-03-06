
const utils = require('./utils.js');

const addSupplier = function (req, res) {
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

    savePromise.then((results, fields) => {
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


const addSupplierAllInfo = function (req, res) {

    const body = req.body;

    const getCoordinates = utils.getCoordinates.call(this, body);

    getCoordinates.then((result) => {
        saveSupplier(req, res, result.latitude, result.longitude);
    }).catch(err => {
        saveSupplier(req, res, null, null);
    });

};

const saveSupplier = function (req, res, latitude, longitude) {
    const body = req.body;

    const adrKey = utils.getUniqueKey('201');

    console.log('Address Key ' + adrKey);

    const itemAdr = {
        'adr_key': adrKey,
        'adrline1': body.adrline1,
        'adrline2': body.adrline2,
        'city': body.city,
        'state': body.state,
        'country': body.country,
        'latitude': latitude,
        'longitude': longitude
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

    savePromiseAdr.then(savePromiseSupp).then(savePromiseLogin).then((results, fields) => {
        req.mmfSession.userInfo = JSON.stringify(itemSupp);
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

const getDetails = function (req, res) {

    let supplierId;
    if (!req.mmfSession.userInfo) {
        supplierId = 'notauthorized';
    } else {
        supplierId = (JSON.parse(req.mmfSession.userInfo)).id;
    }


    const getPromise = utils.getItems.call(this, 'MyMotherFood.SupplierInfo', 'id', supplierId);

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

const getFoodItems = function (req, res) {
    let supplierId;
    if (!req.mmfSession.userInfo) {
        res.redirect('/public/#/signin');
        return;
    } else {
        supplierId = (JSON.parse(req.mmfSession.userInfo)).id;
    }

    const getPromise = utils.getItems.call(this, 'MyMotherFood.FoodItem', 'supplierId', supplierId);

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

module.exports = { addSupplier, addSupplierAllInfo, getDetails, getFoodItems };