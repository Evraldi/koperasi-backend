const express = require('express');
const router = express.Router();
const simpananController = require('../controllers/simpananController');
const { authenticate } = require('../middlewares/auth');

router.get('/', simpananController.getSimpananByUser);
router.post('/', simpananController.createSimpanan);

module.exports = router;