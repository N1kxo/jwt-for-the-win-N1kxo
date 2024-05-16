const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const formRoutes = require('./routes/formRoutes');
const contactsRoutes = require('./routes/contactsRoutes');
require('dotenv').config();

// Middleware para procesar JSON en las solicitudes
app.use(express.json());

// Middleware para verificar el token JWT en la cookie de sesión
app.use((req, res, next) => {
    // Verificar si hay una cookie de sesión presente
    if (req.cookies && req.cookies.session) {
        const token = req.cookies.session;

        // Verificar si el token es válido
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                // Si hay un error al verificar el token, eliminar la cookie de sesión
                res.clearCookie('session');
                console.error('Token JWT inválido:', err);
            } else {
                // Si el token es válido, adjuntar el usuario decodificado a la solicitud para su posterior uso
                req.user = decoded;
                req.cookies = { session: token };
                next();
            }
        });
    }
    next();
});

// Rutas
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Viva Anita!' });
  });

app.use('/login', authRoutes);
app.use('/profile', profileRoutes);
app.use('/form', formRoutes);
app.use('/contacts', contactsRoutes);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
