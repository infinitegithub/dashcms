import React from 'react';
import { FileText, CheckCircle, Clock, XCircle } from 'lucide-react';

interface StatCardProps {
  title: string;
  amount: string;
  count: number;
  countLabel: string;
  percentage: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
}

function StatCard({ title, amount, count, countLabel, percentage, trend, icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-gray-500 text-sm mb-2">{title}</h3>
          <p className="text-2xl font-semibold">{amount}</p>
        </div>
        {icon}
      </div>
      <div className="flex items-center gap-2">
        <span className={`text-sm ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {percentage}
        </span>
        <span className="text-gray-500 text-sm">
          <span className="font-semibold">{count}</span> {countLabel}
        </span>
      </div>
    </div>
  );
}

export function InvoiceStats() {
  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      <StatCard
        title="INVOICES SENT"
        amount="$559.25k"
        count={2594}
        countLabel="Invoices sent"
        percentage="+89.24%"
        trend="up"
        icon={<FileText className="w-6 h-6 text-blue-500" />}
      />
      <StatCard
        title="PAID INVOICES"
        amount="$409.66k"
        count={1654}
        countLabel="Paid by clients"
        percentage="+8.09%"
        trend="up"
        icon={<CheckCircle className="w-6 h-6 text-green-500" />}
      />
      <StatCard
        title="UNPAID INVOICES"
        amount="$136.98k"
        count={436}
        countLabel="Unpaid by clients"
        percentage="+9.01%"
        trend="down"
        icon={<Clock className="w-6 h-6 text-yellow-500" />}
      />
      <StatCard
        title="CANCELLED INVOICES"
        amount="$84.2k"
        count={182}
        countLabel="Cancelled by clients"
        percentage="+7.55%"
        trend="up"
        icon={<XCircle className="w-6 h-6 text-red-500" />}
      />
    </div>
  );
}