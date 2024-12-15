import React from 'react';
import { MoreHorizontal, Calendar, Settings, Fuel } from 'lucide-react';
import { Car } from '../../types/car';
import { formatCurrency, formatNumber } from '../../utils/formatters';

interface InventoryTableProps {
  cars: Car[];
}

export function InventoryTable({ cars }: InventoryTableProps) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-700/50">
          <th className="text-left py-2 px-3">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox w-3 h-3 rounded bg-gray-700 border-gray-600" />
              <span className="ml-2 text-xs text-gray-400">Vehicle</span>
            </label>
          </th>
          <th className="text-left py-2 px-3 text-xs text-gray-400">Details</th>
          <th className="text-left py-2 px-3 text-xs text-gray-400">Status</th>
          <th className="text-right py-2 px-3 text-xs text-gray-400">Price</th>
          <th className="text-right py-2 px-3 text-xs text-gray-400">Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <tr key={car.id} className="border-b border-gray-700/50 hover:bg-gray-700/25">
            <td className="py-2 px-3">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox w-3 h-3 rounded bg-gray-700 border-gray-600" />
                <div className="ml-2">
                  <p className="text-sm text-gray-300">{car.year} {car.make} {car.model}</p>
                  <p className="text-xs text-gray-500">ID: {car.id}</p>
                </div>
              </label>
            </td>
            <td className="py-2 px-3">
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{car.year}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Settings className="w-3 h-3" />
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Fuel className="w-3 h-3" />
                  <span>{car.fuelType}</span>
                </div>
              </div>
            </td>
            <td className="py-2 px-3">
              <span className={`px-2 py-0.5 rounded text-[10px] font-medium uppercase ${
                car.condition === 'new'
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-blue-500/10 text-blue-400'
              }`}>
                {car.condition}
              </span>
            </td>
            <td className="py-2 px-3 text-right">
              <p className="text-sm font-medium text-gray-300">{formatCurrency(car.price)}</p>
              <p className="text-xs text-gray-500">{formatNumber(car.mileage)} mi</p>
            </td>
            <td className="py-2 px-3 text-right">
              <button className="text-gray-400 hover:text-gray-300">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}