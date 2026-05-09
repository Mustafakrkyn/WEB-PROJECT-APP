import React from 'react';
import RoutineBuilder from '../components/RoutineBuilder';
import ExerciseList from '../components/ExerciseList';
import Dashboard from './Dashboard';

const WorkoutPanel = ({ exercises, setExercises }) => {
  return (
    <div className="container mx-auto p-10">
      <h2 className="text-3xl font-black text-slate-800 mb-10 uppercase text-center">Antrenman ve Performans Yönetimi</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <RoutineBuilder exercises={exercises} setExercises={setExercises} />
          <ExerciseList exercises={exercises} />
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
          <Dashboard data={exercises} />
        </div>
      </div>
    </div>
  );
};

export default WorkoutPanel;