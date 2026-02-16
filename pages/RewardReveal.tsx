
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const RewardReveal: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark font-display text-white min-h-screen overflow-hidden flex flex-col">
     <header className="p-4 flex items-center justify-between">
       <button onClick={() => navigate('PROFILE')} className="size-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10"><span className="material-symbols-outlined">close</span></button>
       <span className="text-xs font-bold tracking-widest uppercase opacity-50">Mystery Reward</span>
       <div className="w-10"></div>
     </header>

     <main className="flex-1 flex flex-col items-center justify-center px-6">
       <h1 className="text-3xl font-extrabold text-center mb-12 drop-shadow-[0_0_15px_rgba(255,56,93,0.5)] uppercase tracking-tighter">A NEW REWARD AWAITS...</h1>

       <div className="relative group mb-12">
         <div className="absolute inset-0 scale-150 bg-primary/20 blur-[60px] rounded-full animate-pulse"></div>
         <div className="relative z-20 w-56 h-56 bg-zinc-900 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-50 grayscale contrast-125" style={{backgroundImage: "url('https://picsum.photos/400/400?mystery')"}}></div>
            <span className="material-symbols-outlined text-7xl text-primary/40 animate-bounce">lock</span>
            <div className="absolute h-[1px] w-full bg-primary/40 top-1/4 left-0"></div>
            <div className="absolute w-[1px] h-full bg-white/20 left-1/3 top-0"></div>
         </div>
       </div>

       <div className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl mb-12 backdrop-blur-md">
         <h3 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Requirements Met</h3>
         <div className="space-y-4">
           {[
             { label: '3 Solo Trips', sub: 'Adventure seeker status confirmed' },
             { label: '5 Verified Reviews', sub: 'Community trust milestone reached' }
           ].map(r => (
             <div key={r.label} className="flex gap-4 items-center">
               <div className="size-6 bg-primary rounded flex items-center justify-center shadow-md shadow-primary/20"><span className="material-symbols-outlined text-xs">check</span></div>
               <div><p className="font-bold text-sm">{r.label}</p><p className="text-[10px] opacity-60 uppercase font-black">{r.sub}</p></div>
             </div>
           ))}
         </div>
       </div>

       <button
         onClick={() => navigate('LEVEL_UP')}
         className="w-full bg-gradient-to-r from-primary to-[#ff8a9f] py-5 rounded-full font-black text-lg shadow-2xl shadow-primary/30 active:scale-95 transition-transform"
       >
         REVEAL MY REWARD
       </button>
     </main>
   </div>
 );
};

export default RewardReveal;
