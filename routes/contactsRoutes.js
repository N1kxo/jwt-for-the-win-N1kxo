const express = require('express');
const router = express.Router();
const { getRandomContacts } = require('../controllers/contactsController');
const authMiddleware = require('../middlewares/authMiddleware');

// Endpoint protegido para obtener una lista aleatoria de contactos
router.get('/', authMiddleware.verifySession, (req, res) => {
    const contacts = getRandomContacts();
    res.json({ contacts });
});

module.exports = router;