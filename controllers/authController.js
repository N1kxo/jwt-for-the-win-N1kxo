const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    // Simplemente para este ejemplo, estoy asumiendo que las credenciales son válidas
    const { email, password } = req.body;

    // Verificación de credenciales (aquí deberías implementar tu lógica real)
    if (email === 'admin@admin.com' && password === 'admin') {
        // Generar un token JWT
        const token = jwt.sign({ email }, 'jwt_secret_key', { expiresIn: '1h' }); // Aquí deberías cambiar 'jwt_secret_key' por tu propia clave secreta

        // Configurar la cookie de sesión con el token JWT
        res.cookie('session', token, { httpOnly: true, maxAge: 3600000 }); // La cookie expira en 1 hora (3600000 ms)

        // Devolver una respuesta exitosa
        res.status(200).json({ message: "Inicio de sesión exitoso" });
    } else {
        // Si las credenciales no son válidas, devolver un mensaje de error
        res.status(401).json({ error: "Credenciales inválidas" });
    }
};
