// Simulación de una lista aleatoria de contactos
const getRandomContacts = () => {
    return ['Contacto1', 'Contacto2', 'Contacto3'];
};

// Controlador para obtener contactos protegidos
exports.getContacts = (req, res) => {
    // Aquí puedes recuperar una lista aleatoria de contactos desde la base de datos o cualquier otro origen
    const contacts = getRandomContacts();
    res.json({ contacts });
};
