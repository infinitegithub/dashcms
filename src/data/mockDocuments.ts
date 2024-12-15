import { Document } from '../types/document';

export const MOCK_DOCUMENTS: Document[] = [
  {
    id: 'D001',
    title: 'Sales Contract - Michael Thompson',
    type: 'contract',
    status: 'pending',
    createdAt: '2024-03-18T10:30:00Z',
    modifiedAt: '2024-03-18T10:30:00Z',
    size: 2500000,
    owner: 'Sarah Wilson',
    sharedWith: ['Michael Thompson', 'John Cooper']
  },
  {
    id: 'D002',
    title: 'Financing Proposal - Emily Rodriguez',
    type: 'proposal',
    status: 'draft',
    createdAt: '2024-03-17T14:20:00Z',
    modifiedAt: '2024-03-18T09:15:00Z',
    size: 1800000,
    owner: 'John Cooper',
    sharedWith: ['Emily Rodriguez']
  }
];