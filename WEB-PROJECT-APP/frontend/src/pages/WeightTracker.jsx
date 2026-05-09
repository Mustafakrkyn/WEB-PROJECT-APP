import React, { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const WeightTracker = () => {
  const [weight, setWeight] = useState('');
  
  const [history, setHistory] = useState([
    { val: 75.0, timestamp: 1714512000000 },
    { val: 75.5, timestamp: 1714684800000 },
    { val: 74.8, timestamp: 1714857600000 },
    { val: 76.2, timestamp: 1715116800000 },
  ]);

  const stats = useMemo(() => {
    if (history.length < 2) return { diff: 0, percent: 0, days: 0 };
    const first = history[0];
    const last = history[history.length - 1];
    const dayDiff = Math.ceil(Math.abs(last.timestamp - first.timestamp) / (1000 * 60 * 60 * 24));
    const diff = (last.val - first.val).toFixed(1);
    const percent = ((diff / first.val) * 100).toFixed(1);
    return { diff, percent, days: dayDiff };
  }, [history]);

  const handleAddWeight = (e) => {
    e.preventDefault();
    const numericValue = parseFloat(weight);
    if (!numericValue || isNaN(numericValue)) return;

    const newEntry = {
      val: numericValue,
      timestamp: Date.now() 
    };

    setHistory(prev => [...prev, newEntry]);
    setWeight('');
  };

  return (
    <div className="min-h-screen bg-white font-sans pb-20 relative overflow-hidden">
      
      {/* ARKA PLAN DESENLERİ */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] z-0">
        <div className="absolute top-20 left-10 w-64 h-64 border-[30px] border-orange-500 rounded-full"></div>
        <div className="absolute bottom-40 right-[-100px] w-96 h-96 border-[50px] border-slate-900 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* SOL PANEL: FORM VE İSTATİSTİKLER */}
          <div className="w-full lg:w-[400px] shrink-0 sticky top-28 space-y-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-50">
              <div className="mb-8">
                <span className="text-orange-500 font-black tracking-widest text-[10px] uppercase">Smart Analysis</span>
                <h2 className="text-3xl font-black text-slate-900 mt-1">Ağırlık Takibi</h2>
              </div>

              <form onSubmit={handleAddWeight} className="space-y-6">
                <div className="relative">
                  <input 
                    type="number" 
                    step="0.1"
                    className="w-full bg-slate-50 border-none p-6 rounded-2xl text-4xl font-black text-slate-900 outline-none focus:ring-2 focus:ring-orange-500/50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-all"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="00.0"
                  />
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-slate-300 italic text-xl uppercase">kg</span>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white p-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-800 active:scale-95 transition-all shadow-lg">
                  VERİYİ İŞLE
                </button>
              </form>
            </div>

            {/* İSTATİSTİK KARTLARI */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50/50 p-6 rounded-3xl border border-orange-100 text-center">
                <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1">Gelişim</p>
                <p className="text-3xl font-black text-slate-900 italic">%{stats.percent}</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Süreç</p>
                <p className="text-3xl font-black text-slate-900 italic">{stats.days} <small className="text-xs not-italic text-slate-500">GÜN</small></p>
              </div>
            </div>
          </div>

          {/* SAĞ PANEL: BAŞLIK VE GRAFİK */}
          <div className="flex-1 space-y-12">
            
            <header className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[1.1] uppercase">
                BİLİMSEL <span className="text-orange-500">TAKİP,</span> <br />
                GÜÇLÜ SONUÇ.
              </h1>
              <p className="text-lg font-medium text-slate-500 leading-relaxed max-w-2xl">
                ActiveRoot algoritması, günlük ağırlık verilerinizi işleyerek sadece bir sayı değil, hedefinize giden yolda size net bir trend grafiği sunar.
              </p>
            </header>

            <div className="bg-white p-6 md:p-8 rounded-[3rem] shadow-xl border border-gray-50">
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={history} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                    <XAxis 
                      dataKey="timestamp" 
                      tickFormatter={(unix) => new Date(unix).toLocaleDateString('tr-TR', {day:'2-digit', month:'2-digit'})}
                      tick={{fontSize: 10, fontWeight: 'bold', fill: '#94a3b8'}} 
                      axisLine={false} 
                      tickLine={false} 
                      dy={10} 
                    />
                    <YAxis hide domain={['dataMin - 1', 'dataMax + 1']} />
                    <Tooltip 
                      labelFormatter={(label) => new Date(label).toLocaleString('tr-TR', {day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit'})}
                      contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', padding: '15px'}} 
                      itemStyle={{fontWeight: '900', color: '#1e293b'}}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="val" 
                      stroke="#3b82f6" 
                      strokeWidth={5} 
                      fill="url(#colorBlue)" 
                      animationDuration={800}
                      dot={{ r: 5, fill: '#3b82f6', strokeWidth: 3, stroke: '#fff' }}
                      activeDot={{ r: 8, strokeWidth: 0, fill: '#1e293b' }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {history.slice().reverse().map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center">
                  <span className="text-[10px] font-black text-slate-400 uppercase">
                    {new Date(item.timestamp).toLocaleString('tr-TR', {day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit'})}
                  </span>
                  <span className="text-xl font-black text-slate-900 italic mt-1">{item.val} KG</span>
                </div>
              ))}
            </div>

            {/* --- YENİ EKLENEN: KOD İLE ÇİZİLMİŞ GÖRSEL KART --- */}
            <div className="mt-8 flex flex-col md:flex-row items-center bg-slate-50 rounded-[3rem] p-4 gap-8 group border border-slate-100">
              
              {/* SOL: KOD İLE TASARLANMIŞ ASLA KIRILMAYAN DASHBOARD GRAFİĞİ */}
              <div className="w-full md:w-5/12 h-[300px] rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-800 p-8 relative overflow-hidden flex flex-col justify-between shadow-xl">
                {/* Neon Işık Efektleri */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/5">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                  <h4 className="text-white font-black text-xl italic uppercase tracking-widest">Veri <span className="text-blue-500">Akışı</span></h4>
                </div>

                {/* CSS ile yapılmış Barlar */}
                <div className="relative z-10 flex items-end gap-3 h-28 w-full">
                  {[40, 55, 45, 70, 60, 85, 75].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400/20 rounded-t-lg hover:from-orange-500 hover:to-orange-400/20 transition-all duration-300 cursor-default" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>

              {/* SAĞ: BİLGİ YAZILARI */}
              <div className="w-full md:w-7/12 p-4 md:pr-8 space-y-5">
                <h3 className="text-3xl font-black text-slate-900 uppercase italic">Trendi Yakala</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Günlük kilo dalgalanmaları su tutumu, stres veya sindirim sistemiyle ilgilidir. Ağırlık takibinin asıl amacı, haftalık grafik trendini görerek rotada kalıp kalmadığını anlamaktır.
                </p>
                <ul className="space-y-4 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-1.5 shrink-0 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></span>
                    <p className="text-xs font-bold text-slate-600">Her gün sabah aç karnına ve tuvalet sonrası ölçüm yapın.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-1.5 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                    <p className="text-xs font-bold text-slate-600">Günlük verilere değil, grafiğin genel eğilimine (trendine) odaklanın.</p>
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

export default WeightTracker;