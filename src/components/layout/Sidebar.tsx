import React from 'react';
import { FileText } from 'lucide-react';
import { SidebarNav } from './SidebarNav';
import { ActivePage } from '../../App';

interface SidebarProps {
  activePage: ActivePage;
  onPageChange: (page: ActivePage) => void;
}

export function Sidebar({ activePage, onPageChange }: SidebarProps) {
  return (
    <div className="w-28 bg-[#1a1a1a] min-h-screen border-r border-[#2d2d2d]">
      <div className="flex items-center gap-1 px-2 py-1 mb-1">
        <div className="bg-[#2d2d2d] p-0.5 rounded">
          <FileText className="w-3 h-3 text-gray-400" />
        </div>
        <h1 className="text-[10px] font-medium text-gray-300">AutoDash</h1>
      </div>
      <SidebarNav activePage={activePage} onPageChange={onPageChange} />
    </div>
  );
}