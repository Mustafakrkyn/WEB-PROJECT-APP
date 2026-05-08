import React from 'react';

const RoutineBuilder = ({ exercises = [], setExercises }) => {

  // ➕ Yeni Egzersiz Ekle
  const addExercise = () => {
    setExercises([
      ...exercises,
      { name: "", sets: "", reps: "", weight: "" }
    ]);
  };

  // ✏️ Bilgileri Güncelle
  const handleChange = (index, field, value) => {
    const updated = [...exercises];
    updated[index][field] = value;
    setExercises(updated);
  };

  // 🗑️ Egzersizi Sil
  const deleteExercise = (index) => {
    const updated = exercises.filter((_, i) => i !== index);
    setExercises(updated);
  };

  // 💾 VERİTABANINA KAYDET (Mustafa'nın Backend'ine gönderir)
  const saveWorkoutToDB = async () => {
    if (exercises.length === 0) return alert("Önce egzersiz eklemelisin!");

    try {
      // Backend'deki /api/workouts kapısına vuruyoruz
      // Not: user_id ve exercise_id şimdilik örnek 1 gönderiliyor
      const response = await fetch('http://localhost:5000/api/workouts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: 1, 
          exercise_id: 1, 
          weight: exercises[0].weight, 
          reps: exercises[0].reps
        })
      });

      if (response.ok) {
        alert("Antrenman Mustafa'nın veritabanına başarıyla işlendi! 🚀");
      } else {
        alert("Kayıt sırasında bir hata oluştu.");
      }
    } catch (error) {
      console.error("Bağlantı hatası:", error);
      alert("Backend sunucusu çalışıyor mu? (5000 portu)");
    }
  };

  // 📊 Toplam Hacim Hesapla
  const totalVolume = (exercises || []).reduce((sum, ex) => {
    const volume = Number(ex.sets) * Number(ex.reps) * Number(ex.weight);
    return sum + (isNaN(volume) ? 0 : volume);
  }, 0);

  return (
    <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200 mt-4">
      <h2 className="text-xl font-bold text-blue-700 mb-2">
        Mert'in Antrenman Planlayıcısı
      </h2>

      <div className="mb-4 p-2 bg-blue-100 rounded font-bold text-blue-800">
        Toplam Kaldırılan Yük: {totalVolume} kg
      </div>

      {exercises.map((ex, index) => (
        <div key={index} className="flex flex-wrap gap-2 my-2 p-2 bg-white rounded shadow-sm border border-blue-100">
          <input
            className="border p-1 rounded flex-1 min-w-[120px]"
            placeholder="Egzersiz Adı"
            value={ex.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
          />
          <input className="border p-1 rounded w-20" placeholder="Set" type="number" value={ex.sets} onChange={(e) => handleChange(index, "sets", e.target.value)} />
          <input className="border p-1 rounded w-20" placeholder="Tekrar" type="number" value={ex.reps} onChange={(e) => handleChange(index, "reps", e.target.value)} />
          <input className="border p-1 rounded w-20" placeholder="Kilo" type="number" value={ex.weight} onChange={(e) => handleChange(index, "weight", e.target.value)} />
          <button onClick={() => deleteExercise(index)} className="px-3 py-1 bg-red-500 text-white rounded">X</button>
        </div>
      ))}

      <div className="flex gap-2">
        <button 
          onClick={addExercise} 
          className="mt-2 flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Egzersiz Ekle
        </button>

        <button 
          onClick={saveWorkoutToDB} 
          className="mt-2 flex-1 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-bold"
        >
          ✅ Antrenmanı Kaydet
        </button>
      </div>
    </div>
  );
};

export default RoutineBuilder;