// Middleware para verificar la cookie de sesión
exports.verifySession = (req, res, next) => {
    if (req.cookies.session) { // Cambio de sessionId a session
        // Si la cookie de sesión está presente, verificar el token JWT
        jwt.verify(req.cookies.session, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                // Si hay un error al verificar el token, eliminar la cookie de sesión
                res.clearCookie('session');
                console.error('Token JWT inválido:', err);
                res.status(401).json({ error: 'Unauthorized' });
            } else {
                // Si el token es válido, adjuntar el usuario decodificado a la solicitud para su posterior uso
                req.user = decoded;
                next();
            }
        });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};
