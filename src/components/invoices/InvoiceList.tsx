import React, { useState } from 'react';
import { InvoiceListHeader } from './InvoiceListHeader';
import { InvoiceTable } from './InvoiceTable';
import { Invoice } from '../../types/invoice';

const MOCK_INVOICES: Invoice[] = [
  {
    id: '#VL25000351',
    customer: {
      name: 'Valentine Morin',
      email: 'euismod.enim@outlook.net',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    country: 'USA',
    date: '22 Mar, 2021 9:58 PM',
    amount: '$875',
    status: 'PAID'
  },
  {
    id: '#VL25000352',
    customer: {
      name: 'Brody Holman',
      email: 'metus@protonmail.org',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    country: 'USA',
    date: '22 May, 2021 9:58 PM',
    amount: '$875',
    status: 'UNPAID'
  }
];

export function InvoiceList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredInvoices = MOCK_INVOICES.filter(invoice => {
    const matchesSearch = 
      invoice.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.status.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = filter === 'all' || invoice.status.toLowerCase() === filter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <InvoiceListHeader 
          onSearch={setSearchQuery}
          onFilterChange={setFilter}
        />
        <InvoiceTable invoices={filteredInvoices} />
      </div>
    </div>
  );
}