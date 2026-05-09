import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-20 pt-16 pb-8 border-t border-blue-500/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          
          {/* İletişim ve Sosyal Medya */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-widest text-blue-500 italic">ACTIVEROOT</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              ActiveRoot, sporcular için geliştirilmiş profesyonel bir yönetim portalıdır. 
              Verilerini takip et, sınırlarını zorla.
            </p>
            
            {/* Gerçek Linkler */}
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/accounts/login/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all font-bold text-xs"
              >
                IG
              </a>
              <a 
                href="https://twitter.com/i/flow/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-all font-bold text-xs"
              >
                TW
              </a>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all font-bold text-xs"
              >
                YT
              </a>
            </div>
          </div>

          {/* Harita: Haliç Üniversitesi Kampüsü */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span> 
              Merkez Kampüsümüz: Haliç Üniversitesi
            </h4>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-80 border border-slate-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10005.496438949458!2d28.953239781075176!3d41.08200729961895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7ade6455895%3A0x8162d5a16546b5e2!2zSGFsacOnIMOcbml2ZXJzaXRlc2k!5e0!3m2!1str!2str!4v1778325288777!5m2!1str!2str"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-xs text-gray-500 font-medium tracking-widest uppercase">
            © 2026 ActiveRoot - Engineered for Strength
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;