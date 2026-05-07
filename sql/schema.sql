-- Mustafa Fitness App Veritabanı Şeması

-- 1. Kullanıcılar Tablosu
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    age INT,
    weight FLOAT,
    height INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Egzersiz Kütüphanesi Tablosu
CREATE TABLE IF NOT EXISTS exercises (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    target_muscle VARCHAR(50),
    description TEXT,
    image_url VARCHAR(255)
);

-- 3. Örnek Egzersizler (Başlangıç için)
INSERT INTO exercises (name, target_muscle, description) VALUES 
('Bench Press', 'Göğüs', 'Yatarak ağırlık kaldırma hareketi.'),
('Squat', 'Bacak', 'Çömelme ve kalkma hareketi.'),
('Deadlift', 'Sırt', 'Yerden ağırlık kesme hareketi.');