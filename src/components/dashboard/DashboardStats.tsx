import React from 'react';
import { Car, DollarSign, Users, Target } from 'lucide-react';
import { StatCard } from '../ui/StatCard';

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        title="Total Inventory"
        value="124"
        trend="up"
        percentage="12.5"
        icon={Car}
        color="blue"
      />
      <StatCard
        title="Monthly Revenue"
        value="$285.5k"
        trend="up"
        percentage="8.2"
        icon={DollarSign}
        color="green"
      />
      <StatCard
        title="Active Leads"
        value="48"
        trend="up"
        percentage="4.1"
        icon={Target}
        color="purple"
      />
      <StatCard
        title="Total Customers"
        value="2,841"
        trend="up"
        percentage="2.4"
        icon={Users}
        color="orange"
      />
    </div>
  );
}