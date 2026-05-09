import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    navigate('/login');
  };

  return (
    <nav className="bg-slate-900 text-white p-5 sticky top-0 z-50 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-black tracking-widest text-blue-500 flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm italic">AR</div>
          ACTIVEROOT
        </Link>
        
        {/* ORTA MENÜ */}
        <div className="hidden md:flex gap-8 font-bold text-xs tracking-widest uppercase">
          <Link to="/" className="hover:text-blue-400 transition-colors">Ana Sayfa</Link>
          <Link to="/nutrition" className="hover:text-orange-400 transition-colors">Kalori</Link>
          <Link to="/weight" className="hover:text-blue-400 transition-colors">Ağırlık</Link>
          <Link to="/workout" className="hover:text-green-400 transition-colors">Antrenman</Link>
        </div>

        {/* SAĞ TARAF: KULLANICI PANELİ */}
        <div className="flex items-center">
          {username ? (
            <div className="relative group">
              {/* Kullanıcı Adı ve Profil Tuşu */}
              <div className="flex items-center gap-3 cursor-pointer p-2 rounded-xl group-hover:bg-slate-800 transition-all">
                <span className="text-sm font-bold tracking-tight">
                  MERHABA, <span className="text-blue-400 uppercase">{username}</span>
                </span>
                
                {/* Profil İkonu Tuşu */}
                <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center border-2 border-blue-400 shadow-lg shadow-blue-600/20">
                  <span className="text-white font-black text-xs">{username.charAt(0).toUpperCase()}</span>
                </div>
              </div>

              {/* Hover ile Açılan Logout Menüsü */}
              <div className="absolute right-0 top-full pt-2 w-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-xs font-black text-red-500 hover:bg-red-600 hover:text-white transition-all uppercase tracking-widest"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/30">
              GİRİŞ YAP
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;