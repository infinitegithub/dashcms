import React from 'react';
import { Car } from '../../types/car';
import { Fuel, Settings, Calendar } from 'lucide-react';
import { formatCurrency, formatNumber } from '../../utils/formatters';

interface InventoryCardProps {
  car: Car;
}

export function InventoryCard({ car }: InventoryCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <img
        src={car.imageUrl}
        alt={`${car.year} ${car.make} ${car.model}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {car.year} {car.make} {car.model}
          </h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            car.condition === 'new'
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-blue-50 text-blue-700'
          }`}>
            {car.condition.toUpperCase()}
          </span>
        </div>
        <p className="text-2xl font-bold text-blue-600 mb-4">
          {formatCurrency(car.price)}
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">{formatNumber(car.mileage)}</span>
            <span>mi</span>
          </div>
        </div>
      </div>
    </div>
  );
}