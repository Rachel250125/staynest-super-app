import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const VIPEvaluation: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display flex flex-col items-center">
      <header className="w-full p-6 pt-16 flex items-center justify-between border-b border-white/5">
         <button onClick={() => navigate('PLUS_DASHBOARD')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios</span></button>
         <h2 className="font-black text-xs uppercase tracking-widest opacity-40">Service Evaluation</h2>
         <div className="size-10"></div>
      </header>

      <main className="flex-1 w-full max-w-sm flex flex-col items-center justify-center p-6 space-y-12">
         <div className="text-center"><h1 className="text-4xl font-black leading-none mb-2">HOW WAS YOUR<br/>EXPERIENCE?</h1><p className="text-xs font-black uppercase text-primary tracking-widest">StayNest Plus Meet & Greet</p></div>

         <div className="flex flex-col items-center gap-6">
            <img src="https://picsum.photos/200/200?random=staff" className="size-32 rounded-full border-4 border-primary/20 shadow-2xl" alt="Staff" />
            <div className="text-center"><h3 className="text-2xl font-black">Julian</h3><p className="opacity-50 text-sm">Professional & Punctual</p></div>
         </div>

         <div className="flex gap-2">
            {[1,2,3,4,5].map(i => (
              <span key={i} className="material-symbols-outlined text-4xl text-primary fill-1">star</span>
            ))}
         </div>

         <div className="w-full p-6 bg-white/5 border border-white/10 rounded-3xl space-y-4">
            <p className="text-[10px] font-black uppercase text-primary tracking-widest text-center">Safety Verification</p>
            <p className="text-sm opacity-70 text-center leading-relaxed">Did Julian confirm your allergen-free preferences with the lounge staff?</p>
            <div className="flex gap-2"><button className="flex-1 py-3 bg-white text-black font-black rounded-xl text-xs uppercase">Yes, fully</button><button className="flex-1 py-3 bg-white/5 text-white font-black rounded-xl text-xs uppercase border border-white/10">No</button></div>
         </div>

         <div className="w-full">
            <div className="flex justify-between items-end mb-4"><div><p className="text-[10px] font-black uppercase opacity-30">Tip Julian</p><p className="text-2xl font-black text-primary">$15.00</p></div><span className="text-[10px] font-bold opacity-30 italic">100% to your assistant</span></div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: '60%' }}></div></div>
         </div>
      </main>

      <div className="w-full p-6 pt-0 max-w-sm"><button onClick={() => navigate('PLUS_DASHBOARD')} className="w-full bg-primary py-5 rounded-2xl font-black text-lg shadow-2xl active:scale-95 transition-transform uppercase tracking-widest">Submit Evaluation</button></div>
   </div>
 );
};

export default VIPEvaluation;