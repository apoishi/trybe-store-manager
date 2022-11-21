const express = require('express');
const productsController = require('../controllers/productsController');
const validateProductsNameField = require('../middlewares/validateProductsNameField');

const router = express.Router();
router.use(express.json());

router.get('/', productsController.listProducts);
router.get('/:id', productsController.getProduct);
router.post('/', validateProductsNameField, productsController.createProduct);
router.put('/:id', validateProductsNameField, productsController.updateProduct);
router.delete('/:id', productsController.removeProduct);

module.exports = router;
