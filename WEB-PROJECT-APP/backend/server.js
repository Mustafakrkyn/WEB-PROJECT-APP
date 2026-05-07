const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Bağlantısı
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Veritabanına bağlanırken hata oluştu:', err);
    return;
  }
  console.log('Mustafa, MySQL Veritabanı Bağlantısı Başarılı! 🚀');
});

// Kayıt ve Giriş Rotalarını Bağlayalım
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Test Rotası
app.get('/', (req, res) => {
  res.send('Backend Sunucusu Aktif ve Mustafa Komut Bekliyor!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});

// Veritabanı bağlantısını diğer dosyalarla paylaşalım
module.exports = app;
module.exports.db = db;