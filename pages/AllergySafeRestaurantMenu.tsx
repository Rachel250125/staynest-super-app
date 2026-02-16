import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const AllergySafeRestaurantMenu: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white transition-colors duration-300">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
         <button onClick={() => navigate('SAFE_DINING_MAP')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
         <div className="text-center">
            <h2 className="font-black uppercase tracking-widest text-sm">Safe-Dining Verified</h2>
            <p className="text-[10px] font-black text-green-500 uppercase tracking-[0.2em]">The Green Bistro</p>
         </div>
         <span className="material-symbols-outlined text-primary cursor-pointer">favorite</span>
      </header>

      <main className="max-w-md mx-auto p-6 space-y-10 pb-32">
         <div className="p-5 bg-green-500/10 border-2 border-green-500/20 rounded-3xl flex items-center gap-5 shadow-sm">
            <div className="size-14 rounded-2xl bg-green-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-green-500/20"><span className="material-symbols-outlined text-3xl font-black">verified</span></div>
            <div>
               <h3 className="font-black text-sm uppercase tracking-widest text-green-600">Profile Match: 100%</h3>
               <p className="text-xs opacity-70 leading-tight mt-1">This kitchen is certified Nut-Free. Staff is trained on EpiPen protocols.</p>
            </div>
         </div>

         <div className="space-y-8">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter">Chef's Selection</h2>
            
            {[
               { t: 'Classic Avocado Toast', d: 'Sourdough, heirloom tomatoes, basil oil.', p: '$14', s: 'Verified Safe' },
               { t: 'Quinoa Power Bowl', d: 'Organic kale, sweet potato, citrus tahini.', p: '$18', s: 'Verified Safe' },
               { t: 'Mushroom Truffle Pasta', d: 'Wild mushrooms, truffle cream, parmesan.', p: '$22', s: 'Verified Safe' }
            ].map((item, i) => (
               <div key={i} className="flex justify-between gap-6 group cursor-pointer border-b border-gray-100 dark:border-gray-800 pb-8 last:border-0">
                  <div className="flex-1">
                     <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-black uppercase tracking-tight group-hover:text-primary transition-colors">{item.t}</h4>
                        <span className="size-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                     </div>
                     <p className="text-xs opacity-50 dark:text-gray-400 mb-3 leading-relaxed">{item.d}</p>
                     <div className="flex items-center gap-1.5 text-green-600">
                        <span className="material-symbols-outlined text-sm font-black">check_circle</span>
                        <span className="text-[10px] font-black uppercase tracking-widest">{item.s}</span>
                     </div>
                  </div>
                  <div className="text-right">
                     <p className="text-xl font-black tracking-tighter">{item.p}</p>
                     <button className="mt-4 size-10 rounded-full bg-primary/5 text-primary border border-primary/20 flex items-center justify-center active:bg-primary active:text-white transition-all shadow-sm"><span className="material-symbols-outlined">add</span></button>
                  </div>
               </div>
            ))}
         </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 dark:bg-background-dark/95 border-t border-gray-100 dark:border-gray-800 z-50 max-w-md mx-auto">
         <button onClick={() => navigate('CHECKOUT')} className="w-full bg-primary text-white py-5 rounded-[2rem] font-black text-lg shadow-2xl active:scale-95 transition-all uppercase tracking-widest flex items-center justify-center gap-3">
            Pre-order for Table <span className="material-symbols-outlined font-black">arrow_forward</span>
         </button>
      </div>
   </div>
 );
};

export default AllergySafeRestaurantMenu;