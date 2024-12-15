export interface Document {
  id: string;
  title: string;
  type: 'contract' | 'invoice' | 'proposal' | 'other';
  status: 'draft' | 'pending' | 'signed' | 'expired';
  createdAt: string;
  modifiedAt: string;
  size: number;
  owner: string;
  sharedWith: string[];
}