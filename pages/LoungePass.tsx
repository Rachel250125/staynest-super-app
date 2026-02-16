
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const LoungePass: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display flex flex-col items-center">
      <header className="w-full p-6 flex justify-between">
         <button onClick={() => navigate('PLUS_DASHBOARD')} className="p-2"><span className="material-symbols-outlined">close</span></button>
         <h2 className="font-black text-xs uppercase tracking-widest">Digital Pass</h2>
         <div className="size-10"></div>
      </header>

      <main className="flex-1 w-full max-w-sm flex flex-col items-center justify-center p-6">
         <div className="w-full bg-primary rounded-[2.5rem] p-8 pb-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-[-50px] right-[-50px] size-48 bg-white/10 rounded-full blur-3xl"></div>
            <p className="font-black uppercase tracking-widest text-[10px] opacity-70 mb-2">StayNest Plus</p>
            <h1 className="text-3xl font-black mb-10">LOUNGE ACCESS</h1>
           
            <div className="bg-white p-6 rounded-3xl shadow-2xl flex flex-col items-center">
               <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=StayNestPass-Alex" className="size-48 mb-4" alt="QR" />
               <p className="text-black font-black uppercase text-[10px] tracking-[0.3em]">Scan at Entrance</p>
            </div>

            <div className="mt-10 pt-6 border-t border-white/20 flex justify-between items-end">
               <div><p className="text-[10px] opacity-50 uppercase font-black">Traveler</p><p className="font-bold text-lg">Alex Thompson</p></div>
               <div className="text-right"><p className="text-[10px] opacity-50 uppercase font-black">Status</p><p className="font-bold">Platinum</p></div>
            </div>
         </div>

         <div className="w-full mt-12 space-y-4">
            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
               <span className="material-symbols-outlined text-primary">wifi</span>
               <div><p className="font-bold text-sm">High-speed Wi-Fi</p><p className="text-xs opacity-50">Included for Plus members</p></div>
            </div>
         </div>
      </main>
   </div>
 );
};

export default LoungePass;
