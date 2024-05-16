const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middlewares/authMiddleware');

// Endpoint protegido para obtener información del perfil
router.get('/', authMiddleware.verifySession, profileController.getProfile);

module.exports = router;
