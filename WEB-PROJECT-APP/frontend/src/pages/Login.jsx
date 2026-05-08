import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token); // Anahtarı cebe koyduk
      localStorage.setItem('username', data.username);
      navigate('/'); // Giriş başarılıysa ana sayfaya git
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="p-8 bg-white rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Fitness Portalına Giriş</h2>
        <input className="w-full p-2 mb-4 border rounded" placeholder="Kullanıcı Adı" onChange={(e) => setUsername(e.target.value)} />
        <input className="w-full p-2 mb-4 border rounded" type="password" placeholder="Şifre" onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 font-bold">Giriş Yap</button>
      </form>
    </div>
  );
};

export default Login;