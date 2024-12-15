import React from 'react';
import { UserPlus } from 'lucide-react';

export function UsersTab() {
  const users = [
    {
      id: '1',
      name: 'John Cooper',
      email: 'john.cooper@example.com',
      role: 'Admin',
      status: 'Active'
    },
    // Add more mock users
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-200">Users</h3>
        <button className="flex items-center gap-2 px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-300 hover:bg-gray-600/50">
          <UserPlus className="w-3.5 h-3.5" />
          Add User
        </button>
      </div>

      <div className="bg-gray-800/50 rounded-lg border border-gray-700/50">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700/50">
              <th className="text-left py-2 px-3 text-xs text-gray-400">Name</th>
              <th className="text-left py-2 px-3 text-xs text-gray-400">Email</th>
              <th className="text-left py-2 px-3 text-xs text-gray-400">Role</th>
              <th className="text-left py-2 px-3 text-xs text-gray-400">Status</th>
              <th className="text-right py-2 px-3 text-xs text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b border-gray-700/50">
                <td className="py-2 px-3 text-sm text-gray-300">{user.name}</td>
                <td className="py-2 px-3 text-sm text-gray-300">{user.email}</td>
                <td className="py-2 px-3 text-sm text-gray-300">{user.role}</td>
                <td className="py-2 px-3">
                  <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/10 text-green-400">
                    {user.status}
                  </span>
                </td>
                <td className="py-2 px-3 text-right">
                  <button className="text-xs text-gray-400 hover:text-gray-300">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}