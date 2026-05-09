import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  // Sosyal medya ve normal giriş için ortak yönlendirme fonksiyonu
  const handleLogin = (e, provider) => {
    if (e) e.preventDefault();
    
    // Simülasyon: Giriş yapan kullanıcıya geçici bir isim atıyoruz
    const displayName = provider === 'Google' ? 'Google Kullanıcısı' : 
                        provider === 'Facebook' ? 'Facebook Kullanıcısı' : 
                        email.split('@')[0]; // E-posta adresinin başını isim yap
    
    localStorage.setItem('username', displayName);
    navigate('/');
    window.location.reload(); // Navbar'daki "Merhaba" yazısının anında güncellenmesi için
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Giriş Yap</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          {/* Google Giriş Butonu */}
          <button 
            onClick={() => handleLogin(null, 'Google')}
            className="flex items-center justify-center p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-bold text-[10px]"
          >
            <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" className="w-5 h-5 mr-2" alt="Google" /> 
            GOOGLE
          </button>
          
          {/* Facebook Giriş Butonu - Orijinal Renkli İkon */}
          <button 
            onClick={() => handleLogin(null, 'Facebook')}
            className="flex items-center justify-center p-3 rounded-xl font-bold text-[10px] bg-[#1877F2] text-white border-none hover:bg-[#166fe5] transition-all"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" 
              className="w-5 h-5 mr-2" 
              alt="Facebook" 
            /> 
            FACEBOOK
          </button>
        </div>

        <div className="relative my-6 text-center">
          <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">veya</span>
        </div>

        <form className="space-y-4" onSubmit={(e) => handleLogin(e, 'Email')}>
          <input 
            required
            type="email" 
            placeholder="E-posta" 
            className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            required
            type="password" 
            placeholder="Şifre" 
            className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <button type="submit" className="w-full bg-slate-900 text-white p-4 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg">
            Giriş Yap
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Henüz hesabınız yok mu? <Link to="/register" className="text-blue-600 font-bold hover:underline">Şimdi Üye Ol</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;