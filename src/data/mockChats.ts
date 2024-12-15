import { ChatConversation, ChatMessage } from '../types/chat';

export const MOCK_CONVERSATIONS: ChatConversation[] = [
  {
    id: 'C001',
    customer: {
      id: 'CUST001',
      name: 'Michael Thompson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    lastMessage: 'Great, I'll see you tomorrow at 2 PM for the test drive.',
    timestamp: '2024-03-18T10:30:00Z',
    unreadCount: 2,
    status: 'active'
  },
  {
    id: 'C002',
    customer: {
      id: 'CUST002',
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    lastMessage: 'Could you send me more information about financing options?',
    timestamp: '2024-03-17T14:20:00Z',
    unreadCount: 0,
    status: 'pending'
  }
];

export const MOCK_MESSAGES: Record<string, ChatMessage[]> = {
  C001: [
    {
      id: 'M001',
      content: 'Hi, I'm interested in scheduling a test drive for the Tesla Model 3.',
      sender: {
        id: 'CUST001',
        name: 'Michael Thompson',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'user'
      },
      timestamp: '2024-03-18T10:25:00Z',
      status: 'read'
    },
    {
      id: 'M002',
      content: 'I can help you with that. We have availability tomorrow at 2 PM. Would that work for you?',
      sender: {
        id: 'AGENT001',
        name: 'Sarah Wilson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'agent'
      },
      timestamp: '2024-03-18T10:27:00Z',
      status: 'read'
    }
  ]
};