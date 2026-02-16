
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const PackageCheckout: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-white font-display">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate('PACKAGE_DETAILS')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
        <h2 className="font-bold text-center flex-1">Complete Your Booking</h2>
        <div className="w-10"></div>
      </header>
      <main className="max-w-md mx-auto p-4 pb-40">
         <div className="flex flex-col gap-1 mb-8">
            <p className="text-xs font-black uppercase text-gray-500 tracking-widest">Step 3 of 4: Checkout</p>
            <div className="h-1 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mt-2"><div className="h-full bg-primary" style={{ width: '75%' }}></div></div>
         </div>

         <div className="p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm mb-8">
            <h3 className="font-black mb-1">Dubai to Paris Combo</h3>
            <p className="text-xs text-gray-500 mb-4 italic">Pullman Paris + Air France</p>
            <div className="flex justify-between items-center text-sm font-bold pt-4 border-t border-gray-50 dark:border-gray-800">
               <span>Total Amount</span>
               <span className="text-primary text-xl font-black">$2,695.50</span>
            </div>
         </div>

         <h3 className="font-black text-lg mb-4">Payment Methods</h3>
         <div className="space-y-3">
            {['EMI - Pay Monthly', 'Saved Card •••• 8829', 'Apple Pay / UPI'].map((method, i) => (
              <div key={method} className={`p-5 bg-white dark:bg-zinc-900 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${i === 0 ? 'border-primary ring-2 ring-primary/10' : 'border-gray-100 dark:border-gray-800'}`}>
                 <p className="font-bold text-sm">{method}</p>
                 <div className={`size-5 rounded-full border-2 flex items-center justify-center ${i === 0 ? 'border-primary' : 'border-gray-200'}`}>{i === 0 && <div className="size-2 bg-primary rounded-full"></div>}</div>
              </div>
            ))}
         </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/90 dark:bg-background-dark/90 border-t border-gray-100 dark:border-gray-800 z-50 max-w-md mx-auto">
         <button onClick={() => navigate('CONFIRMATION')} className="w-full bg-primary text-white py-4 rounded-xl font-black text-lg shadow-2xl active:scale-95 transition-transform">CONFIRM & PAY</button>
      </div>
   </div>
 );
};

export default PackageCheckout;
