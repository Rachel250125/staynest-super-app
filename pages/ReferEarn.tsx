
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const ReferEarn: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display">
      <header className="p-6 pt-16 flex items-center justify-between">
         <button onClick={() => navigate('PROFILE')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios</span></button>
         <h2 className="font-black text-xs uppercase tracking-widest opacity-40">Refer & Earn</h2>
         <span className="material-symbols-outlined cursor-pointer">help_outline</span>
      </header>
      <main className="max-w-md mx-auto p-6 space-y-12">
         <div className="relative h-64 rounded-[3rem] overflow-hidden shadow-2xl"><img src="https://picsum.photos/600/600?random=refer" className="size-full object-cover" alt="Refer" /><div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent flex flex-col justify-end p-8"><h1 className="text-3xl font-black italic leading-none uppercase">ADVENTURE IS BETTER TOGETHER</h1></div></div>
        
         <div className="text-center px-4"><p className="text-xl font-bold text-white/90">Refer a friend and you both get <span className="text-primary font-black">₹500</span> in credits.</p></div>

         <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] flex flex-col items-center gap-6 shadow-2xl">
            <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em]">Your Referral Code</p>
            <div className="bg-white/5 border-2 border-dashed border-primary/40 rounded-2xl w-full p-5 flex justify-between items-center"><span className="font-mono text-xl font-black text-primary tracking-widest uppercase">ADVENTURE2024</span><span className="material-symbols-outlined text-primary cursor-pointer active:scale-90 transition-transform">content_copy</span></div>
         </div>

         <div className="space-y-4">
            <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-2xl shadow-primary/20 active:scale-95 transition-transform uppercase tracking-widest">SHARE LINK</button>
            <div className="flex justify-around py-4 opacity-40">
               {['chat', 'send', 'sms', 'more_horiz'].map(i => (
                 <span key={i} className="material-symbols-outlined text-3xl cursor-pointer hover:opacity-100 transition-opacity">{i}</span>
               ))}
            </div>
         </div>
      </main>
   </div>
 );
};

export default ReferEarn;
