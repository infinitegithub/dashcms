import React from 'react';
import { Invoice } from '../../types/invoice';

interface InvoiceTableProps {
  invoices: Invoice[];
}

export function InvoiceTable({ invoices }: InvoiceTableProps) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-200">
          <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">
            <input type="checkbox" className="rounded" />
          </th>
          <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">ID</th>
          <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">CUSTOMER</th>
          <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">EMAIL</th>
          <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">COUNTRY</th>
          <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">DATE</th>
          <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">AMOUNT</th>
          <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">PAYMENT STATUS</th>
          <th className="text-left py-4 px-4 text-sm font-medium text-gray-500">ACTION</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice) => (
          <tr key={invoice.id} className="border-b border-gray-200">
            <td className="py-4 px-4">
              <input type="checkbox" className="rounded" />
            </td>
            <td className="py-4 px-4 text-blue-600">{invoice.id}</td>
            <td className="py-4 px-4">
              <div className="flex items-center gap-3">
                <img src={invoice.customer.avatar} alt="" className="w-8 h-8 rounded-full" />
                <span>{invoice.customer.name}</span>
              </div>
            </td>
            <td className="py-4 px-4 text-gray-500">{invoice.customer.email}</td>
            <td className="py-4 px-4">{invoice.country}</td>
            <td className="py-4 px-4">{invoice.date}</td>
            <td className="py-4 px-4">{invoice.amount}</td>
            <td className="py-4 px-4">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                invoice.status === 'PAID' 
                  ? 'bg-green-100 text-green-800' 
                  : invoice.status === 'UNPAID'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {invoice.status}
              </span>
            </td>
            <td className="py-4 px-4">
              <button className="text-gray-400 hover:text-gray-600">•••</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}