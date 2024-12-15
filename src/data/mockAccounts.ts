import { Account } from '../types/account';

export const MOCK_ACCOUNTS: Account[] = [
  {
    id: 'ACC001',
    name: 'Robert Chen',
    email: 'robert.chen@example.com',
    phone: '(555) 123-4567',
    status: 'active',
    type: 'individual',
    createdAt: '2024-01-15',
    lastPurchase: '2024-02-20',
    totalPurchases: 2,
    creditScore: 750,
    preferredContact: 'email',
    salesAgent: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    address: {
      street: '123 Main St',
      city: 'Austin',
      state: 'TX',
      zipCode: '78701'
    },
    documents: {
      driversLicense: 'DL123456',
      insurance: 'INS789012'
    },
    preferences: {
      vehicleTypes: ['sedan', 'suv'],
      priceRange: {
        min: 25000,
        max: 45000
      },
      financing: true
    },
    notes: 'Looking for a family vehicle with good safety features'
  },
  {
    id: 'ACC002',
    name: 'Sarah Williams',
    email: 'sarah.w@example.com',
    phone: '(555) 987-6543',
    status: 'active',
    type: 'business',
    createdAt: '2024-02-01',
    lastPurchase: '2024-03-15',
    totalPurchases: 5,
    creditScore: 800,
    preferredContact: 'phone',
    salesAgent: 'John Cooper',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    address: {
      street: '456 Business Ave',
      city: 'Austin',
      state: 'TX',
      zipCode: '78702'
    },
    documents: {
      driversLicense: 'DL789012',
      insurance: 'INS345678',
      proofOfIncome: 'POI901234'
    },
    preferences: {
      vehicleTypes: ['luxury', 'electric'],
      priceRange: {
        min: 50000,
        max: 100000
      },
      financing: false
    },
    notes: 'Fleet manager for tech company, interested in electric vehicles'
  }
];