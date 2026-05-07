import React from 'react';
import Navbar from './components/Navbar';
import RoutineBuilder from './components/RoutineBuilder';
import ExerciseList from './components/ExerciseList';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-black text-center text-blue-700 mb-10 tracking-tight">
          Pump It Up Fitness App
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <RoutineBuilder />
            <ExerciseList exercises={[]} />
          </div>

          {/* RIGHT SIDE */}
          <div className="h-full">
            <Dashboard data={[]} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;