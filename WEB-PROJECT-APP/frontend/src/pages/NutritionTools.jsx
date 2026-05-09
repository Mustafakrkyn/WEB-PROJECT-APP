import React, { useState } from 'react';

const NutritionTools = () => {
  const [bio, setBio] = useState({ gender: 'male', weight: '', height: '', age: '', neck: '', waist: '', hip: '', goal: 'maintenance' });
  const [results, setResults] = useState(null);

  const calculateNutrition = (e) => {
    e.preventDefault();
    
    // 1. Yağ Oranı Hesapla (U.S. Navy Method)
    let bf = 0;
    const w = parseFloat(bio.waist);
    const n = parseFloat(bio.neck);
    const h = parseFloat(bio.height);
    const hp = parseFloat(bio.hip) || 0;
    const weight = parseFloat(bio.weight);

    if (bio.gender === 'male') {
      bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
    } else {
      bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.221 * Math.log10(h)) - 450;
    }

    // 2. Katch-McArdle ile Günlük Kalori (TDEE) Hesapla
    const lbm = weight * (1 - (bf / 100)); // Yağsız Vücut Kitlesi
    const bmr = 370 + (21.6 * lbm); // Bazal Metabolizma
    let tdee = bmr * 1.55; // Orta seviye aktivite çarpanı

    // 3. Hedefe Göre Kalori Ayarla
    let targetKcal = tdee;
    if (bio.goal === 'lose') targetKcal = tdee - 500;
    if (bio.goal === 'gain') targetKcal = tdee + 300;

    // 4. Makro Dağılımı (Bilimsel Sporcu Oranları)
    const proteinG = weight * 2; // kg başına 2g protein
    const fatG = weight * 0.8;   // kg başına 0.8g yağ
    const carbKcal = targetKcal - (proteinG * 4) - (fatG * 9);
    const carbG = carbKcal / 4;

    setResults({
      bf: bf.toFixed(1),
      calories: Math.round(targetKcal),
      protein: Math.round(proteinG),
      carbs: Math.round(carbG),
      fat: Math.round(fatG)
    });
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden font-sans">
      {/* ARKA PLAN GEOMETRİK DESENLER */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute top-20 left-10 w-64 h-64 border-[30px] border-orange-500 rounded-full"></div>
        <div className="absolute bottom-40 right-[-100px] w-96 h-96 border-[50px] border-blue-600 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* SOL: AKILLI FORM */}
          <div className="w-full lg:w-[450px] shrink-0 sticky top-28">
            <form onSubmit={calculateNutrition} className="bg-white p-10 rounded-[3rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] border border-gray-50 space-y-6">
              <div className="flex flex-col gap-2">
                <span className="text-orange-500 font-black tracking-widest text-[10px] uppercase">Smart Analysis</span>
                <h2 className="text-3xl font-black text-slate-900">Beslenme Planı</h2>
              </div>

              {/* HEDEF SEÇİMİ (3 ŞIK) */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'lose', label: 'YAĞ YAK', color: 'peer-checked:bg-red-500' },
                  { id: 'maintenance', label: 'KORU', color: 'peer-checked:bg-blue-500' },
                  { id: 'gain', label: 'KAS YAP', color: 'peer-checked:bg-green-500' }
                ].map((g) => (
                  <label key={g.id} className="cursor-pointer">
                    <input type="radio" name="goal" className="hidden peer" checked={bio.goal === g.id} onChange={() => setBio({...bio, goal: g.id})} />
                    <div className={`text-[10px] font-black p-3 text-center rounded-xl border border-gray-100 transition-all ${g.color} peer-checked:text-white`}>
                      {g.label}
                    </div>
                  </label>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <select className="col-span-2 p-4 bg-slate-50 rounded-2xl font-bold text-xs" onChange={(e) => setBio({...bio, gender: e.target.value})}>
                  <option value="male">ERKEK</option>
                  <option value="female">KADIN</option>
                </select>
                <input type="number" placeholder="Kilo (kg)" className="p-4 bg-slate-50 rounded-2xl outline-none text-sm font-bold" onChange={(e) => setBio({...bio, weight: e.target.value})} />
                <input type="number" placeholder="Boy (cm)" className="p-4 bg-slate-50 rounded-2xl outline-none text-sm font-bold" onChange={(e) => setBio({...bio, height: e.target.value})} />
                <input type="number" placeholder="Bel (cm)" className="p-4 bg-slate-50 rounded-2xl outline-none text-sm font-bold" onChange={(e) => setBio({...bio, waist: e.target.value})} />
                <input type="number" placeholder="Boyun (cm)" className="p-4 bg-slate-50 rounded-2xl outline-none text-sm font-bold" onChange={(e) => setBio({...bio, neck: e.target.value})} />
              </div>

              <button type="submit" className="w-full bg-slate-900 text-white p-5 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl">
                REÇETEMİ OLUŞTUR
              </button>

              {/* SONUÇLAR ALANI */}
              {results && (
                <div className="pt-6 space-y-4 animate-fadeIn">
                  <div className="bg-slate-900 p-6 rounded-3xl text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Günlük Hedef</p>
                    <p className="text-4xl font-black text-white italic">{results.calories} <small className="text-xs">KCAL</small></p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-orange-50 p-3 rounded-xl text-center">
                      <p className="text-[8px] font-bold text-orange-400">PROTEİN</p>
                      <p className="text-sm font-black">{results.protein}g</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-xl text-center">
                      <p className="text-[8px] font-bold text-blue-400">KARB</p>
                      <p className="text-sm font-black">{results.carbs}g</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-xl text-center">
                      <p className="text-[8px] font-bold text-yellow-400">YAĞ</p>
                      <p className="text-sm font-black">{results.fat}g</p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* SAĞ: İÇERİK (SABİT) */}
          <div className="flex-1 space-y-12">
            <header className="space-y-4">
              <h1 className="text-6xl font-black text-slate-900 tracking-tighter leading-tight uppercase">
                BİLİMSEL <span className="text-orange-500 italic">ANALİZ</span> <br /> 
                GÜÇLÜ <span className="underline decoration-blue-500/30">SONUÇ.</span>
              </h1>
              <p className="text-xl font-medium text-slate-400 max-w-2xl leading-relaxed">
                ActiveRoot algoritması, biyometrik verilerinizi sporcu beslenmesi standartlarında işleyerek size en uygun makro dağılımını sunar.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-50 rounded-[3rem] p-4 group overflow-hidden">
                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000" className="h-[300px] w-full object-cover rounded-[2.5rem] group-hover:scale-105 transition-all" alt="Healthy" />
                <div className="p-4">
                  <h3 className="text-2xl font-black text-slate-900 uppercase italic mb-2">Katch-McArdle Metodu</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">
                    Yağsız vücut kitlenizi (LBM) temel alan bu metod, metabolizmanızın gerçek hızını belirlemenin en kesin yoludur.
                  </p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NutritionTools;  