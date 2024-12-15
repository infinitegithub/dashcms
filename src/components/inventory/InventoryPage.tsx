import React from 'react';
import { InventoryList } from './InventoryList';
import { InventoryStats } from './InventoryStats';

export function InventoryPage() {
  return (
    <main className="flex-1 bg-gray-900 p-6 overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-200">Vehicle Inventory</h1>
          <p className="text-sm text-gray-400">Manage and monitor your dealership inventory</p>
        </div>
        <button className="px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-300 hover:bg-gray-600/50">
          + Add Vehicle
        </button>
      </div>
      <InventoryStats />
      <InventoryList />
    </main>
  );
}