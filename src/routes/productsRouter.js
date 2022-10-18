const express = require('express');
const productsControllers = require('../controllers/productsControllers');
const validateProductsNameField = require('../middlewares/validateProductsNameField');

const router = express.Router();
router.use(express.json());

router.get('/', productsControllers.listProducts);
router.get('/:id', productsControllers.getProduct);
router.post('/', validateProductsNameField, productsControllers.createProduct);

module.exports = router;