import React from 'react';
import { AccountsList } from './AccountsList';
import { AccountStats } from './AccountStats';

export function AccountsPage() {
  return (
    <main className="flex-1 bg-gray-900 p-6 overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-200">Accounts</h1>
          <p className="text-sm text-gray-400">Manage your customer accounts</p>
        </div>
        <button className="px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-300 hover:bg-gray-600/50">
          + Create Account
        </button>
      </div>
      <AccountStats />
      <AccountsList />
    </main>
  );
}