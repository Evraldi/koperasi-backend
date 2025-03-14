const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate, authorizeAdmin } = require('../middlewares/auth');

router.post('/register', userController.register);

router.get('/profile', authenticate, userController.getProfile);
//router.get('/all', authenticate, authorizeAdmin, userController.getAllUsers);
router.get('/all', userController.getAllUsers);
router.delete('/:id', userController.deleteUser);
router.put('/:id', userController.updateUser);

module.exports = router;