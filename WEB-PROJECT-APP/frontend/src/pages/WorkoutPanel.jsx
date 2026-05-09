import React from 'react';
import RoutineBuilder from '../components/RoutineBuilder';
import ExerciseList from '../components/ExerciseList';
import Dashboard from './Dashboard';

const WorkoutPanel = ({ exercises, setExercises }) => {
  return (
    <div className="min-h-screen bg-white font-sans pb-20 relative overflow-hidden">
      
      {/* Kcal tarzı yumuşak arka plan desenleri */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] z-0">
        <div className="absolute top-20 left-10 w-64 h-64 border-[30px] border-orange-500 rounded-full"></div>
        <div className="absolute bottom-40 right-[-100px] w-96 h-96 border-[50px] border-blue-600 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        
        {/* HERO HEADER */}
        <header className="mb-16">
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] uppercase">
            DEMİRİ <span className="text-orange-500 italic">BÜK.</span> <br />
            MİRASINI YARAT.
          </h1>
          <p className="text-xl font-medium text-slate-500 max-w-3xl leading-relaxed mt-6">
            Antrenman bir rutin değil, biyolojik bir mimaridir. Bölgesel hipertrofi prensipleriyle kas liflerini maksimum kapasitede uyarın.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* ========================================= */}
          {/* SOL PANEL: ARAÇLAR (Form, Grafik, Liste) */}
          {/* ========================================= */}
          <div className="w-full lg:w-6/12 space-y-10">
            
            {/* Form ve Grafik Tek Bir Şık Kutuda */}
            <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-50 space-y-10">
              <RoutineBuilder exercises={exercises} setExercises={setExercises} />
              
              {/* Egzersiz girildiğinde Grafik otomatik açılır */}
              {exercises && exercises.length > 0 && (
                <div className="pt-10 border-t border-dashed border-gray-200">
                  <Dashboard data={exercises} />
                </div>
              )}
            </div>

            {/* Alt Taraftaki Geçmiş/Liste Görünümü */}
            <div>
              <div className="mb-4">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Antrenman Dökümü</h3>
              </div>
              <ExerciseList exercises={exercises} setExercises={setExercises} />
            </div>

          </div>

          {/* ========================================= */}
          {/* SAĞ PANEL: ARNOLD VE BİLİM (Sabit Durur) */}
          {/* ========================================= */}
          <div className="w-full lg:w-6/12 space-y-10 sticky top-28">
            
            {/* ARNOLD QUOTE */}
            <div className="p-10 md:p-12 border-l-8 border-orange-500 bg-orange-50/50 rounded-r-[3rem] relative overflow-hidden group">
              <span className="absolute top-[-30px] left-2 text-[12rem] font-black text-orange-500/10 font-serif leading-none group-hover:scale-110 transition-transform duration-700">"</span>
              <p className="text-3xl font-bold text-slate-800 italic leading-snug relative z-10">
                "Son üç veya dört tekrar, kası büyüten asıl şeydir. Bu acı bölgesi, bir şampiyonu şampiyon olmayandan ayıran yegane çizgidir."
              </p>
              <div className="mt-6 relative z-10 flex items-center gap-4">
                <div className="w-10 h-1 bg-orange-500 rounded-full"></div>
                <p className="text-xs font-black text-slate-900 uppercase tracking-widest">Arnold Schwarzenegger</p>
              </div>
            </div>

            {/* BİLİMSEL EDİTÖRYAL KART */}
            <div className="bg-slate-50 rounded-[3.5rem] p-4 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-6 group">
              <div className="w-full md:w-5/12 overflow-hidden rounded-[3rem] h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000" 
                  alt="Aesthetics" 
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="w-full md:w-7/12 p-4 md:pr-6 space-y-4">
                <h3 className="text-2xl font-black text-slate-900 uppercase italic">Hipertrofi Kanunu</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Tam vücut antrenmanları başlangıç aşaması içindir. Gerçek sınırlar, kas gruplarını <strong className="text-slate-900 bg-white shadow-sm px-2 py-1 rounded">Push, Pull ve Legs</strong> olarak ayırdığınızda aşılır.
                </p>
                <ul className="space-y-3 mt-2">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                    <p className="text-xs font-bold text-slate-600">Lokalize kas yıkımı ve maksimum şiddet.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 shrink-0"></span>
                    <p className="text-xs font-bold text-slate-600">MSS (Merkezi Sinir Sistemi) koruması.</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkoutPanel;