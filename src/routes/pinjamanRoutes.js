const express = require('express');
const router = express.Router();
const pinjamanController = require('../controllers/pinjamanController');
const { authenticate } = require('../middlewares/auth');

router.get('/', authenticate, pinjamanController.getPinjamanByUser);
router.post('/', authenticate, pinjamanController.createPinjaman);

module.exports = router;