// routes/authRoutes.js
const express = require('express');
const path = require('path');
const authController = require('../controllers/authController');

const router = express.Router();

// 🚀 Servir la página de login cuando el usuario entra a "/"
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});

// 🚀 Servir la página de registro
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/register.html'));
});

// 🚀 Servir la página del dashboard
router.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dashboard.html'));
});

// 🚀 Procesar el login
router.post('/login', authController.processLogin);

// 🚀 Procesar el registro
router.post('/register', authController.processRegister);

module.exports = router;