import React from 'react';
import { InvoiceStats } from './InvoiceStats';
import { InvoiceList } from './InvoiceList';

export function InvoiceDashboard() {
  return (
    <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span>Invoices</span>
          <span>›</span>
          <span className="text-gray-900">Invoice List</span>
        </div>
        <h1 className="text-2xl font-semibold">INVOICE LIST</h1>
      </div>
      
      <InvoiceStats />
      <InvoiceList />
    </div>
  );
}