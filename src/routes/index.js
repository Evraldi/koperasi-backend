const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const simpananRoutes = require('./simpananRoutes');
const pinjamanRoutes = require('./pinjamanRoutes');

router.use('/users', userRoutes);
router.use('/simpanan', simpananRoutes);
router.use('/pinjaman', pinjamanRoutes);

module.exports = router;