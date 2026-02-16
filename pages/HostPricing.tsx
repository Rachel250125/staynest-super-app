
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const HostPricing: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 flex items-center border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate('HOST_DASHBOARD')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios</span></button>
        <h2 className="flex-1 text-center font-bold">Pricing & Availability</h2>
        <div className="size-10"></div>
      </header>
      <main className="max-w-md mx-auto p-4 pt-8">
         <h1 className="text-3xl font-black mb-2">Set your nightly price</h1>
         <p className="text-gray-500 mb-12">You can change this at any time after you publish.</p>
        
         <div className="flex flex-col items-center gap-4 py-12 bg-gray-50 dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2">
               <span className="text-5xl font-black text-primary">$</span>
               <input type="number" defaultValue="145" className="w-32 text-5xl font-black bg-transparent border-none focus:ring-0 text-center" />
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest bg-white dark:bg-zinc-800 px-4 py-1 rounded-full border border-gray-100 dark:border-gray-700">USD</span>
         </div>

         <div className="mt-12 space-y-4">
            <h3 className="font-bold text-lg">Settings</h3>
            <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center justify-between">
               <div><p className="font-bold">Instant Book</p><p className="text-xs text-gray-500">Book without manual approval</p></div>
               <div className="size-6 bg-primary rounded-full flex items-center justify-center"><span className="material-symbols-outlined text-white text-xs">check</span></div>
            </div>
         </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-background-dark/90 border-t border-gray-100 dark:border-gray-800 z-50">
         <button onClick={() => navigate('SAFETY_CERT')} className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-transform">Publish Listing</button>
      </div>
   </div>
 );
};

export default HostPricing;
