
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const ReceiptScanner: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-black min-h-screen text-white font-display relative overflow-hidden flex flex-col">
      <header className="p-6 pt-16 flex items-center justify-between relative z-20">
         <button onClick={() => navigate('SHARED_EXPENSES')} className="size-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20"><span className="material-symbols-outlined">close</span></button>
         <h2 className="font-black text-sm uppercase tracking-widest">Scan Receipt</h2>
         <div className="size-12"></div>
      </header>

      <main className="flex-1 relative">
         <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
            <img src="https://picsum.photos/800/1200?random=receipt2" className="size-full object-cover opacity-60" alt="Camera" />
            <div className="absolute inset-0 border-[60px] border-black/40 flex items-center justify-center">
               <div className="size-full border-4 border-dashed border-primary/60 rounded-[3rem] relative">
                  <div className="absolute top-[-4px] left-[-4px] size-12 border-t-8 border-l-8 border-primary rounded-tl-2xl"></div>
                  <div className="absolute top-[-4px] right-[-4px] size-12 border-t-8 border-r-8 border-primary rounded-tr-2xl"></div>
                  <div className="absolute bottom-[-4px] left-[-4px] size-12 border-b-8 border-l-8 border-primary rounded-bl-2xl"></div>
                  <div className="absolute bottom-[-4px] right-[-4px] size-12 border-b-8 border-r-8 border-primary rounded-br-2xl"></div>
               </div>
            </div>
            <div className="absolute bottom-32 inset-x-8 max-w-sm mx-auto"><div className="p-5 bg-white/90 backdrop-blur-3xl rounded-3xl border border-primary/30 flex items-center gap-4 text-black shadow-2xl">
               <div className="size-12 rounded-2xl bg-primary flex items-center justify-center text-white animate-pulse"><span className="material-symbols-outlined text-3xl">auto_awesome</span></div>
               <div className="flex-1"><p className="text-[10px] font-black uppercase text-primary tracking-widest mb-1">Smart Recognition</p><p className="font-bold text-sm leading-tight">Analyzing merchant and total amount...</p></div>
            </div></div>
         </div>
      </main>

      <div className="p-12 bg-black flex items-center justify-center gap-12 relative z-20">
         <button className="flex flex-col items-center gap-2 opacity-50"><span className="material-symbols-outlined text-3xl">photo_library</span><span className="text-[8px] font-black uppercase">Gallery</span></button>
         <button onClick={() => navigate('SCAN_REVIEW')} className="size-24 rounded-full border-8 border-primary/20 bg-white shadow-[0_0_50px_rgba(255,56,93,0.4)] flex items-center justify-center active:scale-90 transition-all"><div className="size-16 rounded-full bg-primary"></div></button>
         <button className="flex flex-col items-center gap-2 opacity-50"><span className="material-symbols-outlined text-3xl">flash_on</span><span className="text-[8px] font-black uppercase">Flash</span></button>
      </div>
   </div>
 );
};

export default ReceiptScanner;
