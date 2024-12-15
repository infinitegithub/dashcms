import React, { useState } from 'react';
import { Save } from 'lucide-react';

export function GeneralTab() {
  const [settings, setSettings] = useState({
    companyName: 'AutoDash',
    timezone: 'UTC',
    dateFormat: 'MM/DD/YYYY',
    currency: 'USD',
    language: 'en'
  });

  const handleSave = () => {
    // Save settings
    console.log('Saving settings:', settings);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 p-4">
        <h3 className="text-sm font-medium text-gray-200 mb-4">General Settings</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Company Name</label>
            <input
              type="text"
              value={settings.companyName}
              onChange={e => setSettings({ ...settings, companyName: e.target.value })}
              className="w-full px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-200"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Timezone</label>
            <select
              value={settings.timezone}
              onChange={e => setSettings({ ...settings, timezone: e.target.value })}
              className="w-full px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-200"
            >
              <option value="UTC">UTC</option>
              <option value="America/New_York">Eastern Time</option>
              <option value="America/Los_Angeles">Pacific Time</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Date Format</label>
            <select
              value={settings.dateFormat}
              onChange={e => setSettings({ ...settings, dateFormat: e.target.value })}
              className="w-full px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-200"
            >
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Currency</label>
            <select
              value={settings.currency}
              onChange={e => setSettings({ ...settings, currency: e.target.value })}
              className="w-full px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-200"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-3 py-1.5 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <Save className="w-3.5 h-3.5" />
          Save Changes
        </button>
      </div>
    </div>
  );
}