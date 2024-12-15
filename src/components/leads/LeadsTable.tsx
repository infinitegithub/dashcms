import React from 'react';
import { MoreHorizontal, Phone, Mail, MessageSquare, Calendar } from 'lucide-react';
import { Lead } from '../../types/lead';

interface LeadsTableProps {
  leads: Lead[];
}

const getStatusColor = (status: Lead['status']) => {
  switch (status) {
    case 'new':
      return 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400';
    case 'contacted':
      return 'bg-yellow-50 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400';
    case 'qualified':
      return 'bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400';
    case 'lost':
      return 'bg-gray-50 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400';
    default:
      return 'bg-gray-50 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400';
  }
};

export function LeadsTable({ leads }: LeadsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="text-left py-4 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Name</th>
            <th className="text-left py-4 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Contact</th>
            <th className="text-left py-4 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Interest</th>
            <th className="text-left py-4 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Source</th>
            <th className="text-left py-4 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
            <th className="text-left py-4 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Assigned To</th>
            <th className="text-center py-4 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-b border-gray-200 dark:border-gray-700">
              <td className="py-4 px-4">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{lead.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{lead.id}</p>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{lead.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{lead.phone}</span>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                {lead.interest}
              </td>
              <td className="py-4 px-4">
                <span className="capitalize text-gray-700 dark:text-gray-300">{lead.source}</span>
              </td>
              <td className="py-4 px-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                  {lead.status.toUpperCase()}
                </span>
              </td>
              <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                {lead.assignedTo}
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center justify-center gap-2">
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                    <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                    <MessageSquare className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}