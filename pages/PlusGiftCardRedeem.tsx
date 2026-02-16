
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const PlusGiftCardRedeem: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ff385d 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="relative z-10 w-full max-w-sm">
         <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 inline-block">Received a Gift?</span>
         <h1 className="text-4xl font-black leading-none mb-4">UNLOCK THE<br/>PLUS EXPERIENCE</h1>
         <p className="opacity-50 text-sm mb-12">Enter your digital voucher code below to activate your premium membership.</p>

         <div className="w-full bg-white/5 border-2 border-dashed border-white/20 rounded-3xl p-10 mb-10 flex flex-col items-center">
            <span className="material-symbols-outlined text-6xl text-primary mb-6">redeem</span>
            <input type="text" placeholder="ENTER CODE" className="w-full bg-transparent border-none focus:ring-0 text-3xl font-mono font-black text-center placeholder:opacity-20 uppercase tracking-[0.2em]" />
         </div>

         <button onClick={() => navigate('CONFIRMATION')} className="w-full bg-white text-black py-5 rounded-2xl font-black text-lg shadow-2xl active:scale-95 transition-transform">ACTIVATE NOW</button>
         <button onClick={() => navigate('PLUS_DASHBOARD')} className="mt-8 text-xs font-bold opacity-30 uppercase tracking-widest">Buy a gift card instead</button>
      </div>
   </div>
 );
};

export default PlusGiftCardRedeem;
