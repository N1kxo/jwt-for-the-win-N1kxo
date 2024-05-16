// Simulación de una base de datos de usuarios
const users = [
    {
        email: 'admin@admin.com',
        password: 'admin',
        name: 'Admin',
        lastName: 'User',
        birthdate: '1990-01-01'
    }
];

// Controlador para obtener el perfil del usuario
exports.getProfile = (req, res) => {
    // Aquí puedes obtener la información del usuario desde la sesión o la base de datos
    const user = users[0]; // Por ahora, simplemente tomamos el primer usuario de la lista

    if (req.cookies.sessionId) {
        res.json({
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            birthdate: user.birthdate
        });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};
