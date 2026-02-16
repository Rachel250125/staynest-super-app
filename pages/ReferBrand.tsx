
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const ReferBrand: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white">
      <header className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
         <button onClick={() => navigate('PLUS_REWARDS')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios_new</span></button>
         <h2 className="font-black text-sm uppercase tracking-widest">Refer a Brand</h2>
         <span className="material-symbols-outlined cursor-pointer">info</span>
      </header>
      <main className="max-w-md mx-auto p-6 space-y-12 pt-12 pb-32">
         <div className="space-y-2 text-center"><h1 className="text-4xl font-black leading-tight italic dark:text-white">Expand our Luxury Network</h1><p className="opacity-50 text-sm dark:text-gray-400">Suggest elite perks you'd love to see as a Plus member.</p></div>

         <div className="p-8 bg-zinc-900 rounded-[2.5rem] border border-white/5 shadow-2xl text-white">
            <div className="flex justify-between items-center mb-6"><div><p className="text-xs font-black opacity-50 uppercase tracking-widest mb-1">Your Impact</p><p className="text-2xl font-black">2/5 Active</p></div><span className="material-symbols-outlined text-primary text-4xl">verified_user</span></div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-primary shadow-[0_0_15px_rgba(255,56,93,0.5)]" style={{ width: '40%' }}></div></div>
            <p className="mt-4 text-[10px] font-black text-primary uppercase tracking-[0.2em]">Next: Status Upgrade</p>
         </div>

         <div className="space-y-6">
            <div className="space-y-2"><p className="text-[10px] font-black opacity-40 uppercase tracking-widest px-2 dark:text-gray-400">Brand Identity</p><input type="text" placeholder="BRAND NAME (E.G. AMAN RESORTS)" className="w-full bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 font-black text-sm placeholder:opacity-20 shadow-sm focus:ring-2 focus:ring-primary/20 transition-all dark:text-white" /></div>
            <div className="space-y-2"><p className="text-[10px] font-black opacity-40 uppercase tracking-widest px-2 dark:text-gray-400">Category</p>
               <div className="grid grid-cols-3 gap-2">
                  {['Dining', 'Retail', 'Travel'].map((c, i) => (
                    <button key={c} className={`py-4 rounded-2xl font-black text-[10px] uppercase border transition-all ${i === 0 ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-white dark:bg-zinc-900 border-gray-100 dark:border-gray-800 opacity-40 dark:text-white'}`}>{c}</button>
                  ))}
               </div>
            </div>
            <div className="space-y-2"><p className="text-[10px] font-black opacity-40 uppercase tracking-widest px-2 dark:text-gray-400">Why Partner?</p><textarea placeholder="TELL US WHY THIS FITS STAYNEST PLUS..." rows={4} className="w-full bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-5 font-bold text-sm placeholder:opacity-20 shadow-sm resize-none focus:ring-2 focus:ring-primary/20 transition-all dark:text-white"></textarea></div>
         </div>

         <button onClick={() => navigate('PLUS_REWARDS')} className="w-full bg-primary py-5 rounded-3xl font-black text-white text-lg shadow-2xl shadow-primary/20 transition-all active:scale-[0.98] uppercase tracking-widest">SUBMIT SUGGESTION</button>
      </main>
   </div>
 );
};

export default ReferBrand;
