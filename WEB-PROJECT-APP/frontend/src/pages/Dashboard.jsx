import React from "react";
const Dashboard = ({ data = [] }) => {
  return (
    <div className="p-4 bg-white rounded shadow text-center">
      <h2 className="text-xl font-bold mb-2">Gelişim Grafiği</h2>
      <p>Şu an {data.length} adet egzersiz ekledin.</p>
    </div>
  );
};
export default Dashboard;