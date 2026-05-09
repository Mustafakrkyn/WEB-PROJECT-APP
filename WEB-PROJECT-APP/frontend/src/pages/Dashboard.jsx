import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';

const Dashboard = ({ data }) => {
  const stats = useMemo(() => {
    const grouped = {};
    let totalVolume = 0;
    
    (data || []).forEach(ex => {
      const vol = (Number(ex.sets) || 0) * (Number(ex.reps) || 0) * (Number(ex.weight) || 0);
      totalVolume += vol;
      const exName = ex.name || 'DİĞER';
      grouped[exName] = (grouped[exName] || 0) + vol;
    });

    const chartData = Object.keys(grouped).map(name => ({
      name: name.toUpperCase().substring(0, 10),
      hacim: grouped[name],
    })).sort((a, b) => b.hacim - a.hacim).slice(0, 5);

    return { chartData, totalVolume };
  }, [data]);

  const targetVolume = 10000; 
  const progressPercent = Math.min(100, Math.round((stats.totalVolume / targetVolume) * 100)) || 0;

  if (!data || data.length === 0) return null; // Veri yoksa grafiği gizle

  return (
    <div className="space-y-8">
       <div className="flex justify-between items-end border-b border-gray-100 pb-6">
         <div>
           <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">Gelişim</p>
           <h3 className="text-5xl font-black text-slate-900 italic leading-none">%{progressPercent}</h3>
         </div>
         <div className="text-right">
           <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1">Toplam Tonaj</p>
           <h3 className="text-3xl font-black text-slate-900 italic leading-none">{stats.totalVolume} <small className="text-sm not-italic text-slate-400">KG</small></h3>
         </div>
       </div>

       <div>
         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Egzersiz Hacim Analizi</p>
         <div className="h-[200px] w-full">
           <ResponsiveContainer width="100%" height="100%">
             <BarChart data={stats.chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
               <XAxis dataKey="name" stroke="#94a3b8" fontSize={9} fontWeight="bold" tickLine={false} axisLine={false} dy={10} />
               <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.05)'}} formatter={(value) => [`${value} KG`, 'Tonaj']} />
               <Bar dataKey="hacim" radius={[6, 6, 0, 0]} animationDuration={1000}>
                 {stats.chartData.map((entry, index) => (
                   <Cell key={`cell-${index}`} fill={index === 0 ? '#f97316' : '#3b82f6'} />
                 ))}
               </Bar>
             </BarChart>
           </ResponsiveContainer>
         </div>
       </div>
    </div>
  );
};

export default Dashboard;