import { useState } from 'react';

type Page = 'accounts' | 'leads' | 'documents' | 'tasks' | 'inventory' | 'chat' | 'settings' | 'profile';

export function useNavigate() {
  const [currentPage, setCurrentPage] = useState<Page>('accounts');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    // You could also use window.history.pushState here for proper URL handling
  };

  return {
    currentPage,
    navigateTo
  };
}