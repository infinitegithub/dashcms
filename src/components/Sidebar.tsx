import React from 'react';
import { Car, BarChart3, Settings, Users, FileText } from 'lucide-react';

export function Sidebar() {
  const menuItems = [
    { icon: Car, label: 'Inventory', active: true },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Users, label: 'Customers' },
    { icon: FileText, label: 'Documents' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-8">
        <Car className="w-8 h-8 text-blue-600" />
        <h1 className="text-xl font-bold">AutoDash</h1>
      </div>
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 ${
              item.active
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}