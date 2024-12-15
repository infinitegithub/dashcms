import { useState } from 'react';
import { IntegrationSettings, WordPressConfigSchema, DatabaseConfigSchema } from '../types/settings';

export function useSettings() {
  const [settings, setSettings] = useState<IntegrationSettings>(() => {
    const saved = localStorage.getItem('integration_settings');
    return saved ? JSON.parse(saved) : {};
  });

  const updateSettings = async (newSettings: IntegrationSettings) => {
    try {
      // Validate WordPress settings if provided
      if (newSettings.wordpress) {
        WordPressConfigSchema.parse(newSettings.wordpress);
      }

      // Validate Database settings if provided
      if (newSettings.database) {
        DatabaseConfigSchema.parse(newSettings.database);
      }

      // Save settings
      setSettings(newSettings);
      localStorage.setItem('integration_settings', JSON.stringify(newSettings));
    } catch (error) {
      throw new Error(`Invalid settings: ${(error as Error).message}`);
    }
  };

  const testConnection = async (type: 'wordpress' | 'database') => {
    // In a real application, you would make actual API calls here
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };

  return {
    settings,
    updateSettings,
    testConnection
  };
}