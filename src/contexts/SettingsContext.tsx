import React, { createContext, useContext, useState } from 'react';
import { IntegrationSettings } from '../types/settings';

interface SettingsContextType {
  settings: IntegrationSettings;
  updateSettings: (newSettings: IntegrationSettings) => Promise<void>;
  testConnection: (type: 'wordpress' | 'database') => Promise<boolean>;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<IntegrationSettings>(() => {
    const saved = localStorage.getItem('integration_settings');
    return saved ? JSON.parse(saved) : {};
  });

  const updateSettings = async (newSettings: IntegrationSettings) => {
    setSettings(newSettings);
    localStorage.setItem('integration_settings', JSON.stringify(newSettings));
  };

  const testConnection = async (type: 'wordpress' | 'database') => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, testConnection }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}