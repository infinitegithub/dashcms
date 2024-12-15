import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { MOCK_CARS } from '../../data/mockCars';
import { InventoryTable } from './InventoryTable';

export function InventoryList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredCars = MOCK_CARS.filter(car => {
    const matchesSearch = 
      `${car.make} ${car.model}`.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filter === 'all' || car.condition === filter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-gray-800/50 rounded-lg border border-gray-700/50">
      <div className="p-4">
        <div className="flex gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-3.5 h-3.5" />
            <input
              type="text"
              placeholder="Search vehicles..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded focus:outline-none focus:ring-1 focus:ring-gray-500 text-gray-300 placeholder-gray-500"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select 
            className="px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            onChange={(e) => setFilter(e.target.value)}
            defaultValue="all"
          >
            <option value="all">All Vehicles</option>
            <option value="new">New Only</option>
            <option value="used">Used Only</option>
          </select>
          <button className="px-3 py-1.5 text-xs bg-gray-700/50 border border-gray-600/50 rounded text-gray-300 hover:bg-gray-600/50 flex items-center gap-2">
            <Filter className="w-3.5 h-3.5" />
            Filters
          </button>
        </div>
        <InventoryTable cars={filteredCars} />
      </div>
    </div>
  );
}