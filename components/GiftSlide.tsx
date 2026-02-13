import React, { useState } from 'react';
import { BankTransactionDetails } from '../types';
import { RECIPIENT_NAME, TRANSACTION_AMOUNT, TRANSACTION_MSG } from '../constants';
import BankReceipt from './BankReceipt';

const GiftSlide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const transaction: BankTransactionDetails = {
    amount: TRANSACTION_AMOUNT,
    beneficiary: RECIPIENT_NAME,
    message: TRANSACTION_MSG,
    date: new Date().toLocaleString('vi-VN', { dateStyle: 'short', timeStyle: 'short' })
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-4 relative">
      {!isOpen ? (
        <div className="text-center animate-fade-in-up">
           <h2 className="text-3xl md:text-5xl font-display text-rose-600 mb-12 drop-shadow-sm">
            Anh có quà cho em nè!
          </h2>
          
          <button 
            onClick={handleOpen}
            className="group relative transition-all duration-300 transform hover:scale-110 focus:outline-none"
          >
             {/* Gift Box Icon */}
            <div className="relative">
               <div className="w-40 h-40 md:w-56 md:h-56 bg-rose-500 rounded-2xl shadow-xl flex items-center justify-center relative z-10 animate-bounce">
                  <span className="text-7xl md:text-8xl">🎁</span>
               </div>
               {/* Shadow/Glow */}
               <div className="absolute inset-0 bg-rose-400 blur-xl opacity-50 rounded-full transform scale-90 translate-y-4 group-hover:opacity-80 transition-opacity"></div>
            </div>
            
            <div className="mt-8 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md text-rose-600 font-bold text-lg border border-rose-200 group-hover:bg-rose-50 transition-colors">
              Bấm vào đây để nhận quà
            </div>
          </button>
        </div>
      ) : (
        <div className="animate-pop-in flex flex-col items-center">
          <BankReceipt details={transaction} />
          <p className="mt-8 text-rose-600 font-script text-2xl md:text-3xl text-center">
            Ting ting! Yêu em nhiều lắm! ❤️
          </p>
        </div>
      )}
    </div>
  );
};

export default GiftSlide;