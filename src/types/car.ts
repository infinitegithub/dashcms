export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  condition: 'new' | 'used';
  fuelType: string;
  transmission: string;
  color: string;
  imageUrl: string;
  features: string[];
}