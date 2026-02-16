
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const PartnerVoucher: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display p-6 flex flex-col items-center">
      <header className="w-full flex justify-between items-center mb-12">
         <button onClick={() => navigate('PROFILE')} className="p-2 bg-white/5 rounded-full"><span className="material-symbols-outlined">arrow_back</span></button>
         <h2 className="font-black uppercase tracking-[0.2em] text-xs opacity-60">Voucher</h2>
         <div className="size-10"></div>
      </header>

      <div className="w-full max-w-sm bg-white text-black rounded-3xl overflow-hidden relative shadow-2xl">
         <div className="p-8 pb-12 border-b-2 border-dashed border-gray-200">
            <div className="flex justify-between items-start mb-8">
               <div className="size-16 bg-gray-100 rounded-2xl flex items-center justify-center font-black italic text-2xl tracking-tighter">HARRODS</div>
               <span className="bg-black text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Plus Elite</span>
            </div>
            <h1 className="text-4xl font-black leading-none mb-2 tracking-tighter">15% OFF TOTAL BILL</h1>
            <p className="font-bold opacity-50 text-sm">Harrods Dining • Knightsbridge</p>
         </div>
         <div className="p-10 bg-gray-50 flex flex-col items-center">
            <div className="bg-white p-4 rounded-2xl shadow-inner mb-8 border border-gray-100">
               <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=StayNestVoucher-Harrods-15" className="size-48" alt="QR" />
            </div>
            <p className="font-mono text-2xl font-black tracking-[0.4em] mb-4 text-slate-900 uppercase">SNPLAT-2024</p>
            <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest text-slate-500">Valid until Dec 31, 2024</p>
         </div>
      </div>

      <button className="mt-12 w-full max-w-sm bg-primary text-white font-black py-4 rounded-2xl shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-2">
        <span className="material-symbols-outlined">wallet</span>
        ADD TO APPLE WALLET
      </button>
   </div>
 );
};

export default PartnerVoucher;
