import React from 'react';

const RoutineBuilder = ({ exercises, setExercises }) => {

  // ➕ ekle
  const addExercise = () => {
    setExercises([
      ...exercises,
      { name: "", sets: "", reps: "", weight: "" }
    ]);
  };

  // ✏️ değiştir
  const handleChange = (index, field, value) => {
    const updated = [...exercises];
    updated[index][field] = value;
    setExercises(updated);
  };

  // 🗑️ sil
  const deleteExercise = (index) => {
    const updated = exercises.filter((_, i) => i !== index);
    setExercises(updated);
  };

  // 📊 total volume
  const totalVolume = exercises.reduce((sum, ex) => {
    return sum + (Number(ex.sets) * Number(ex.reps) * Number(ex.weight));
  }, 0);

  return (
    <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">

      <h2 className="text-xl font-bold text-blue-700">
        Mert'in Antrenman Alanı
      </h2>

      <p>Total Volume: {totalVolume}</p>

      {exercises.map((ex, index) => (
        <div key={index} className="flex gap-2 my-2">

          <input
            placeholder="Name"
            value={ex.name}
            onChange={(e) =>
              handleChange(index, "name", e.target.value)
            }
          />

          <input
            placeholder="Sets"
            value={ex.sets}
            onChange={(e) =>
              handleChange(index, "sets", e.target.value)
            }
          />

          <input
            placeholder="Reps"
            value={ex.reps}
            onChange={(e) =>
              handleChange(index, "reps", e.target.value)
            }
          />

          <input
            placeholder="Weight"
            value={ex.weight}
            onChange={(e) =>
              handleChange(index, "weight", e.target.value)
            }
          />

          <button onClick={() => deleteExercise(index)}>
            X
          </button>

        </div>
      ))}

      <button onClick={addExercise} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded">
        + Add Exercise
      </button>

    </div>
  );
};

export default RoutineBuilder;