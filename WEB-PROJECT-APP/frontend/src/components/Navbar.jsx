import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username'); // Giriş yapanın adını çek

  const handleLogout = () => {
    localStorage.clear(); // Hafızayı sil
    navigate('/login'); // Giriş sayfasına at
  };

  return (
    <nav className="bg-blue-700 text-white p-4 shadow-lg flex justify-between items-center">
      <Link to="/" className="text-2xl font-black tracking-tighter hover:text-blue-200">
        ActiveRoot<span className="font-light text-blue-300 italic">FITNESS</span>
      </Link>
      
      <div className="flex gap-4 items-center">
        {username ? (
          <>
            <span className="bg-blue-800 px-3 py-1 rounded text-sm font-medium border border-blue-500">
              👋 Selam, {username}
            </span>
            <button 
              onClick={handleLogout} 
              className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded font-bold text-sm transition-all"
            >
              Çıkış Yap
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-200 font-bold">Giriş</Link>
            <Link to="/register" className="bg-white text-blue-700 px-4 py-1 rounded font-bold hover:bg-blue-100 transition-all">Kayıt Ol</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;