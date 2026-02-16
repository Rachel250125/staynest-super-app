
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const SplitPayment: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark text-[#130e1b] dark:text-white min-h-screen font-display transition-colors duration-300">
     <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
       <button onClick={() => navigate('SHARED_EXPENSES')} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
         <span className="material-symbols-outlined">arrow_back_ios_new</span>
       </button>
       <h2 className="text-lg font-bold tracking-tight">Split the Bill</h2>
       <span className="material-symbols-outlined cursor-pointer">info</span>
     </header>
     <main className="max-w-md mx-auto pb-40 px-4 pt-8">
       <div className="text-center mb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-2">Total Outstanding</p>
          <h1 className="text-primary text-[48px] font-black tracking-tighter leading-none">$1,240.00</h1>
       </div>
      
       <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 mb-8 shadow-sm">
          <div className="flex justify-between mb-3 items-end"><span className="text-xs font-black uppercase tracking-widest opacity-40">Payment Progress</span><span className="text-primary font-black">60%</span></div>
          <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
             <div className="h-full bg-primary shadow-[0_0_10px_rgba(255,56,93,0.5)]" style={{ width: '60%' }}></div>
          </div>
       </div>

       <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 px-2 mb-4">Member Contributions</h3>
       <div className="space-y-3">
          {[
            { name: 'You', status: 'Paid', amount: '$310.00', paid: true, img: 'https://picsum.photos/100/100?profile' },
            { name: 'Sarah Jenkins', status: 'Pending', amount: '$310.00', img: 'https://picsum.photos/100/100?s1' },
            { name: 'Marcus Lee', status: 'Paid', amount: '$434.00', paid: true, img: 'https://picsum.photos/100/100?s2' }
          ].map(member => (
            <div key={member.name} className={`flex items-center justify-between p-4 bg-white dark:bg-zinc-900 rounded-2xl border transition-all ${member.name === 'You' ? 'border-primary/20 bg-primary/5' : 'border-gray-100 dark:border-gray-800'}`}>
               <div className="flex items-center gap-3">
                  <div className="size-12 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden border-2 border-white dark:border-zinc-800 shadow-sm"><img src={member.img} className="w-full h-full object-cover" alt="Member" /></div>
                  <div><p className="font-bold text-sm dark:text-white">{member.name}</p><p className={`text-[10px] font-black uppercase tracking-widest ${member.paid ? 'text-green-500' : 'text-amber-500'}`}>{member.status}</p></div>
               </div>
               <div className="text-right"><p className="text-[9px] font-black uppercase opacity-40 text-slate-500 mb-0.5">Amount</p><p className="font-black dark:text-white">{member.amount}</p></div>
            </div>
          ))}
       </div>
     </main>
     <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/95 dark:bg-background-dark/95 border-t border-gray-100 dark:border-gray-800 z-50 max-w-md mx-auto">
        <button onClick={() => navigate('CONFIRMATION')} className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-[0_15px_30px_rgba(255,56,93,0.4)] active:scale-95 transition-transform uppercase tracking-widest">Complete My Part</button>
     </div>
   </div>
 );
};

export default SplitPayment;
