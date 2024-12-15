import React from 'react';
import { Users, UserPlus, UserCheck, Building } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend: number;
}

function StatCard({ icon, title, value, trend }: StatCardProps) {
  return (
    <div className="bg-[#2d2d2d] rounded p-1.5 flex-1 min-w-[120px]">
      <div className="flex items-center gap-1 mb-1">
        <div className="p-0.5 rounded bg-[#3d3d3d]">
          {icon}
        </div>
        <span className="text-[10px] text-gray-400">{title}</span>
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-xs font-medium text-gray-200">{value}</span>
        <span className="text-[10px] text-emerald-400">↑ {trend}%</span>
      </div>
    </div>
  );
}

export function AccountStats() {
  return (
    <div className="flex flex-nowrap gap-2 mb-3 overflow-x-auto pb-1">
      <StatCard
        icon={<Users className="w-2.5 h-2.5 text-blue-400" />}
        title="Total Accounts"
        value="2,841"
        trend={12.5}
      />
      <StatCard
        icon={<UserPlus className="w-2.5 h-2.5 text-emerald-400" />}
        title="New Accounts"
        value="48"
        trend={8.2}
      />
      <StatCard
        icon={<UserCheck className="w-2.5 h-2.5 text-purple-400" />}
        title="Active Accounts"
        value="2,156"
        trend={4.1}
      />
      <StatCard
        icon={<Building className="w-2.5 h-2.5 text-orange-400" />}
        title="Business Accounts"
        value="685"
        trend={2.4}
      />
    </div>
  );
}