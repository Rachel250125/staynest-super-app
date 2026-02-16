
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const Profile: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-[#1d0c0f] dark:text-white min-h-screen pb-32">
     <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md p-4 pb-2 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
       <div onClick={() => navigate('HOME')} className="text-[#1d0c0f] dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer"><span className="material-symbols-outlined">arrow_back_ios</span></div>
       <h2 className="text-lg font-bold flex-1 text-center">My Profile</h2>
       <div className="flex w-12 items-center justify-end"><span className="material-symbols-outlined cursor-pointer">settings</span></div>
     </header>

     <main className="max-w-md mx-auto">
       <div className="flex p-6 flex-col items-center gap-4">
         <div className="relative">
           <img className="size-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg" src="https://picsum.photos/150/150?random=profile" alt="User" />
           <div className="absolute -bottom-2 -right-2 bg-gradient-to-tr from-[#FFD700] via-[#FDB931] to-[#FFD700] text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white dark:border-background-dark flex items-center gap-1 shadow-md">
             <span className="material-symbols-outlined text-[12px]">verified</span> EXPERT
           </div>
         </div>
         <div className="text-center">
           <h2 className="text-2xl font-bold">Alex Rivera</h2>
           <p onClick={() => navigate('PLUS_DASHBOARD')} className="text-primary font-semibold flex items-center justify-center gap-1 cursor-pointer hover:underline">
             <span className="material-symbols-outlined text-sm">workspace_premium</span> Platinum Member
           </p>
         </div>
       </div>

       <div className="grid grid-cols-3 gap-3 px-4">
         {[
           { label: 'Helpful Tips', val: '500+', target: 'COMMUNITY' },
           { label: 'Countries', val: '24', target: 'STATS' },
           { label: 'Safe Spots', val: '150+', target: 'SAFE_DINING_MAP' }
         ].map(s => (
           <div key={s.label} onClick={() => navigate(s.target as Screen)} className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-4 rounded-xl text-center shadow-sm cursor-pointer hover:bg-primary/5 transition-colors">
             <p className="text-2xl font-bold">{s.val}</p>
             <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider">{s.label}</p>
           </div>
         ))}
       </div>

       <div className="p-4 mt-6">
         <div onClick={() => navigate('TRAVEL_GOALS')} className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm cursor-pointer active:scale-[0.99] transition-transform">
           <div className="flex justify-between items-end mb-3">
             <div>
               <p className="text-xs font-bold text-primary uppercase mb-1">Rank Progression</p>
               <h4 className="text-xl font-bold dark:text-white">Level 4 Traveler</h4>
             </div>
             <p className="text-sm font-bold text-primary">30%</p>
           </div>
           <div className="h-3 w-full bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
             <div className="h-full bg-primary rounded-full" style={{ width: '30%' }}></div>
           </div>
           <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">8 more badges to unlock Level 5 benefits</p>
         </div>
       </div>

       <div className="px-4 mt-6">
         <div className="flex items-center justify-between mb-4"><h3 className="text-lg font-bold">Unlocked Badges</h3><button onClick={() => navigate('LEADERBOARD')} className="text-primary text-xs font-bold hover:underline">VIEW ALL</button></div>
         <div className="grid grid-cols-3 gap-4">
           {[
             { icon: 'flight_takeoff', label: 'Flyer', color: 'from-[#ff385d] to-[#ff7b91]' },
             { icon: 'health_and_safety', label: 'Allergy Hero', color: 'from-[#4facfe] to-[#00f2fe]' },
             { icon: 'public', label: 'Globetrotter', color: 'from-[#f093fb] to-[#f5576c]' }
           ].map(b => (
             <div key={b.label} onClick={() => navigate('ULTRA_RARE_UNLOCK')} className="flex flex-col items-center gap-2 cursor-pointer group">
               <div className={`hexagon w-full aspect-square bg-gradient-to-br ${b.color} flex items-center justify-center shadow-lg group-active:scale-95 transition-transform`}>
                 <span className="material-symbols-outlined text-white text-3xl">{b.icon}</span>
               </div>
               <p className="text-[11px] font-bold text-center dark:text-gray-300">{b.label}</p>
             </div>
           ))}
         </div>
       </div>

       <div className="p-4 mt-6 space-y-3">
         <div onClick={() => navigate('ALLERGY_CARD')} className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-4 rounded-xl flex items-center justify-between cursor-pointer active:bg-primary/10 transition-colors">
           <div className="flex items-center gap-3">
             <span className="material-symbols-outlined text-primary">medical_information</span>
             <span className="font-bold dark:text-white">Digital Allergy Card</span>
           </div>
           <span className="material-symbols-outlined text-gray-400">chevron_right</span>
         </div>
         <div onClick={() => navigate('DOCUMENTS_VAULT')} className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-xl flex items-center justify-between cursor-pointer active:bg-blue-100 dark:active:bg-blue-900/30 transition-colors">
           <div className="flex items-center gap-3">
             <span className="material-symbols-outlined text-blue-500">shield_person</span>
             <span className="font-bold text-blue-700 dark:text-blue-300">Documents Vault</span>
           </div>
           <span className="material-symbols-outlined text-blue-400">chevron_right</span>
         </div>
         <div onClick={() => navigate('REWARD_REVEAL')} className="bg-[#A855F7]/5 dark:bg-[#A855F7]/10 border border-[#A855F7]/20 p-4 rounded-xl flex items-center justify-between cursor-pointer active:bg-[#A855F7]/10 transition-colors">
           <div className="flex items-center gap-3">
             <span className="material-symbols-outlined text-[#A855F7]">auto_awesome</span>
             <span className="font-bold text-[#A855F7]">Mystery Reward Awaits</span>
           </div>
           <span className="material-symbols-outlined text-[#A855F7]/40">chevron_right</span>
         </div>
       </div>
     </main>
   </div>
 );
};

export default Profile;
