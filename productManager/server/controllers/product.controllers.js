const Product = require('../models/product.models');

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err));
};

module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => {
            console.log(products)
            response.json(products)
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        });
};

module.exports.getProduct = (request, response) => {
    Product.findOne({_id: request.params.id})
    .then(product => response.json(product))
    .catch(err => response.json(err));
};