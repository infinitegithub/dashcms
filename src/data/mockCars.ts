import { Car } from '../types/car';

export const MOCK_CARS: Car[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    price: 32999,
    mileage: 0,
    condition: 'new',
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    color: 'Silver',
    imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: ['Bluetooth', 'Backup Camera', 'Lane Departure Warning']
  },
  {
    id: '2',
    make: 'Honda',
    model: 'Accord',
    year: 2022,
    price: 28500,
    mileage: 15000,
    condition: 'used',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    color: 'Blue',
    imageUrl: 'https://images.unsplash.com/photo-1582639510494-c80b5de9f148?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: ['Apple CarPlay', 'Sunroof', 'Leather Seats']
  },
  {
    id: '3',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 45990,
    mileage: 0,
    condition: 'new',
    fuelType: 'Electric',
    transmission: 'Automatic',
    color: 'Red',
    imageUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: ['Autopilot', 'Premium Sound', '15" Touchscreen']
  }
];