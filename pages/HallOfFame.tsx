
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const HallOfFame: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display overflow-x-hidden">
      <header className="p-6 flex items-center justify-between">
         <button onClick={() => navigate('PROFILE')} className="size-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10"><span className="material-symbols-outlined">close</span></button>
         <h2 className="text-primary font-black uppercase tracking-[0.2em] text-sm">Hall of Fame</h2>
         <div className="size-12"></div>
      </header>
      <main className="flex flex-col items-center p-6 pt-0 pb-32">
         <div className="relative w-72 h-72 mb-8">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
            <img src="https://picsum.photos/400/400?award" className="w-full h-full object-contain relative z-10" alt="Trophy" />
         </div>
         <h1 className="text-3xl font-black mb-4 text-center">Inductee: Alex Rivera</h1>
         <div className="bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-12">
            <p className="text-primary font-bold text-xs uppercase tracking-widest">Traveler of the Month • Oct 2024</p>
         </div>
        
         <div className="w-full space-y-4">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 cursor-pointer hover:bg-white/10 transition-colors">
               <div className="size-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center"><span className="material-symbols-outlined font-bold">military_tech</span></div>
               <div><p className="font-bold">Lifetime Platinum Status</p><p className="text-xs opacity-50">Permanent VIP member benefits</p></div>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 cursor-pointer hover:bg-white/10 transition-colors">
               <div className="size-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center"><span className="material-symbols-outlined font-bold">account_balance_wallet</span></div>
               <div><p className="font-bold">₹25,000 Credit</p><p className="text-xs opacity-50">Added to your travel wallet</p></div>
            </div>
         </div>
         <button onClick={() => navigate('HOF_WINNERS')} className="mt-8 text-primary font-bold text-sm underline uppercase tracking-widest">View past winners</button>
      </main>
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-background-dark/80 backdrop-blur-md border-t border-white/5">
         <button onClick={() => navigate('PROFILE')} className="w-full bg-primary text-white font-black py-4 rounded-full shadow-2xl active:scale-95 transition-transform">Claim Your Rewards</button>
      </div>
   </div>
 );
};

export default HallOfFame;
