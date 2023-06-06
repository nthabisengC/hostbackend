const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

// ==>  CRUD - 'Product':

// ==>  'Product': (POST): localhost:3000/api/products
router.post('/products', productController.createProduct);

// ==>  'Product': (Get _All_Product): localhost:3000/api/products
router.get('/products', productController.listAllProducts);

// ==>  'Product': (Get _Product _by _ID): localhost:3000/api/products/id
router.get('/products/:id', productController.findProductById);

// ==>  'Product': (Put(update) _Product _by _ID): localhost:3000/api/products/id
router.put('/products/:id', productController.updateProductById);

// ==>  'Product': (Delete _Product _by _ID): localhost:3000/api/products/id
router.delete('/products/:id', productController.deleteProductById);


module.exports = router;