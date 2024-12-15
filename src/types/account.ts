export interface Account {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  type: 'individual' | 'business' | 'dealer';
  createdAt: string;
  lastPurchase?: string;
  totalPurchases: number;
  creditScore?: number;
  preferredContact: 'email' | 'phone' | 'sms';
  salesAgent: string;
  avatar?: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  documents: {
    driversLicense?: string;
    insurance?: string;
    proofOfIncome?: string;
  };
  preferences: {
    vehicleTypes: string[];
    priceRange: {
      min: number;
      max: number;
    };
    financing: boolean;
  };
  notes: string;
}