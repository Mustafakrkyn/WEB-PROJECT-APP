const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Ayarlar
app.use(cors());
app.use(express.json());

// Ana Sayfa Test Rotası
app.get('/', (req, res) => {
  res.send('Fitness App Backend Sunucusu Çalışıyor!');
});

// Sunucuyu Başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`-----------------------------------------------`);
  console.log(`Sunucu ${PORT} portunda başlatıldı.`);
  console.log(`Mustafa Aktif`);
  console.log(`-----------------------------------------------`);
});