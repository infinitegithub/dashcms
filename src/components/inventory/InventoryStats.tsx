import React from 'react';
import { Car, DollarSign, ShoppingCart, Package } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend: number;
}

function StatCard({ icon, title, value, trend }: StatCardProps) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-3 flex-1 min-w-[200px]">
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1.5 rounded bg-gray-700/50">
          {icon}
        </div>
        <span className="text-xs text-gray-400">{title}</span>
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-lg font-semibold text-gray-200">{value}</span>
        <span className="text-xs text-emerald-400">↑ {trend}%</span>
      </div>
    </div>
  );
}

export function InventoryStats() {
  return (
    <div className="flex flex-nowrap gap-4 mb-6 overflow-x-auto pb-2">
      <StatCard
        icon={<Car className="w-3.5 h-3.5 text-blue-400" />}
        title="Total Vehicles"
        value="124"
        trend={12.5}
      />
      <StatCard
        icon={<Package className="w-3.5 h-3.5 text-emerald-400" />}
        title="Available"
        value="98"
        trend={8.2}
      />
      <StatCard
        icon={<ShoppingCart className="w-3.5 h-3.5 text-purple-400" />}
        title="Reserved"
        value="26"
        trend={4.1}
      />
      <StatCard
        icon={<DollarSign className="w-3.5 h-3.5 text-orange-400" />}
        title="Total Value"
        value="$4.2M"
        trend={2.4}
      />
    </div>
  );
}