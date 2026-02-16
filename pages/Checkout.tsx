
import React from 'react';
import { Screen, Activity } from '../types';

interface Props {
 activity: Activity | null;
 navigate: (s: Screen) => void;
}

const Checkout: React.FC<Props> = ({ activity, navigate }) => {
 if (!activity) return null;

 return (
   <div className="bg-background-light dark:bg-background-dark text-[#1d0c0f] dark:text-white min-h-screen flex flex-col">
     <header className="sticky top-0 z-20 bg-white/80 dark:bg-[#2d1a1d]/80 backdrop-blur-md border-b border-[#eacdd2] dark:border-[#3d2a2d]">
       <div className="flex items-center p-4 justify-between max-w-md mx-auto">
         <div onClick={() => navigate('BOOKING')} className="text-[#1d0c0f] dark:text-white flex size-10 items-center justify-start cursor-pointer">
           <span className="material-symbols-outlined">arrow_back_ios</span>
         </div>
         <h2 className="text-[#1d0c0f] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Review & Pay</h2>
       </div>
     </header>

     <main className="flex-1 max-w-md mx-auto w-full pb-40">
       <div className="bg-[#1d0c0f] dark:bg-black text-white px-4 py-2 overflow-hidden whitespace-nowrap">
         <div className="flex items-center gap-4">
           <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff385c]">Live Exchange Rates</span>
           <div className="flex items-center gap-3 text-xs font-medium">
             <span>1 USD = ₹83.75</span>
             <span className="text-[#eacdd2]/30">|</span>
             <span>1 BTC = $64,210</span>
           </div>
         </div>
       </div>

       <section className="p-4">
         <div className="bg-white dark:bg-[#2d1a1d] p-4 rounded-xl shadow-sm border border-[#eacdd2]/30 dark:border-[#3d2a2d]">
           <div className="flex items-stretch justify-between gap-4">
             <div className="flex flex-col gap-1 flex-[2_2_0px]">
               <p className="text-[#1d0c0f] dark:text-white text-lg font-bold leading-tight">{activity.title}</p>
               <p className="text-[#a14556] dark:text-[#d48c9a] text-sm font-normal">{activity.location}</p>
               <div className="mt-2 flex items-center gap-2 text-sm font-medium">
                 <span className="material-symbols-outlined text-sm">calendar_month</span>
                 <span>Oct 12 - Oct 15</span>
               </div>
             </div>
             <div className="w-24 bg-center aspect-square bg-cover rounded-lg" style={{ backgroundImage: `url(${activity.image})` }} />
           </div>
         </div>
       </section>

       <section className="px-4">
         <h3 className="text-lg font-bold pb-3">Payment Method</h3>
         <div className="space-y-3">
           {[
             { id: 'upi', label: 'UPI (Google Pay)', icon: 'contactless', sub: 'Fast & Secure via GPay', color: 'blue' },
             { id: 'crypto', label: 'Crypto (BTC/ETH)', icon: 'currency_bitcoin', sub: 'Bitcoin, Ethereum', color: 'orange', badge: 'NEW' }
           ].map((method, idx) => (
             <div key={method.id} className={`flex items-center justify-between p-4 bg-white dark:bg-[#2d1a1d] rounded-xl border ${idx === 0 ? 'border-primary/40 ring-1 ring-primary/20' : 'border-[#eacdd2] dark:border-[#3d2a2d]'} cursor-pointer`}>
               <div className="flex items-center gap-3">
                 <div className={`size-10 flex items-center justify-center bg-${method.color}-50 dark:bg-${method.color}-900/20 rounded-lg`}>
                   <span className={`material-symbols-outlined text-${method.color}-600`}>{method.icon}</span>
                 </div>
                 <div className="flex flex-col">
                   <div className="flex items-center gap-2">
                     <span className="font-bold text-sm">{method.label}</span>
                     {method.badge && <span className="bg-orange-100 dark:bg-orange-900/40 text-orange-700 text-[8px] px-1.5 py-0.5 rounded font-bold">{method.badge}</span>}
                   </div>
                   <span className="text-[10px] text-[#a14556]">{method.sub}</span>
                 </div>
               </div>
               <div className={`w-5 h-5 rounded-full border ${idx === 0 ? 'border-4 border-primary bg-white' : 'border-[#eacdd2]'}`}></div>
             </div>
           ))}
         </div>
       </section>
     </main>

     <div className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-[#2d1a1d] border-t border-[#eacdd2] p-4 flex items-center justify-between gap-4 max-w-md mx-auto">
       <div className="flex flex-col">
         <span className="text-xl font-extrabold tracking-tight">${activity.price}</span>
         <button className="text-primary text-[10px] font-bold uppercase tracking-wider underline text-left">View Detail Bill</button>
       </div>
       <button
         onClick={() => navigate('CONFIRMATION')}
         className="flex-1 bg-primary text-white text-base font-bold py-4 rounded-xl shadow-lg active:scale-95 transition-transform"
       >
         Pay Now
       </button>
     </div>
   </div>
 );
};

export default Checkout;
