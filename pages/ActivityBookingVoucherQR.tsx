import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const ActivityBookingVoucherQR: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display flex flex-col p-6">
      <header className="pt-12 pb-8 flex items-center justify-between">
         <button onClick={() => navigate('ACTIVITIES_DISCOVERY_PAGE')} className="size-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center active:scale-90 transition-transform">
            <span className="material-symbols-outlined">close</span>
         </button>
         <h2 className="font-black text-[10px] uppercase tracking-[0.4em] text-primary">Safe Entry Voucher</h2>
         <div className="size-11"></div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto w-full">
         <div className="w-full bg-white text-black rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)] relative">
            <div className="p-10 border-b-4 border-dashed border-gray-100 flex flex-col items-center text-center">
               <div className="bg-primary/10 text-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-primary/20">Allergy Verified</div>
               <h1 className="text-3xl font-black italic leading-none mb-1 uppercase tracking-tighter">Desert Safari</h1>
               <p className="text-xs font-bold opacity-40 uppercase tracking-[0.2em] mb-10">Premium BBQ & Dune Bashing</p>
               
               <div className="bg-gray-50 p-6 rounded-[2rem] shadow-inner mb-6">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=StayNestVoucher-12345" className="size-56" alt="QR" />
               </div>
               <p className="font-mono text-2xl font-black tracking-[0.3em] uppercase">SN-24-DEZRT</p>
            </div>

            <div className="p-10 bg-gray-50/50 flex justify-between items-center">
               <div className="text-left">
                  <p className="text-[9px] font-black uppercase opacity-30 tracking-widest">Guest</p>
                  <p className="font-bold text-sm">Alex Rivera</p>
               </div>
               <div className="text-right">
                  <p className="text-[9px] font-black uppercase opacity-30 tracking-widest">Date</p>
                  <p className="font-bold text-sm">Oct 15, 2024</p>
               </div>
            </div>
         </div>

         <div className="mt-12 flex gap-4 w-full">
            <button className="flex-1 bg-white/10 backdrop-blur-md py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-white/10 active:scale-95 transition-all">Save to Wallet</button>
            <button className="flex-1 bg-primary py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition-all">Share Voucher</button>
         </div>
      </main>
   </div>
 );
};

export default ActivityBookingVoucherQR;