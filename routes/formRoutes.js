const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');
const authMiddleware = require('../middlewares/authMiddleware');

// Endpoint protegido para enviar un formulario
router.post('/form', authMiddleware.verifySession, formController.submitForm);

module.exports = router;
