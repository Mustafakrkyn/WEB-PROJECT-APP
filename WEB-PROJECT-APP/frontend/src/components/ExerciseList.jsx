import React from 'react';

const ExerciseList = ({ exercises, setExercises }) => {
  const handleDelete = (id) => {
    setExercises(exercises.filter(ex => ex.id !== id));
  };

  if (!exercises || exercises.length === 0) {
    return (
      <div className="p-10 border-2 border-dashed border-gray-200 rounded-[2rem] text-center bg-slate-50/50">
        <p className="text-sm font-bold text-slate-400 italic">Henüz bir egzersiz girmedin. Planlayıcıdan veri ekle.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* En son eklenen en üstte görünsün diye slice().reverse() kullanıyoruz */}
      {exercises.slice().reverse().map((ex) => (
        <div key={ex.id} className="flex justify-between items-center p-5 bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
          <div>
            <span className={`text-[9px] font-black uppercase px-2 py-1 rounded-md mb-2 inline-block tracking-widest
              ${ex.group === 'Push' ? 'bg-orange-100 text-orange-600' : 
                ex.group === 'Pull' ? 'bg-blue-100 text-blue-600' : 
                'bg-slate-800 text-white'}`}>
              {ex.group}
            </span>
            <h4 className="text-sm font-black text-slate-900 uppercase">{ex.name}</h4>
            <p className="text-xs font-bold text-slate-500 mt-1">
              {ex.sets}x{ex.reps} <span className="mx-1 text-slate-300">|</span> <span className="text-orange-500">{ex.weight} KG</span>
            </p>
          </div>
          <button 
            onClick={() => handleDelete(ex.id)} 
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100"
            title="Kaldır"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExerciseList;