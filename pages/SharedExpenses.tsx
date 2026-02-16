
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const SharedExpenses: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white transition-colors duration-300">
      <header className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
         <button onClick={() => navigate('GROUP_HUB')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios</span></button>
         <div className="text-center"><h2 className="font-bold">Group Expenses</h2><p className="text-[10px] font-black text-primary uppercase tracking-widest">Paris Summer Trip</p></div>
         <span className="material-symbols-outlined cursor-pointer">search</span>
      </header>
      <main className="max-w-md mx-auto p-4 space-y-6 pt-8 pb-32">
         <div className="p-8 bg-zinc-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex justify-between items-center mb-8">
               <div><p className="text-xs font-black opacity-50 uppercase tracking-widest mb-1">Group Total</p><h1 className="text-4xl font-black tracking-tighter">₹45,280</h1></div>
               <div className="text-right"><p className="text-xs font-black opacity-50 uppercase tracking-widest mb-1">Your Balance</p><h2 className="text-2xl font-black text-green-400 tracking-tight">+₹1,500</h2></div>
            </div>
            <button onClick={() => navigate('SPLIT_PAYMENT')} className="w-full bg-primary py-4 rounded-2xl font-black text-sm uppercase shadow-xl relative z-10 active:scale-95 transition-transform tracking-widest">Settle Up</button>
            <div className="absolute top-[-50px] left-[-50px] size-64 bg-primary/10 rounded-full blur-3xl"></div>
         </div>

         <h3 className="font-black text-lg px-2 uppercase tracking-widest text-slate-500">Recent Billing</h3>
         <div className="space-y-3">
            {[
              { t: 'Airbnb Booking', d: 'Today • Paid by You', a: '₹25,000', s: '+₹18,750', c: 'text-green-500' },
              { t: 'Le Marais Dinner', d: 'Yesterday • Paid by Rahul', a: '₹8,400', s: '-₹2,100', c: 'text-primary' }
            ].map(item => (
              <div key={item.t} className="p-5 bg-white dark:bg-zinc-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm flex items-center justify-between group cursor-pointer hover:shadow-md transition-shadow">
                 <div className="flex-1 min-w-0"><p className="font-bold text-base dark:text-white truncate">{item.t}</p><p className="text-xs opacity-50 dark:text-gray-400">{item.d}</p></div>
                 <div className="text-right"><p className="font-black dark:text-white">{item.a}</p><p className={`text-[10px] font-black uppercase tracking-widest ${item.c}`}>{item.s}</p></div>
              </div>
            ))}
         </div>
      </main>
      <div className="fixed bottom-6 right-6 z-40 max-w-md mx-auto">
        <button onClick={() => navigate('RECEIPT_SCANNER')} className="size-16 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-3xl">add_a_photo</span>
        </button>
      </div>
   </div>
 );
};

export default SharedExpenses;
