// Controlador para el formulario protegido
exports.submitForm = (req, res) => {
    // Verificar si el texto está presente en el cuerpo de la solicitud
    if (!req.body.text) {
        return res.status(400).json({ error: "Se requiere la propiedad 'text' en el cuerpo de la solicitud" });
    }

    // Obtener el texto del cuerpo de la solicitud
    const { text } = req.body;

    // Devolver el mismo texto como respuesta
    res.send(text);
};
