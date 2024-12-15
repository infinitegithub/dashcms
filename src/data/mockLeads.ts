import { Lead } from '../types/lead';

export const MOCK_LEADS: Lead[] = [
  {
    id: 'L001',
    name: 'Michael Thompson',
    email: 'michael.t@example.com',
    phone: '(555) 234-5678',
    status: 'new',
    source: 'website',
    interest: '2024 Tesla Model 3',
    assignedTo: 'Sarah Wilson',
    createdAt: '2024-03-18T10:30:00Z',
    notes: 'Interested in electric vehicles, looking to buy within 2 months'
  },
  {
    id: 'L002',
    name: 'Emily Rodriguez',
    email: 'emily.r@example.com',
    phone: '(555) 876-5432',
    status: 'contacted',
    source: 'referral',
    interest: '2024 Toyota Camry',
    assignedTo: 'John Cooper',
    createdAt: '2024-03-17T14:20:00Z',
    lastContact: '2024-03-18T09:15:00Z',
    notes: 'Following up on test drive request'
  }
];