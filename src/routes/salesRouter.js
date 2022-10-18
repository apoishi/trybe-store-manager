const express = require('express');
const salesControllers = require('../controllers/salesControllers');

const router = express.Router();
router.use(express.json());

router.get('/', salesControllers.listSales);
router.get('/:id', salesControllers.getSale);

module.exports = router;