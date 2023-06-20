const ProductController = require('../controllers/product.controllers');

module.exports = (app) => {
    app.get('/api/products', ProductController.getAllProducts);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/product/:id', ProductController.getProduct);
}