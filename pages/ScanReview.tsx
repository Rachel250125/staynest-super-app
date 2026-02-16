
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const ScanReview: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white">
      <header className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
         <button onClick={() => navigate('SHARED_EXPENSES')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
         <h2 className="font-black text-sm uppercase tracking-widest">Scan Review</h2>
         <span className="material-symbols-outlined cursor-pointer">more_horiz</span>
      </header>
      <main className="max-w-md mx-auto p-4 space-y-8 pt-8 pb-32">
         <div className="p-5 bg-white dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl flex gap-6">
            <div className="size-32 bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700"><img src="https://picsum.photos/400/600?random=receipt" className="size-full object-cover grayscale" alt="Receipt" /></div>
            <div className="flex-1 space-y-4">
               <div><p className="text-[10px] font-black opacity-30 uppercase mb-1">Merchant</p><p className="font-bold dark:text-white">Starbucks Reserve</p></div>
               <div><p className="text-[10px] font-black opacity-30 uppercase mb-1">Total Amount</p><p className="text-xl font-black text-primary">$42.80</p></div>
            </div>
         </div>

         <div className="bg-gray-100 dark:bg-white/5 p-1 rounded-full flex mb-8 border border-gray-200 dark:border-gray-800">
            <button className="flex-1 py-3 bg-white dark:bg-primary rounded-full text-xs font-black uppercase text-primary dark:text-white shadow-sm transition-all">Split Equally</button>
            <button className="flex-1 py-3 text-xs font-black uppercase opacity-40 dark:text-white">Split by Item</button>
         </div>

         <div className="space-y-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="p-4 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <img src={`https://picsum.photos/100/100?random=${i+10}`} className="size-10 rounded-full border border-gray-200" alt="Friend" />
                    <p className="font-bold text-sm dark:text-white">{i === 1 ? 'You' : `Friend ${i}`}</p>
                 </div>
                 <p className="font-black dark:text-white">$10.70</p>
              </div>
            ))}
         </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 dark:bg-background-dark/95 border-t border-gray-100 dark:border-gray-800 z-50 max-w-md mx-auto">
         <button onClick={() => navigate('SHARED_EXPENSES')} className="w-full bg-primary py-4 rounded-xl font-black text-lg shadow-2xl shadow-primary/20 active:scale-[0.98] transition-all uppercase tracking-widest">ADD TO EXPENSES</button>
      </div>
   </div>
 );
};

export default ScanReview;
