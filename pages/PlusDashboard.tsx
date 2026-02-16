
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const PlusDashboard: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display overflow-x-hidden">
      <header className="p-4 pt-12 flex items-center justify-between">
         <div className="flex items-center gap-4">
            <div className="size-14 rounded-full border-2 border-primary p-0.5 shadow-[0_0_15px_rgba(255,56,93,0.4)]">
                <img src="https://picsum.photos/200/200?random=profile" className="size-full rounded-full object-cover" alt="User" />
            </div>
            <div>
                <h1 className="text-xl font-black tracking-tight">Alex Rivera</h1>
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Platinum Member</p>
            </div>
         </div>
         <button onClick={() => navigate('PROFILE')} className="size-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
            <span className="material-symbols-outlined text-gray-400">settings</span>
         </button>
      </header>

      <main className="p-4 space-y-6 pb-32 max-w-md mx-auto">
         <div className="p-6 rounded-3xl bg-gradient-to-br from-primary via-[#ff385d] to-[#7C3AED] shadow-[0_20px_50px_rgba(255,56,93,0.3)] relative overflow-hidden group">
            <div className="absolute top-[-20%] right-[-10%] size-48 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
            <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Plus Rewards</p>
            <h2 className="text-5xl font-black mb-1 tracking-tighter">12,450</h2>
            <p className="text-xs font-black opacity-80 uppercase tracking-widest">NEST POINTS</p>
            <div className="absolute top-4 right-6 text-white/20">
                <span className="material-symbols-outlined text-6xl">stars</span>
            </div>
         </div>

         <div className="grid grid-cols-2 gap-4">
            <div onClick={() => navigate('SAVINGS_REPORT')} className="p-5 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-4 cursor-pointer hover:bg-white/10 transition-colors">
               <span className="material-symbols-outlined text-primary text-3xl">payments</span>
               <div><p className="font-bold">₹5,800 Saved</p><p className="text-[10px] opacity-40 uppercase font-black">This Month</p></div>
            </div>
            <div onClick={() => navigate('LOUNGE_PASS')} className="p-5 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-4 cursor-pointer hover:bg-white/10 transition-colors">
               <span className="material-symbols-outlined text-primary text-3xl">airplane_ticket</span>
               <div><p className="font-bold">Lounge Pass</p><p className="text-[10px] opacity-40 uppercase font-black">Available</p></div>
            </div>
         </div>

         <div className="flex justify-between items-center pt-4">
            <h3 className="font-black text-lg uppercase tracking-widest text-white/90">Exclusive Deals</h3>
            <span className="text-[10px] font-black text-primary uppercase cursor-pointer underline">View All</span>
         </div>
         <div className="space-y-4">
            {[1,2].map(i => (
              <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-xl flex group cursor-pointer hover:border-primary/30 transition-all">
                 <div className="size-32 shrink-0 overflow-hidden">
                    <img src={`https://picsum.photos/400/400?random=${i+70}`} className="size-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Deal" />
                 </div>
                 <div className="p-4 flex flex-col justify-center flex-1">
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Plus Platinum Deal</p>
                    <p className="font-bold text-sm line-clamp-1">Luxury Resort {i === 1 ? 'Maldives' : 'Swiss Alps'}</p>
                    <p className="text-primary font-black mt-2 text-lg">$240 <span className="text-[10px] text-white/40 line-through font-bold ml-1">$400</span></p>
                 </div>
              </div>
            ))}
         </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-dark/95 backdrop-blur-md border-t border-white/5 z-50 max-w-md mx-auto">
         <button onClick={() => navigate('SAVINGS_CALCULATOR')} className="w-full bg-white text-black py-4 rounded-2xl font-black shadow-xl active:scale-95 transition-transform uppercase tracking-widest text-xs">
            CALCULATE TRIP ROI
         </button>
      </div>
   </div>
 );
};

export default PlusDashboard;
