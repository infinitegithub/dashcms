import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

export function ProfilePage() {
  const { user } = useAuth();

  return (
    <main className="flex-1 bg-gray-900 p-6 overflow-auto">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-200">Profile</h1>
        <p className="text-sm text-gray-400">Manage your account settings</p>
      </div>

      <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 p-4">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={user?.avatar}
            alt={user?.name}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <h2 className="text-lg font-medium text-gray-200">{user?.name}</h2>
            <p className="text-sm text-gray-400">{user?.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Role</label>
            <input
              type="text"
              value={user?.role}
              disabled
              className="w-full px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-200"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Department</label>
            <input
              type="text"
              value={user?.department}
              disabled
              className="w-full px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-200"
            />
          </div>
        </div>
      </div>
    </main>
  );
}