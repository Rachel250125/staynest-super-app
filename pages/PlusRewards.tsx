
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const PlusRewards: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display">
      <header className="p-4 pt-12 flex items-center justify-between border-b border-white/5">
         <button onClick={() => navigate('PLUS_DASHBOARD')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios_new</span></button>
         <h2 className="font-black text-xs uppercase tracking-widest">StayNest Plus Rewards</h2>
         <span className="material-symbols-outlined cursor-pointer">settings</span>
      </header>
      <main className="max-w-md mx-auto p-6 space-y-12">
         <div className="p-8 rounded-[3rem] bg-zinc-900 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex justify-between items-start mb-12">
               <div><p className="text-primary text-[10px] font-black uppercase tracking-widest mb-1">Current Tier</p><div className="flex items-center gap-2 text-2xl font-black italic">Gold Member <span className="material-symbols-outlined text-yellow-400">stars</span></div></div>
               <div className="size-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-700 flex items-center justify-center text-black font-black shadow-xl"><span className="material-symbols-outlined text-3xl">workspace_premium</span></div>
            </div>
            <div className="relative z-10"><p className="text-[10px] font-black opacity-30 uppercase tracking-widest mb-1">Nest Points Balance</p><div className="flex items-baseline gap-2"><p className="text-5xl font-black">12,450</p><p className="text-primary font-black text-sm uppercase">pts</p></div></div>
            <div className="absolute top-[-100px] right-[-100px] size-64 bg-primary/10 rounded-full blur-[100px]"></div>
         </div>

         <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-4">
            <div className="flex justify-between items-end"><p className="font-black text-sm">Platinum Milestone</p><p className="text-xs text-primary font-black">2,550 pts left</p></div>
            <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-primary shadow-[0_0_20px_rgba(255,56,93,0.5)]" style={{ width: '83%' }}></div></div>
            <p className="text-[10px] opacity-30 font-bold uppercase tracking-widest text-center">Status Achieved at 15,000 pts</p>
         </div>

         <div className="grid grid-cols-2 gap-4">
            {[
              { t: 'Lounge Pass', s: 'Free Access', i: 'flight_takeoff' },
              { t: 'Hotels', s: '10% Savings', i: 'percent' },
              { t: 'Concierge', s: '24/7 Priority', i: 'support_agent' },
              { t: 'Late Stay', s: 'Until 4:00 PM', i: 'schedule' }
            ].map(perk => (
              <div key={perk.t} className="p-6 bg-white/5 border border-white/10 rounded-[2rem] aspect-square flex flex-col justify-between hover:bg-white/10 transition-all cursor-pointer group">
                 <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all"><span className="material-symbols-outlined text-2xl">{perk.i}</span></div>
                 <div><p className="font-black text-sm leading-tight mb-1">{perk.t}</p><p className="text-[10px] font-bold opacity-30 uppercase tracking-widest">{perk.s}</p></div>
              </div>
            ))}
         </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background-dark/95 backdrop-blur-md border-t border-white/5 z-50 max-w-md mx-auto">
         <button onClick={() => navigate('REWARDS_WALLET')} className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-2xl active:scale-95 transition-transform">REDEEM NEST POINTS</button>
      </div>
   </div>
 );
};

export default PlusRewards;
