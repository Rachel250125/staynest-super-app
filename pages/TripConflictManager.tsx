import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const TripConflictManager: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display overflow-x-hidden">
      <header className="p-4 pt-12 flex items-center justify-between border-b border-white/5 sticky top-0 bg-background-dark/80 backdrop-blur-md z-50">
         <button onClick={() => navigate('GROUP_HUB')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios</span></button>
         <div className="text-center">
            <h2 className="font-black text-lg leading-tight uppercase tracking-tighter">Trip Resolution</h2>
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">The Tokyo Crew • 3 Conflicts</p>
         </div>
         <span className="material-symbols-outlined cursor-pointer">help_outline</span>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-8 pb-64">
         <div className="flex border-b border-white/5 font-black text-[10px] uppercase tracking-widest opacity-40">
            {['Accommodation', 'Activities', 'Dining'].map((tab, i) => (
              <span key={tab} className={`flex-1 py-4 text-center cursor-pointer transition-all ${i === 0 ? 'text-primary opacity-100 border-b-2 border-primary' : ''}`}>{tab}</span>
            ))}
         </div>

         <div className="space-y-6">
            <div className="flex justify-between items-end px-2">
               <h3 className="text-xl font-black tracking-tight">Pending Decisions</h3>
               <span className="bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-[10px] font-black uppercase border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">Urgent</span>
            </div>
            <div className="rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl relative">
               <div className="grid grid-cols-2 gap-px bg-white/10">
                  <div className="relative aspect-[4/3]">
                     <img src="https://picsum.photos/400/400?hotel" className="size-full object-cover opacity-80" alt="V1" />
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center font-black text-2xl">A</div>
                  </div>
                  <div className="relative aspect-[4/3]">
                     <img src="https://picsum.photos/400/400?ryokan" className="size-full object-cover opacity-80" alt="V2" />
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center font-black text-2xl">B</div>
                  </div>
               </div>
               <div className="p-8">
                  <h4 className="text-2xl font-black mb-1 leading-tight uppercase tracking-tighter">Luxe Hotel vs. Traditional Ryokan</h4>
                  <p className="text-xs opacity-50 mb-8 font-medium">Voting ends in 4 hours • 4 votes total</p>
                  <div className="p-5 bg-white/5 rounded-[1.5rem] flex items-center justify-between mb-8 border border-white/5 shadow-inner">
                     <div className="flex -space-x-3">
                        <div className="size-9 rounded-full border-2 border-background-dark overflow-hidden"><img src="https://picsum.photos/100/100?u1" alt="u1"/></div>
                        <div className="size-9 rounded-full border-2 border-background-dark overflow-hidden"><img src="https://picsum.photos/100/100?u2" alt="u2"/></div>
                        <div className="size-9 rounded-full border-2 border-background-dark bg-primary flex items-center justify-center text-[10px] font-bold">+2</div>
                     </div>
                     <p className="text-xs font-bold text-primary uppercase tracking-widest">Option A winning</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                     <button className="py-4 bg-primary rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-primary/20 active:scale-95 transition-all">Vote Hotel</button>
                     <button className="py-4 bg-white/10 rounded-2xl font-black uppercase text-[10px] tracking-widest active:scale-95 transition-all">Vote Ryokan</button>
                  </div>
               </div>
            </div>
         </div>
      </main>

      <div className="fixed bottom-24 left-6 right-6 z-50 max-w-md mx-auto">
         <div className="p-6 bg-primary rounded-[2.5rem] shadow-[0_20px_50px_rgba(255,56,93,0.4)] flex flex-col gap-5 relative overflow-hidden border border-white/10">
            <div className="relative z-10 flex gap-4">
               <div className="size-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 shadow-lg border border-white/10"><span className="material-symbols-outlined text-white text-3xl font-black">auto_awesome</span></div>
               <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 mb-1">Compromise AI Suggestion</p>
                  <p className="text-sm font-bold leading-tight text-white">"Stay at the Ryokan to save budget, but book a Luxury Spa Day at the Hyatt for everyone."</p>
               </div>
            </div>
            <button className="w-full bg-white text-primary py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl relative z-10 active:scale-95 transition-transform">Apply Compromise</button>
            <div className="absolute top-[-50px] right-[-50px] size-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
         </div>
      </div>
   </div>
 );
};

export default TripConflictManager;