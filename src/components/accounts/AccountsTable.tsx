import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Account } from '../../types/account';

interface AccountsTableProps {
  accounts: Account[];
}

export function AccountsTable({ accounts }: AccountsTableProps) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-700/50">
          <th className="text-left py-2 px-3">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox w-3 h-3 rounded bg-gray-700 border-gray-600" />
              <span className="ml-2 text-xs text-gray-400">Name</span>
            </label>
          </th>
          <th className="text-left py-2 px-3 text-xs text-gray-400">Industry</th>
          <th className="text-left py-2 px-3 text-xs text-gray-400">Type</th>
          <th className="text-left py-2 px-3 text-xs text-gray-400">Country</th>
          <th className="text-right py-2 px-3 text-xs text-gray-400">Actions</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((account) => (
          <tr key={account.id} className="border-b border-gray-700/50 hover:bg-gray-700/25">
            <td className="py-2 px-3">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox w-3 h-3 rounded bg-gray-700 border-gray-600" />
                <span className="ml-2 text-sm text-gray-300">{account.name}</span>
              </label>
            </td>
            <td className="py-2 px-3 text-sm text-gray-400">{account.type}</td>
            <td className="py-2 px-3">
              <span className={`px-2 py-0.5 rounded text-[10px] font-medium uppercase ${
                account.status === 'active'
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-gray-600/50 text-gray-400'
              }`}>
                {account.type}
              </span>
            </td>
            <td className="py-2 px-3 text-sm text-gray-400">{account.address.country}</td>
            <td className="py-2 px-3 text-right">
              <button className="text-gray-400 hover:text-gray-300">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}