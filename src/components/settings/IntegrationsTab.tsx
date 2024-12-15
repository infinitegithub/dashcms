import React, { useState } from 'react';
import { Save, TestTube, Database, Globe, Cloud } from 'lucide-react';
import { WordPressConfig, DatabaseConfig } from '../../types/settings';
import { useSettings } from '../../hooks/useSettings';

export function IntegrationsTab() {
  const { settings, updateSettings, testConnection } = useSettings();
  const [isTesting, setIsTesting] = useState(false);

  const handleSave = async (type: 'wordpress' | 'database', config: any) => {
    try {
      await updateSettings({
        ...settings,
        [type]: config
      });
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  };

  const handleTest = async (type: 'wordpress' | 'database') => {
    setIsTesting(true);
    try {
      const success = await testConnection(type);
      alert(success ? 'Connection successful!' : 'Connection failed!');
    } catch (error) {
      alert('Connection failed!');
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* WordPress Integration */}
      <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 p-4">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-3.5 h-3.5 text-blue-400" />
          <h3 className="text-sm font-medium text-gray-200">WordPress Integration</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Site URL</label>
            <input
              type="url"
              className="w-full px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-200"
              placeholder="https://your-wordpress-site.com"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">API Key</label>
            <input
              type="password"
              className="w-full px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-200"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => handleTest('wordpress')}
            disabled={isTesting}
            className="flex items-center gap-2 px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-300 hover:bg-gray-600/50"
          >
            <TestTube className="w-3.5 h-3.5" />
            Test Connection
          </button>
          <button
            onClick={() => handleSave('wordpress', {})}
            className="flex items-center gap-2 px-3 py-1.5 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <Save className="w-3.5 h-3.5" />
            Save
          </button>
        </div>
      </div>

      {/* Database Integration */}
      <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 p-4">
        <div className="flex items-center gap-2 mb-4">
          <Database className="w-3.5 h-3.5 text-purple-400" />
          <h3 className="text-sm font-medium text-gray-200">Database Connection</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Database Type</label>
            <select className="w-full px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-200">
              <option value="mysql">MySQL</option>
              <option value="postgresql">PostgreSQL</option>
              <option value="mongodb">MongoDB</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Host</label>
            <input
              type="text"
              className="w-full px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-200"
              placeholder="localhost"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Port</label>
            <input
              type="number"
              className="w-full px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-200"
              placeholder="3306"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Database Name</label>
            <input
              type="text"
              className="w-full px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-200"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Username</label>
            <input
              type="text"
              className="w-full px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-200"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-200"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => handleTest('database')}
            disabled={isTesting}
            className="flex items-center gap-2 px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-300 hover:bg-gray-600/50"
          >
            <TestTube className="w-3.5 h-3.5" />
            Test Connection
          </button>
          <button
            onClick={() => handleSave('database', {})}
            className="flex items-center gap-2 px-3 py-1.5 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <Save className="w-3.5 h-3.5" />
            Save
          </button>
        </div>
      </div>
    </div>
  );
}