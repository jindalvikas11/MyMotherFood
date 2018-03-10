var paypal = require('paypal-rest-sdk');

var request = require('request');

const clientId = 'AVvU_Dfd9-51G70ZIblKWL7MS0zFdtfOiTiuAFrNngQlEQatdtLcTZE5arDHnBebDjWGVrm_Nmj5x-GK';

const clientSecret = 'EPW5Iq3CSSTcdn37DiCQwkANY2rQMYCLv9Wc1qWzZufvK_VTiPVGqetvGTfRAD1vFqK5HMU8JTJp5U3g';

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': clientId,
    'client_secret': clientSecret
});


var create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://return.url",
        "cancel_url": "http://cancel.url"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "item",
                "sku": "item",
                "price": "1.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "1.00"
        },
        "description": "This is the payment description."
    }]
};


const payBill = function(token, res){
    

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            console.log("Create Payment Response");
            res.set({
                'Authorization': ('Bearer ' + token)
            });
            res.redirect(payment.links[0].href);
            console.log(payment);
        }
    });
}

const getToken = function(req, res){
    request.post({
        uri: "https://api.sandbox.paypal.com/v1/oauth2/token",
        headers: {
            "Accept": "application/json",
            "Accept-Language": "en_US",
            "content-type": "application/x-www-form-urlencoded"
        },
        auth: {
        'user': clientId,
        'pass': clientSecret,
        // 'sendImmediately': false
      },
      form: {
        "grant_type": "client_credentials"
      }
    }, (error, response, body) => {
        payBill(body.access_token, res);
        console.log(body);
    });
} 

module.exports = { payBill, getToken };

