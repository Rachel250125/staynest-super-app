
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const HomeNav: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white">
      <div className="border-b border-[#eacdd2] dark:border-white/5">
         <div className="flex overflow-x-auto no-scrollbar px-4 gap-8 text-[10px] font-black uppercase tracking-widest opacity-60">
            {['List Property', 'myBiz', 'Wishlist', 'My Trips', 'Login'].map(item => (
              <div key={item} onClick={() => navigate(item === 'My Trips' ? 'MY_TRIPS' : 'HOME')} className="py-4 whitespace-nowrap cursor-pointer hover:text-primary transition-colors">{item}</div>
            ))}
         </div>
      </div>
      <header className="p-4 flex items-center justify-between">
         <div className="flex items-center gap-2 text-primary"><span className="material-symbols-outlined font-black text-3xl">nest_multi_room</span><h1 className="text-2xl font-black tracking-tighter italic">StayNest</h1></div>
         <button onClick={() => navigate('PLUS_DASHBOARD')} className="bg-primary/10 text-primary px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest border border-primary/20">Go Plus</button>
      </header>
      <main className="max-w-md mx-auto p-4 space-y-12 pt-8">
         <div className="space-y-4">
            <h2 className="text-5xl font-black tracking-tighter leading-none">Where to,<br/>Alex?</h2>
            <div onClick={() => navigate('SEARCH_RESULTS')} className="p-6 bg-white dark:bg-zinc-900 border-2 rounded-[2rem] shadow-2xl flex items-center gap-4 cursor-pointer hover:border-primary transition-all">
               <span className="material-symbols-outlined text-primary text-3xl">search</span>
               <p className="text-lg font-bold opacity-30">Search destinations...</p>
            </div>
         </div>
        
         <div className="grid grid-cols-2 gap-4">
            {[
              { l: 'Flights', i: 'flight' },
              { l: 'Stays', i: 'hotel' },
              { l: 'Adventures', i: 'explore' },
              { l: 'Cruises', i: 'directions_boat' }
            ].map(cat => (
              <div key={cat.l} onClick={() => navigate('SEARCH_RESULTS')} className="p-6 bg-white dark:bg-zinc-900 border rounded-[2rem] flex flex-col items-center gap-2 cursor-pointer group hover:bg-primary/5 transition-all">
                 <div className="size-14 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-lg"><span className="material-symbols-outlined text-3xl">{cat.i}</span></div>
                 <p className="font-black uppercase text-[10px] tracking-widest mt-2">{cat.l}</p>
              </div>
            ))}
         </div>
      </main>
   </div>
 );
};

export default HomeNav;
