import React, { useState } from 'react';

const RoutineBuilder = ({ exercises, setExercises }) => {
  const [form, setForm] = useState({ name: '', sets: '', reps: '', weight: '', group: 'Push' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.weight) return; 
    
    const currentList = Array.isArray(exercises) ? exercises : [];
    setExercises([...currentList, { ...form, id: Date.now() }]);
    
    setForm({ name: '', sets: '', reps: '', weight: '', group: 'Push' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-6">
        <span className="text-orange-500 font-black tracking-widest text-[10px] uppercase">Smart Builder</span>
        <h2 className="text-2xl font-black text-slate-900 mt-1">Antrenman Planı</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <input 
            type="text" 
            placeholder="Egzersiz Adı (Örn: Bench Press)" 
            className="w-full p-5 bg-slate-50 rounded-2xl outline-none font-black text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-orange-500/50 transition-all" 
            value={form.name} 
            onChange={e => setForm({...form, name: e.target.value})} 
          />
        </div>

        {/* SELECT YANINDAKİ OK KALDIRILDI (appearance-none) */}
        <div className="col-span-2">
          <select 
            className="w-full p-5 bg-slate-50 rounded-2xl outline-none font-black text-sm text-slate-900 cursor-pointer focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none" 
            value={form.group} 
            onChange={e => setForm({...form, group: e.target.value})}
          >
            <option value="Push">İTİŞ (PUSH)</option>
            <option value="Pull">ÇEKİŞ (PULL)</option>
            <option value="Legs">BACAK (LEGS)</option>
          </select>
        </div>
        
        {/* NUMBER İNPUTLARINDAKİ İÇ OKLAR KALDIRILDI */}
        <div className="relative">
           <input 
             type="number" 
             placeholder="Set" 
             className="w-full p-5 bg-slate-50 rounded-2xl outline-none font-black text-sm text-slate-900 focus:ring-2 focus:ring-slate-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
             value={form.sets} 
             onChange={e => setForm({...form, sets: e.target.value})} 
            />
           <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400 uppercase pointer-events-none">Set</span>
        </div>

        <div className="relative">
           <input 
             type="number" 
             placeholder="Tekrar" 
             className="w-full p-5 bg-slate-50 rounded-2xl outline-none font-black text-sm text-slate-900 focus:ring-2 focus:ring-slate-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
             value={form.reps} 
             onChange={e => setForm({...form, reps: e.target.value})} 
            />
           <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400 uppercase pointer-events-none">Rep</span>
        </div>

        <div className="relative col-span-2">
           <input 
             type="number" 
             placeholder="Kullanılan Ağırlık" 
             className="w-full p-5 bg-slate-50 rounded-2xl outline-none font-black text-sm text-slate-900 focus:ring-2 focus:ring-orange-500/50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
             value={form.weight} 
             onChange={e => setForm({...form, weight: e.target.value})} 
            />
           <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400 uppercase pointer-events-none">KG</span>
        </div>
      </div>
      
      {/* BUTON ÖNCEKİ SAYFALARLA AYNI (WeightTracker'daki gibi yapıldı) */}
      <button type="submit" className="w-full mt-4 bg-slate-900 text-white p-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-800 active:scale-95 transition-all shadow-lg">
        SİSTEME YÜKLE
      </button>
    </form>
  );
};

export default RoutineBuilder;