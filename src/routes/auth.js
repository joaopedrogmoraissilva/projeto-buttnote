const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const secret = crypto.randomBytes(32).toString('hex');

// Rota de registro
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    // Validação dos dados (adicione mais validações conforme necessário)
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }

    try {
        // Verifica se o usuário já existe
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Usuário já existe' });
        }

        // Cria um novo usuário
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        // Gera um token JWT
        const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});

// Rota de login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Validação dos dados
    if (!email || !password) {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Senha inválida' });
        }

        // Gera um token JWT
        const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
});

module.exports = router;