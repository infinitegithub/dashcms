import React from 'react';
import { Search, Bell, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { UserMenu } from '../user/UserMenu';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-[#1a1a1a] h-7 border-b border-[#2d2d2d]">
      <div className="flex items-center justify-between h-full px-2">
        <div className="flex-1" />
        <div className="flex-1 max-w-xs">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-2.5 h-2.5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-6 pr-2 py-0.5 text-[10px] bg-[#2d2d2d] border border-[#3d3d3d] rounded focus:outline-none focus:ring-1 focus:ring-[#4d4d4d] text-gray-300 placeholder-gray-500"
            />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end gap-1">
          <button 
            onClick={toggleTheme}
            className="p-0.5 hover:bg-[#2d2d2d] rounded"
          >
            {theme === 'dark' ? (
              <Sun className="w-2.5 h-2.5 text-gray-400" />
            ) : (
              <Moon className="w-2.5 h-2.5 text-gray-400" />
            )}
          </button>
          <button className="relative p-0.5 hover:bg-[#2d2d2d] rounded">
            <Bell className="w-2.5 h-2.5 text-gray-400" />
            <span className="absolute top-0 right-0 w-1 h-1 bg-blue-500 rounded-full" />
          </button>
          <UserMenu />
        </div>
      </div>
    </header>
  );
}