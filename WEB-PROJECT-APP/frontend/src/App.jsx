import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Footer'ı içeri aldık
import Home from './pages/Home';
import NutritionTools from './pages/NutritionTools';
import WeightTracker from './pages/WeightTracker';
import WorkoutPanel from './pages/WorkoutPanel';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [exercises, setExercises] = useState([]);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nutrition" element={<NutritionTools />} />
            <Route path="/weight" element={<WeightTracker />} />
            <Route path="/workout" element={<WorkoutPanel exercises={exercises} setExercises={setExercises} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer /> {/* Footer burada olduğu için her sayfada görünür */}
      </div>
    </Router>
  );
}

export default App;