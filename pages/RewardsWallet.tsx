
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const RewardsWallet: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display">
      <header className="p-4 pt-12 flex items-center justify-between border-b border-white/5 sticky top-0 bg-background-dark/80 backdrop-blur-md z-50">
         <button onClick={() => navigate('PLUS_REWARDS')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios</span></button>
         <h2 className="font-bold text-sm uppercase tracking-widest">Rewards Wallet</h2>
         <span className="material-symbols-outlined cursor-pointer">help_outline</span>
      </header>
      <main className="max-w-md mx-auto p-6 space-y-12">
         <div className="p-10 bg-gradient-to-br from-primary/30 to-zinc-900 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-2">Total Balance</p>
            <h1 className="text-6xl font-black tracking-tighter mb-8 leading-none">₹1,500</h1>
            <div className="bg-yellow-400 text-black px-6 py-2 rounded-full inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest shadow-lg">
               <span className="material-symbols-outlined text-sm font-black">verified</span> Verified Funds
            </div>
            <div className="absolute top-[-50px] right-[-50px] size-48 bg-primary/5 rounded-full blur-3xl"></div>
         </div>

         <div className="space-y-6">
            <div className="flex justify-between items-center px-2">
               <h3 className="font-black text-lg">Recent Transactions</h3>
               <span className="text-[10px] font-black text-primary uppercase underline">Export PDF</span>
            </div>
            {[
              { t: 'Referral Bonus', a: '+₹500', d: 'Oct 12', s: 'Complete', i: 'group_add' },
              { t: 'Hotel Cashback', a: '+₹1,000', d: 'Oct 10', s: 'Complete', i: 'payments' }
            ].map((tx, i) => (
              <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-colors cursor-pointer">
                 <div className="flex items-center gap-4">
                    <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center text-primary"><span className="material-symbols-outlined">{tx.i}</span></div>
                    <div>
                      <p className="font-bold text-sm">{tx.t}</p>
                      <p className="text-[10px] opacity-40 uppercase font-black">{tx.d} • {tx.s}</p>
                    </div>
                 </div>
                 <p className="text-xl font-black text-green-400 tracking-tight">{tx.a}</p>
              </div>
            ))}
         </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background-dark/95 backdrop-blur-md border-t border-white/5 z-50 max-w-md mx-auto">
         <button onClick={() => navigate('HOME')} className="w-full bg-primary py-5 rounded-2xl font-black text-lg shadow-2xl active:scale-95 transition-transform uppercase tracking-widest">BACK TO HOME</button>
      </div>
   </div>
 );
};

export default RewardsWallet;
