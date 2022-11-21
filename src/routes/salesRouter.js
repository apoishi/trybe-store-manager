const express = require('express');
const salesController = require('../controllers/salesController');

const router = express.Router();
router.use(express.json());

router.get('/', salesController.listSales);
router.get('/:id', salesController.getSale);

module.exports = router;
