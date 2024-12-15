import React from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { AccountsPage } from './components/accounts/AccountsPage';
import { LeadsPage } from './components/leads/LeadsPage';
import { DocumentsPage } from './components/documents/DocumentsPage';
import { TasksPage } from './components/tasks/TasksPage';
import { InventoryPage } from './components/inventory/InventoryPage';
import { ChatPage } from './components/chat/ChatPage';
import { SettingsPage } from './components/settings/SettingsPage';
import { ProfilePage } from './components/profile/ProfilePage';
import { LoginPage } from './components/auth/LoginPage';
import { useAuth } from './contexts/AuthContext';
import { useNavigate } from './hooks/useNavigate';

export type ActivePage = 'accounts' | 'leads' | 'documents' | 'tasks' | 'inventory' | 'chat' | 'settings' | 'profile';

function App() {
  const { user } = useAuth();
  const { currentPage, navigateTo } = useNavigate();

  if (!user) {
    return <LoginPage />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'accounts':
        return <AccountsPage />;
      case 'leads':
        return <LeadsPage />;
      case 'documents':
        return <DocumentsPage />;
      case 'tasks':
        return <TasksPage />;
      case 'inventory':
        return <InventoryPage />;
      case 'chat':
        return <ChatPage />;
      case 'settings':
        return <SettingsPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <AccountsPage />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 transition-colors">
      <Sidebar activePage={currentPage} onPageChange={navigateTo} />
      <div className="flex-1 flex flex-col">
        <Header />
        {renderPage()}
      </div>
    </div>
  );
}

export default App;