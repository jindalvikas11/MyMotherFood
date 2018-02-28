
 const utils = require('./utils.js');

 const addSupplier = function(req, res){
    const body = req.body;

    const item = {
        'id': utils.getUniqueKey('101'),
        'first_name': body.firstName,
        'last_name': body.lasstName,
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

module.exports = { addSupplier };