// db/database.js
const sqlite3 = require('sqlite3').verbose();

// Conectar a la base de datos (o crearla si no existe)
const db = new sqlite3.Database('./db/Electiva.db');

// Crear la tabla Users si no existe
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Users (
            UserID INTEGER PRIMARY KEY AUTOINCREMENT,
            Username TEXT NOT NULL UNIQUE,
            Password TEXT NOT NULL
        )
    `);
});

module.exports = db;