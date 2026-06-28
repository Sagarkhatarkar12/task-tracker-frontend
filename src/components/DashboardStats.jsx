import React from 'react';
import { FaTasks, FaClock, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const DashboardStats = ({ total, pending, completed, highPriority }) => {
  const stats = [
    { label: 'Total Tasks', value: total, icon: FaTasks, color: 'text-blue-500' },
    { label: 'Pending', value: pending, icon: FaClock, color: 'text-yellow-500' },
    { label: 'Completed', value: completed, icon: FaCheckCircle, color: 'text-green-500' },
    { label: 'High Priority', value: highPriority, icon: FaExclamationTriangle, color: 'text-red-500' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
          <stat.icon className={`text-3xl ${stat.color}`} />
          <div>
            <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;