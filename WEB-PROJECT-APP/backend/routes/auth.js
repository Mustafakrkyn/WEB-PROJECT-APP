const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../server').db; // server.js'deki db bağlantısını kullanacağız

// KAYIT OLMA (REGISTER)
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Şifreyi şifrele (Hashing)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.body;

        const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        // Şimdilik sadece taslağı oluşturuyoruz, server.js'yi güncelleyince tam aktif olacak
        res.status(201).json({ message: "Kullanıcı kayıt altyapısı hazır!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;