export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'new' | 'contacted' | 'qualified' | 'lost';
  source: 'website' | 'referral' | 'social' | 'other';
  interest: string;
  assignedTo: string;
  createdAt: string;
  lastContact?: string;
  notes?: string;
}