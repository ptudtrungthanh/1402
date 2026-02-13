import React from 'react';
import { BankTransactionDetails } from '../types';

interface BankReceiptProps {
  details: BankTransactionDetails;
}

const BankReceipt: React.FC<BankReceiptProps> = ({ details }) => {
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all duration-500 hover:scale-105">
      {/* Header */}
      <div className="bg-green-500 p-6 text-center text-white relative">
        <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 shadow-lg">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold">Chuyển khoản thành công</h3>
        <p className="text-green-100 text-sm mt-1">{details.date}</p>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">
        <div className="text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wide">Số tiền chuyển</p>
          <p className="text-3xl font-extrabold text-gray-800 mt-1">{formatCurrency(details.amount)}</p>
        </div>

        <div className="border-t border-dashed border-gray-200 my-4"></div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">Người thụ hưởng</span>
            <span className="font-bold text-gray-800 text-right">{details.beneficiary}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">Ngân hàng</span>
            <span className="font-bold text-gray-800 text-right">MB BANK</span>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <p className="text-gray-500 text-xs mb-1">Nội dung chuyển khoản</p>
            <p className="font-semibold text-rose-600 italic">"{details.message}"</p>
          </div>
        </div>
      </div>
      
      {/* Footer Decoration */}
      <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
         <p className="text-xs text-gray-400">Transaction ID: LOVE-2024-FOREVER</p>
      </div>
    </div>
  );
};

export default BankReceipt;