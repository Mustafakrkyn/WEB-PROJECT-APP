import React from 'react';

const ExerciseList = ({ exercises }) => {
  return (
    <div className="p-4 bg-indigo-50 rounded-lg border-2 border-indigo-200">

      <h2 className="text-xl font-bold text-indigo-700">
        Miraç'ın Egzersiz Alanı
      </h2>

      {exercises.length === 0 ? (
        <p className="mt-2 text-gray-600">Henüz egzersiz eklenmedi</p>
      ) : (
        exercises.map((ex, index) => (
          <div key={index} className="border p-2 mt-2 rounded bg-white">

            <p><b>Exercise:</b> {ex.name || "-"}</p>
            <p><b>Sets:</b> {ex.sets || "-"}</p>
            <p><b>Reps:</b> {ex.reps || "-"}</p>
            <p><b>Weight:</b> {ex.weight || "-"}</p>

          </div>
        ))
      )}

    </div>
  );
};

export default ExerciseList;