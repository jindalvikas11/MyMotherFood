
const utils = require('./utils.js');


const addFood = function (req, res) {
    const body = req.body;
    let supplierId;
    if (!req.mmfSession.userInfo) {
        res.redirect('/public/#/signin');
        return;
    } else {
        supplierId = (JSON.parse(req.mmfSession.userInfo)).id;
    }

    const foodId = utils.getUniqueKey('501');

    const item = {
        id: foodId,
        name: body.name,
        quantity: body.quantity,
        price: body.price,
        description: body.description,
        supplierId: supplierId,
        img: body.img
    };

    const savePromise = utils.saveItem.call(this, "MyMotherFood.FoodItem", item);

    savePromise.then((results, fields) => {
        res.json({
            code: '00',
            message: 'success',
            results: results,
            fields: fields,
            foodId: foodId
        });
    }).catch((err) => {
        res.json({
            code: '01',
            message: 'fail',
            error: err.stack
        });
    });
};

const editFood = function (req, res) {
    const body = req.body;

    let cols = [
        'name',
        'quantity',
        'price',
        'description',
        'img'
    ];

    let vals = [
        body.name,
        body.quantity,
        body.price,
        body.description,
        body.img
    ];

    const updatePromise = utils.updateItem.call(this, "MyMotherFood.FoodItem", cols, vals, 'id', body.id);

    updatePromise.then((results, fields) => {
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

const deleteFood = function (req, res) {
    const body = req.body;

    const deletePromise = utils.deleteItem.call(this, "MyMotherFood.FoodItem", 'id', body.id);

    deletePromise.then((results, fields) => {
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


module.exports = { addFood, editFood, deleteFood };