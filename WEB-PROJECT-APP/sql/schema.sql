-- Mustafa Fitness App - Final Veritabanı Şeması

-- 1. Veritabanını oluştur
CREATE DATABASE IF NOT EXISTS fitness_app;
USE fitness_app;

-- 2. Kullanıcılar Tablosu
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    age INT,
    weight FLOAT,
    height INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Egzersizler Tablosu (Miraç için)
CREATE TABLE IF NOT EXISTS exercises (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    muscle_group VARCHAR(50), -- Göğüs, Sırt, Bacak vb.
    description TEXT
);

-- 4. Antrenman Kayıtları Tablosu (Mert ve Şahin için)
CREATE TABLE IF NOT EXISTS workout_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    exercise_id INT,
    weight DECIMAL(5,2),
    reps INT,
    workout_date DATE DEFAULT (CURRENT_DATE),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (exercise_id) REFERENCES exercises(id)
);

-- 5. Başlangıç Verileri (Dükkan boş görünmesin)
INSERT INTO exercises (name, muscle_group) VALUES 
('Bench Press', 'Göğüs'),
('Squat', 'Bacak'),
('Deadlift', 'Sırt');