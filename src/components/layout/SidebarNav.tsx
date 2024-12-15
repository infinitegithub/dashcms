import React from 'react';
import { 
  Users, 
  UserPlus, 
  FileText, 
  CheckSquare, 
  Car, 
  MessageSquare,
  Settings
} from 'lucide-react';
import { SidebarItem } from './SidebarItem';
import { ActivePage } from '../../App';

interface SidebarNavProps {
  activePage: ActivePage;
  onPageChange: (page: ActivePage) => void;
}

const mainMenuItems = [
  { 
    icon: Users, 
    label: 'Accounts',
    path: 'accounts'
  },
  { 
    icon: UserPlus, 
    label: 'Leads',
    path: 'leads'
  },
  { 
    icon: FileText, 
    label: 'Documents',
    path: 'documents'
  },
  { 
    icon: CheckSquare, 
    label: 'Tasks',
    path: 'tasks'
  },
  { 
    icon: Car, 
    label: 'Inventory',
    path: 'inventory'
  },
  { 
    icon: MessageSquare, 
    label: 'Chat',
    path: 'chat'
  }
];

const bottomMenuItems = [
  {
    icon: Settings,
    label: 'Settings',
    path: 'settings'
  }
];

export function SidebarNav({ activePage, onPageChange }: SidebarNavProps) {
  return (
    <nav className="flex flex-col h-[calc(100vh-2.5rem)]">
      <div className="flex-1 space-y-0.5">
        {mainMenuItems.map((item) => (
          <SidebarItem 
            key={item.path} 
            {...item} 
            active={activePage === item.path}
            onClick={() => onPageChange(item.path as ActivePage)}
          />
        ))}
      </div>
      <div className="space-y-0.5 pt-2 border-t border-[#2d2d2d]">
        {bottomMenuItems.map((item) => (
          <SidebarItem 
            key={item.path} 
            {...item} 
            active={activePage === item.path}
            onClick={() => onPageChange(item.path as ActivePage)}
          />
        ))}
      </div>
    </nav>
  );
}