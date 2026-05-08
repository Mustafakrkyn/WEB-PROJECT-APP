import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RoutineBuilder from './components/RoutineBuilder';
import ExerciseList from './components/ExerciseList';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

// Ana Panel Bileşeni (Eski App içeriği buraya taşındı)
const MainPanel = ({ exercises, setExercises }) => (
  <div className="container mx-auto p-6">
    <h1 className="text-4xl font-black text-center text-blue-700 mb-10">
      Pump It Up Fitness Portalı
    </h1>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <RoutineBuilder exercises={exercises} setExercises={setExercises} />
        <ExerciseList exercises={exercises} />
      </div>

      <div className="h-full">
        <Dashboard data={exercises} />
      </div>
    </div>
  </div>
);

function App() {
  const [exercises, setExercises] = useState([]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          {/* Ana Sayfa */}
          <Route path="/" element={<MainPanel exercises={exercises} setExercises={setExercises} />} />
          
          {/* Giriş Sayfası */}
          <Route path="/login" element={<Login />} />
          
          {/* Kayıt Sayfası */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;