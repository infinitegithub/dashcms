import React, { useState } from 'react';
import { Cog, Globe, Users } from 'lucide-react';
import { IntegrationsTab } from './IntegrationsTab';
import { GeneralTab } from './GeneralTab';
import { UsersTab } from './UsersTab';

type SettingsTab = 'general' | 'integrations' | 'users';

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('general');

  const tabs = [
    { id: 'general', label: 'General', icon: Cog },
    { id: 'integrations', label: 'Integrations', icon: Globe },
    { id: 'users', label: 'Users', icon: Users },
  ] as const;

  const renderContent = () => {
    switch (activeTab) {
      case 'general':
        return <GeneralTab />;
      case 'integrations':
        return <IntegrationsTab />;
      case 'users':
        return <UsersTab />;
      default:
        return null;
    }
  };

  return (
    <main className="flex-1 bg-gray-900 p-6 overflow-auto">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-200">Settings</h1>
        <p className="text-sm text-gray-400">Configure your application settings</p>
      </div>

      <div className="flex gap-6">
        <div className="w-36">
          <nav className="space-y-1">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as SettingsTab)}
                className={`w-full flex items-center gap-2 px-3 py-1.5 text-xs rounded ${
                  activeTab === id
                    ? 'bg-gray-800 text-gray-200'
                    : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-300'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1 max-w-3xl">
          {renderContent()}
        </div>
      </div>
    </main>
  );
}