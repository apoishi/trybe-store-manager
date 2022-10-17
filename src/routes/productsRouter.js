const express = require('express');
const productsControllers = require('../controllers/productsControllers');

const router = express.Router();

router.get('/', productsControllers.listProducts);
router.get('/:id', productsControllers.getProduct);

module.exports = router;