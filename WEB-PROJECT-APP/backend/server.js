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

// --- ANTRENMAN KAYIT ROTALARI (Mert & Şahin için) ---

// 1. Antrenman Kaydetme (Mert'in butonu buraya vurur)
app.post('/api/workouts', (req, res) => {
  const { user_id, exercise_id, weight, reps } = req.body;
  
  // SQL tablandaki sütun isimlerine (user_id, exercise_id, weight, reps) tam uyumlu
  const sql = "INSERT INTO workout_logs (user_id, exercise_id, weight, reps) VALUES (?, ?, ?, ?)";
  
  db.query(sql, [user_id || 1, exercise_id || 1, weight || 0, reps || 0], (err, result) => {
    if (err) {
      console.error("SQL Hatası (Kayıt):", err);
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "Antrenman veritabanına işlendi!", id: result.insertId });
  });
});

// 2. Antrenmanları Getirme (Şahin'in grafiği ve Miraç'ın listesi burayı kullanır)
app.get('/api/workouts', (req, res) => {
  const sql = "SELECT * FROM workout_logs ORDER BY workout_date DESC";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("SQL Hatası (Veri Çekme):", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// --- AUTH & DİĞER ROTALAR ---

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