
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const HostOverview: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
         <div className="flex items-center gap-4">
            <img src="https://picsum.photos/100/100?random=host2" className="size-12 rounded-full border-2 border-primary object-cover" alt="Host" />
            <div><h2 className="font-black text-lg">Alex Rivera</h2><p className="text-[10px] font-black text-primary uppercase">Premier Host</p></div>
         </div>
         <span className="material-symbols-outlined cursor-pointer">settings</span>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6 pb-32">
         <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-4">
               <span className="material-symbols-outlined text-primary text-3xl">payments</span>
               <div><p className="text-2xl font-black">$4,250</p><p className="text-[10px] font-bold opacity-40 uppercase">Earnings</p></div>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-4">
               <span className="material-symbols-outlined text-primary text-3xl">star</span>
               <div><p className="text-2xl font-black">4.92</p><p className="text-[10px] font-bold opacity-40 uppercase">Rating</p></div>
            </div>
         </div>

         <div className="p-6 bg-primary/5 border-2 border-dashed border-primary/30 rounded-3xl flex items-center justify-between gap-6 cursor-pointer" onClick={() => navigate('HOST_ONBOARDING_TYPE')}>
            <div><h3 className="font-black text-lg text-primary">New Listing</h3><p className="text-xs opacity-70">Share your safe space with our community of travelers.</p></div>
            <div className="size-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/20 shrink-0"><span className="material-symbols-outlined text-3xl">add</span></div>
         </div>

         <h3 className="font-black text-xl pt-4">Recent Stays</h3>
         <div className="space-y-3">
            {[1,2,3].map(i => (
              <div key={i} className="p-5 bg-white dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-4 cursor-pointer active:bg-gray-50 dark:active:bg-gray-800">
                 <div className="size-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-primary"><span className="material-symbols-outlined">hotel</span></div>
                 <div className="flex-1"><p className="font-bold">Guest #{i+100}</p><p className="text-[10px] opacity-50 uppercase font-black">Oct 12 - 15 • 2 nights</p></div>
                 <span className="material-symbols-outlined text-gray-300">chevron_right</span>
              </div>
            ))}
         </div>
      </main>
   </div>
 );
};

export default HostOverview;
