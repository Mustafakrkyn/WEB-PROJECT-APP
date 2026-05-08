import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    
    if (res.ok) {
      alert("Kayıt başarılı! Şimdi giriş yapabilirsin.");
      navigate('/login'); // Kayıt olunca giriş sayfasına atar
    } else {
      const data = await res.json();
      alert(data.error || "Kayıt sırasında hata oluştu.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="p-8 bg-white rounded shadow-md w-96 border-t-4 border-green-500">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Yeni Üyelik Oluştur</h2>
        <input className="w-full p-2 mb-4 border rounded" placeholder="Kullanıcı Adı" onChange={(e) => setUsername(e.target.value)} required />
        <input className="w-full p-2 mb-4 border rounded" type="password" placeholder="Şifre" onChange={(e) => setPassword(e.target.value)} required />
        <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 font-bold transition-colors">Kayıt Ol</button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Zaten hesabın var mı? <span onClick={() => navigate('/login')} className="text-blue-600 cursor-pointer">Giriş Yap</span>
        </p>
      </form>
    </div>
  );
};

export default Register;