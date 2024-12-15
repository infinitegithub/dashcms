import React, { useState } from 'react';
import { CarCard } from './CarCard';
import { Filter, ArrowUpDown } from 'lucide-react';
import { MOCK_CARS } from '../data/mockCars';

export function Dashboard() {
  const [filter, setFilter] = useState('all');
  
  const filteredCars = MOCK_CARS.filter(car => 
    filter === 'all' ? true : car.condition === filter
  );

  return (
    <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Vehicle Inventory</h2>
          <p className="text-gray-600">Manage and monitor your dealership inventory</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
            <Filter className="w-5 h-5 text-gray-500" />
            <select 
              className="bg-transparent focus:outline-none"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Vehicles</option>
              <option value="new">New Only</option>
              <option value="used">Used Only</option>
            </select>
          </div>
          <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
            <ArrowUpDown className="w-5 h-5 text-gray-500" />
            <span>Sort</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}