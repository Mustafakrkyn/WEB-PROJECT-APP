import React, { useState } from 'react';
import Navbar from './components/Navbar';
import RoutineBuilder from './components/RoutineBuilder';
import ExerciseList from './components/ExerciseList';
import Dashboard from './pages/Dashboard';

function App() {
  const [exercises, setExercises] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-black text-center text-blue-700 mb-10">
          Pump It Up Fitness Portalı
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Mert'in Alanı */}
            <RoutineBuilder exercises={exercises} setExercises={setExercises} />
            {/* Miraç'ın Alanı */}
            <ExerciseList exercises={exercises} />
          </div>

          <div className="h-full">
            {/* Şahin'in Alanı (Grafik) */}
            <Dashboard data={exercises} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;