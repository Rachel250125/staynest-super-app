
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const GiftPlus: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display text-slate-900 dark:text-white">
     <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 flex items-center border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate('PROFILE')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios</span></button>
        <h2 className="flex-1 text-center font-bold">Gift StayNest Plus</h2>
        <span className="material-symbols-outlined">share</span>
     </header>
     <main className="max-w-md mx-auto p-4 pb-32 overflow-y-auto no-scrollbar">
       <div className="relative h-64 rounded-2xl overflow-hidden mb-8 shadow-xl bg-cover bg-center flex flex-col justify-end p-6" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8), transparent), url('https://picsum.photos/600/400?travel')" }}>
          <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">Holiday Special</div>
          <h3 className="text-white text-3xl font-black leading-tight">Give the Gift of Premium Travel</h3>
       </div>

       <div className="grid grid-cols-3 gap-3 mb-8">
          {[ {l: '3 Months', p: '$29.99'}, {l: '6 Months', p: '$54.99', pop: true}, {l: '1 Year', p: '$99.99'} ].map(plan => (
            <div key={plan.l} className={`p-3 rounded-xl border-2 flex flex-col items-center text-center gap-1 cursor-pointer transition-all ${plan.pop ? 'border-primary bg-primary/5' : 'border-gray-100 dark:border-gray-800'}`}>
               {plan.pop && <span className="bg-primary text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase -mt-5">Popular</span>}
               <span className="material-symbols-outlined text-primary mb-1">star</span>
               <p className="text-xs font-bold">{plan.l}</p>
               <p className="text-sm font-black text-primary">{plan.p}</p>
            </div>
          ))}
       </div>

       <div className="space-y-4">
          <label className="flex flex-col gap-1">
             <span className="text-xs font-bold uppercase text-gray-400">Recipient Email</span>
             <input type="email" className="w-full h-12 border rounded-lg px-4 bg-white dark:bg-zinc-900 border-gray-100 dark:border-gray-800" placeholder="traveler@email.com" />
          </label>
          <label className="flex flex-col gap-1">
             <span className="text-xs font-bold uppercase text-gray-400">Personal Message</span>
             <textarea className="w-full border rounded-lg p-4 bg-white dark:bg-zinc-900 border-gray-100 dark:border-gray-800" rows={3} placeholder="Happy Holidays! Ready for our next adventure?"></textarea>
          </label>
       </div>
     </main>
     <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-background-dark/90 border-t border-gray-100 dark:border-gray-800 z-50">
        <button onClick={() => navigate('PROFILE')} className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-transform">Purchase Gift • $54.99</button>
     </div>
   </div>
 );
};

export default GiftPlus;
