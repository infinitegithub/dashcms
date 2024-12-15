import React from 'react';
import { DashboardStats } from './DashboardStats';
import { InventoryList } from '../inventory/InventoryList';

export function DashboardContent() {
  return (
    <main className="flex-1 p-8 overflow-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Welcome back to your dealership overview</p>
      </div>
      <DashboardStats />
      <InventoryList />
    </main>
  );
}