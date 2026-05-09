import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION: Büyük Motivasyon Görseli */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070" 
          alt="Fitness Motivation" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white space-y-6 px-4">
          <h1 className="text-6xl font-black tracking-tighter uppercase italic">Sınırlarını Zorla</h1>
          <p className="text-xl max-w-2xl mx-auto font-light">
            ActiveRoot ile gelişiminizi profesyonel bir yazılımla takip edin. 
            Veriye dayalı gelişim, gerçek sonuçlar getirir.
          </p>
          <Link to="/register" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold uppercase transition-all shadow-lg">
            Hemen Katıl
          </Link>
        </div>
      </section>

      {/* SAĞLIKLI ÖĞÜN VE SPOR BİLGİSİ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-slate-900">Neden Sağlıklı Beslenmeliyiz?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Vücudunuz bir makinedir ve aldığı yakıtın kalitesi performansını belirler. 
              Doğru makro besin dengesi (Protein, Karbo, Yağ) sadece kas gelişimi için değil, 
              beyin fonksiyonlarınız ve günlük enerji seviyeniz için de hayati önem taşır.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053" 
              alt="Healthy Meal" 
              className="rounded-3xl shadow-xl w-full h-64 object-cover"
            />
          </div>
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070" 
              alt="Heavy Training" 
              className="rounded-3xl shadow-xl w-full h-64 object-cover"
            />
            <h2 className="text-4xl font-black text-slate-900">Düzenli Sporun Gücü</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Spor yapmak sadece fiziksel bir aktivite değil, zihinsel bir disiplindir. 
              Düzenli egzersiz stresi azaltır, metabolizmayı hızlandırır ve uzun vadeli 
              sağlık risklerini minimize eder. ActiveRoot ile her setin ve her kalorinin hesabını tutun.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;