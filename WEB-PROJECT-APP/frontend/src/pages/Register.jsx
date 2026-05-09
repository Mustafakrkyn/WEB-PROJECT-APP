import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Gerçek bir uygulamada burada API isteği atılır.
    // Biz şu an ismi yerel hafızaya kaydediyoruz.
    localStorage.setItem('username', name);
    alert(`Hoş geldin ${name}! Hesabın başarıyla oluşturuldu.`);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-[2.5rem] shadow-2xl">
        <h2 className="text-3xl font-black text-center text-slate-900 uppercase">Aramıza Katıl</h2>
        <form onSubmit={handleRegister} className="mt-8 space-y-6">
          <input 
            required
            type="text" 
            placeholder="Adınız ve Soyadınız" 
            className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input required type="email" placeholder="E-posta" className="w-full p-4 bg-slate-50 border rounded-2xl outline-none" />
          <input required type="password" placeholder="Şifre" className="w-full p-4 bg-slate-50 border rounded-2xl outline-none" />
          
          <button type="submit" className="w-full bg-blue-600 text-white p-4 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all">
            Hesap Oluştur
          </button>
        </form>
        <p className="text-center text-sm">
          Zaten hesabınız var mı? <Link to="/login" className="text-blue-600 font-bold">Giriş Yap</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;  