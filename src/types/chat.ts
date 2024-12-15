export interface ChatMessage {
  id: string;
  content: string;
  sender: {
    id: string;
    name: string;
    avatar: string;
    role: 'user' | 'agent';
  };
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
  attachments?: {
    name: string;
    url: string;
    type: string;
  }[];
}

export interface ChatConversation {
  id: string;
  customer: {
    id: string;
    name: string;
    avatar: string;
  };
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  status: 'active' | 'resolved' | 'pending';
}