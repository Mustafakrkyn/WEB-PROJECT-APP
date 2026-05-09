import React, { useState, useEffect } from 'react';

const MustafaTools = () => {
  // --- Kalori Sayacı State ---
  const [kcal, setKcal] = useState({ protein: 0, carbs: 0, fat: 0 });
  const [totalKcal, setTotalKcal] = useState(0);

  // --- Ağırlık Takibi State ---
  const [weight, setWeight] = useState('');
  const [weightHistory, setWeightHistory] = useState([]);

  // Kalori Hesapla
  useEffect(() => {
    const total = (kcal.protein * 4) + (kcal.carbs * 4) + (kcal.fat * 9);
    setTotalKcal(total);
  }, [kcal]);

  const handleWeightSubmit = (e) => {
    e.preventDefault();
    const newEntry = { date: new Date().toLocaleDateString(), value: weight };
    setWeightHistory([newEntry, ...weightHistory]);
    setWeight('');
  };

  return (
    <div className="container mx-auto p-6 space-y-10">
      
      {/* --- BÖLÜM 1: Kalori Saymanın Önemi (İçerik) --- */}
      <section className="bg-white p-8 rounded-xl shadow-lg border-l-8 border-orange-500">
        <h2 className="text-3xl font-black text-gray-800 mb-4">Neden Kalori Saymalısın?</h2>
        <p className="text-gray-600 leading-relaxed">
          Fitness hedeflerine ulaşmanın %70'i mutfakta geçer. Kalori saymak, vücuduna giren enerjiyi 
          yönetmeni sağlar. İster kilo verin, ister kas kütlesi kazanın; <b>makro besin dengesi</b> 
          (protein, karbonhidrat, yağ) gelişimin anahtarıdır. Mustafa'nın bu aracıyla kontrol sende!
        </p>
      </section>

      {/* --- BÖLÜM 2: Kalori Sayacı (Araç) --- */}
      <section className="bg-orange-50 p-8 rounded-xl border-2 border-orange-200">
        <h3 className="text-2xl font-bold text-orange-700 mb-4">Kcal Sayacı</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-bold">Protein (g)</label>
            <input type="number" className="w-full p-2 border rounded" onChange={(e) => setKcal({...kcal, protein: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-bold">Karbonhidrat (g)</label>
            <input type="number" className="w-full p-2 border rounded" onChange={(e) => setKcal({...kcal, carbs: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-bold">Yağ (g)</label>
            <input type="number" className="w-full p-2 border rounded" onChange={(e) => setKcal({...kcal, fat: e.target.value})} />
          </div>
        </div>
        <div className="mt-6 text-center">
          <div className="text-4xl font-black text-orange-600">{totalKcal} kcal</div>
          <p className="text-sm text-orange-800 italic">Günlük hedefine ulaşmak için doğru enerji!</p>
        </div>
      </section>

      {/* --- BÖLÜM 3: Ağırlık Takibi (Veri Yönetimi) --- */}
      <section className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Vücut Ağırlığı Takibi</h3>
        <form onSubmit={handleWeightSubmit} className="flex gap-4 mb-6">
          <input 
            type="number" 
            step="0.1" 
            className="flex-1 p-2 border rounded" 
            placeholder="Bugünkü kilonuz (kg)" 
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700">Kaydet</button>
        </form>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Tarih</th>
                <th className="p-2 border">Ağırlık (kg)</th>
              </tr>
            </thead>
            <tbody>
              {weightHistory.map((entry, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-2 border text-gray-500">{entry.date}</td>
                  <td className="p-2 border font-bold text-blue-600">{entry.value} kg</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};

export default MustafaTools;