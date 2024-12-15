export interface Invoice {
  id: string;
  customer: {
    name: string;
    email: string;
    avatar: string;
  };
  country: string;
  date: string;
  amount: string;
  status: 'PAID' | 'UNPAID' | 'CANCELLED';
}