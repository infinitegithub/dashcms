import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick: () => void;
}

export function SidebarItem({ icon: Icon, label, active, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-2 py-1 text-[10px] transition-colors ${
        active
          ? 'bg-[#2d2d2d] text-gray-200'
          : 'text-gray-500 hover:bg-[#2d2d2d] hover:text-gray-300'
      }`}
    >
      <div className="flex items-center gap-1.5">
        <Icon className="w-3 h-3" />
        <span>{label}</span>
      </div>
      {active && (
        <div className="ml-auto w-0.5 h-2 bg-blue-500 rounded-full" />
      )}
    </button>
  );
}