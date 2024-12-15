export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'sales' | 'support';
  avatar: string;
  department: string;
  status: 'active' | 'inactive';
  lastActive: string;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
    language: string;
  };
}

export interface UserSession {
  user: User;
  token: string;
  expiresAt: string;
}