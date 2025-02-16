// controllers/authController.js
const db = require('../db/database');

const authController = {
    // Procesar el login
    processLogin: (req, res) => {
        const { username, password } = req.body;

        // Consultar la base de datos
        db.get(
            'SELECT * FROM Users WHERE Username = ? AND Password = ?',
            [username, password],
            (err, row) => {
                if (err) {
                    return res.status(500).json({ message: 'Error en la base de datos' });
                }

                if (row) {
                    res.json({ message: 'Inicio de sesión exitoso' });
                } else {
                    res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
                }
            }
        );
    },

    // Procesar el registro
    processRegister: (req, res) => {
        const { username, password } = req.body;

        // Verificar si el usuario ya existe
        db.get(
            'SELECT * FROM Users WHERE Username = ?',
            [username],
            (err, row) => {
                if (err) {
                    return res.status(500).json({ message: 'Error en la base de datos' });
                }

                if (row) {
                    res.status(400).json({ message: 'El usuario ya existe' });
                } else {
                    // Insertar nuevo usuario
                    db.run(
                        'INSERT INTO Users (Username, Password) VALUES (?, ?)',
                        [username, password],
                        (err) => {
                            if (err) {
                                return res.status(500).json({ message: 'Error en la base de datos' });
                            }
                            res.json({ message: 'Usuario registrado exitosamente' });
                        }
                    );
                }
            }
        );
    },
};

module.exports = authController;