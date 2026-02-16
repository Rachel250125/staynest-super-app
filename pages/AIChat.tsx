
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const AIChat: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display flex flex-col text-[#130e1b] dark:text-white">
      <header className="p-4 border-b flex items-center justify-between sticky top-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
         <button onClick={() => navigate('PLANNER')} className="p-1"><span className="material-symbols-outlined">close</span></button>
         <div className="text-center"><h2 className="font-bold">AI Trip Concierge</h2><p className="text-[10px] text-green-500 font-black uppercase">Online</p></div>
         <span className="material-symbols-outlined">more_horiz</span>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-6 pb-32">
         <div className="flex gap-4">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20"><span className="material-symbols-outlined">smart_toy</span></div>
            <div className="p-4 bg-gray-100 dark:bg-zinc-800 rounded-3xl rounded-tl-none max-w-[85%]"><p className="text-sm">Hi! I'm your AI travel partner. I've analyzed your past trips and safety preferences. Ready to plan something new?</p></div>
         </div>

         <div className="flex flex-col gap-2 items-end">
            <div className="p-4 bg-primary text-white rounded-3xl rounded-tr-none max-w-[85%] shadow-lg shadow-primary/20"><p className="text-sm font-bold">Show me something adventurous in the mountains, but make it nut-free certified.</p></div>
         </div>

         <div className="flex gap-4">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20"><span className="material-symbols-outlined">smart_toy</span></div>
            <div className="space-y-4 w-full">
               <div className="p-4 bg-gray-100 dark:bg-zinc-800 rounded-3xl rounded-tl-none max-w-[85%]"><p className="text-sm">Excellent choice! Based on your preference for high-altitude thrills, here is a Perfect Match for you:</p></div>
               <div onClick={() => navigate('DETAILS')} className="max-w-[320px] rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border shadow-2xl cursor-pointer">
                  <img src="https://picsum.photos/600/400?random=mountains" className="w-full h-40 object-cover" alt="Stay" />
                  <div className="p-5">
                     <div className="flex justify-between items-start mb-2"><h4 className="font-black text-lg">Alpine Eco-Luxe Suite</h4><span className="text-primary font-black">$249</span></div>
                     <div className="flex items-center gap-1 text-green-500 text-[10px] font-black uppercase tracking-widest"><span className="material-symbols-outlined text-sm">verified</span> Nut-Free Certified</div>
                  </div>
               </div>
            </div>
         </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 dark:bg-background-dark/95 border-t z-50">
         <div className="bg-gray-100 dark:bg-zinc-800 rounded-full px-6 py-4 flex items-center gap-4">
            <input type="text" placeholder="Tell me more..." className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-bold" />
            <button className="text-primary"><span className="material-symbols-outlined">send</span></button>
         </div>
      </div>
   </div>
 );
};

export default AIChat;
