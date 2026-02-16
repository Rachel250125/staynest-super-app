
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const ForumThread: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
     <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-gray-100 dark:border-zinc-800 px-4 py-3 flex items-center gap-4">
       <button onClick={() => navigate('FORUM')} className="p-2 rounded-full"><span className="material-symbols-outlined">arrow_back</span></button>
       <h2 className="text-lg font-bold flex-1 truncate">Best Nut-Free Cafes in Paris?</h2>
       <span className="material-symbols-outlined">share</span>
     </header>

     <main className="flex-1 overflow-y-auto pb-32">
       <article className="p-4 border-b border-gray-100 dark:border-zinc-800">
         <div className="flex items-start gap-4 mb-4">
           <img className="size-12 rounded-full border" src="https://picsum.photos/100/100?random=30" alt="Elena" />
           <div className="flex-1">
             <div className="flex items-center gap-2"><p className="font-bold">Elena G.</p><span className="bg-yellow-100 text-yellow-800 text-[10px] px-2 py-0.5 rounded-full uppercase">Gold</span></div>
             <p className="text-xs text-gray-500">2h ago • Paris Community</p>
           </div>
         </div>
         <p className="text-base leading-relaxed mb-4">Does anyone have recommendations for certified nut-free bakeries in Paris? I'm visiting next month and my allergy is severe.</p>
         <img className="w-full h-48 object-cover rounded-xl mb-4" src="https://picsum.photos/600/300?paris" alt="Paris" />
         <div className="flex gap-4 text-xs text-gray-500">
           <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary fill-1 text-sm">favorite</span> 24</span>
           <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">chat_bubble</span> 18</span>
         </div>
       </article>

       <section className="bg-gray-50 dark:bg-zinc-900/50 px-4 py-2 border-b border-gray-100 dark:border-zinc-800"><h4 className="text-sm font-bold">Replies</h4></section>

       {[
         { user: 'Marc R.', text: "Check out Boulangerie Safe-Sweets, they are certified nut-free! Best pain au chocolat ever.", time: '1h ago', likes: 12 },
         { user: 'Sophie T.', text: "No-Nuts Pastries in the 4th is a life-saver. Everything is safe and delicious.", time: '45m ago', likes: 8 }
       ].map((reply, i) => (
         <div key={i} className="p-4 border-b border-gray-50 dark:border-zinc-800">
           <div className="flex items-center gap-3 mb-2">
             <img className="size-8 rounded-full" src={`https://picsum.photos/50/50?random=${i+60}`} alt="User" />
             <div className="flex-1"><p className="text-sm font-bold">{reply.user}</p><p className="text-[10px] text-gray-400">{reply.time}</p></div>
           </div>
           <p className="text-sm leading-normal">{reply.text}</p>
           <div className="flex gap-6 mt-3">
             <button className="flex items-center gap-1.5 text-xs text-gray-500"><span className="material-symbols-outlined text-sm">thumb_up</span> {reply.likes}</button>
             <button className="text-xs text-gray-500 font-bold">Reply</button>
           </div>
         </div>
       ))}
     </main>

     <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800 p-4 pb-8">
       <div className="bg-gray-100 dark:bg-zinc-800 rounded-full px-5 py-2 flex items-center gap-2">
         <input className="bg-transparent border-none focus:ring-0 text-sm flex-1" placeholder="Write a reply..." />
         <button className="text-primary font-bold text-sm">Post</button>
       </div>
     </footer>
   </div>
 );
};

export default ForumThread;
