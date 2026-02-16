
import React, { useState } from 'react';
import { Screen, UserPrefs } from '../types';
import { generateItinerary } from '../services/geminiService';

interface Props {
 prefs: UserPrefs;
 setPrefs: (p: UserPrefs) => void;
 navigate: (s: Screen) => void;
}

const AdvancedAIPlanner: React.FC<Props> = ({ prefs, setPrefs, navigate }) => {
 const [itinerary, setItinerary] = useState<any[]>([]);
 const [loading, setLoading] = useState(false);

 const handlePlan = async () => {
   setLoading(true);
   const prompt = `Plan a trip for someone using ${prefs.travelMode} transport with dietary requirements: ${prefs.dietary.join(', ')}. Focus on safety and local culture.`;
   const responseData = await generateItinerary(prompt);
   
   if (responseData && Array.isArray(responseData)) {
     setItinerary(responseData);
   }
   setLoading(false);
 };

 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-[#130e1b] dark:text-white transition-colors duration-300 min-h-screen">
     <div className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
       <div className="flex items-center p-4 pb-2 justify-between">
         <div onClick={() => navigate('HOME')} className="text-[#130e1b] dark:text-white flex size-12 shrink-0 items-center cursor-pointer">
           <span className="material-symbols-outlined">arrow_back_ios</span>
         </div>
         <div className="flex-1 text-center">
           <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">StayNest AI Planner</h2>
           <p className="text-xs text-gray-500 font-medium">Dubai Adventure • Custom</p>
         </div>
         <div className="flex w-12 items-center justify-end">
           <button className="flex size-12 cursor-pointer items-center justify-center rounded-xl bg-transparent"><span className="material-symbols-outlined">share</span></button>
         </div>
       </div>
     </div>

     <main className="max-w-md mx-auto pb-24">
       <div className="p-4 space-y-6">
         <div>
           <h3 className="text-lg font-bold mb-3">Travel Mode</h3>
           <div className="flex bg-gray-100 dark:bg-zinc-800 p-1 rounded-xl gap-1">
             {['Private', 'Metro', 'Walk'].map(mode => (
               <button
                 key={mode}
                 onClick={() => setPrefs({...prefs, travelMode: mode as any})}
                 className={`flex-1 py-2 px-3 rounded-lg text-sm font-bold transition-all ${prefs.travelMode === mode ? 'bg-primary text-white shadow-sm' : 'text-gray-500'}`}
               >
                 {mode}
               </button>
             ))}
           </div>
         </div>

         <div>
           <h3 className="text-lg font-bold mb-3">Dietary Preferences</h3>
           <div className="flex flex-wrap gap-2">
             {['Nut-Free', 'Jain', 'Vegan', 'Halal'].map(diet => (
               <div
                 key={diet}
                 onClick={() => {
                   const newDiet = prefs.dietary.includes(diet) ? prefs.dietary.filter(d => d !== diet) : [...prefs.dietary, diet];
                   setPrefs({...prefs, dietary: newDiet});
                 }}
                 className={`flex h-9 items-center justify-center gap-x-2 rounded-full border cursor-pointer pl-3 pr-4 ${prefs.dietary.includes(diet) ? 'bg-green-500/10 border-green-500/20 text-green-600' : 'border-gray-200 text-gray-500'}`}
               >
                 <span className="material-symbols-outlined text-[20px]">{prefs.dietary.includes(diet) ? 'check_circle' : 'circle'}</span>
                 <p className="text-sm font-semibold">{diet}</p>
               </div>
             ))}
           </div>
         </div>

         <button
           onClick={handlePlan}
           disabled={loading}
           className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform disabled:opacity-50"
         >
           <span className={`material-symbols-outlined ${loading ? 'animate-spin' : ''}`}>{loading ? 'sync' : 'auto_awesome'}</span>
           {loading ? 'Curating your safe spots...' : 'Generate AI Itinerary'}
         </button>
       </div>

       {itinerary.length > 0 && (
         <div className="px-4 pt-6">
           <div className="flex items-center justify-between mb-4">
             <h3 className="text-xl font-black">Day 1: Arrival & Exploration</h3>
             <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-bold uppercase">Today</span>
           </div>
           {itinerary.map((item, idx) => (
             <div key={idx} className="mb-6 relative pl-6 border-l-2 border-primary/30">
               <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-primary border-4 border-background-light dark:border-background-dark"></div>
               <div className="bg-white dark:bg-[#21192e] rounded-xl overflow-hidden shadow-sm border border-black/5 p-4">
                 <div className="flex justify-between items-start mb-2">
                   <div>
                     <h4 className="text-lg font-bold">{item.activity}</h4>
                     <p className="text-xs text-slate-500">{item.time} • {item.location}</p>
                   </div>
                   <div className="flex items-center text-green-600">
                     <span className="material-symbols-outlined text-sm">verified</span>
                     <span className="text-[10px] font-bold ml-1">SECURE</span>
                   </div>
                 </div>
                 <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 italic">"{item.reason || item.safetyNote}"</p>
                 <button onClick={() => navigate('BOOKING')} className="w-full bg-primary py-3 rounded-lg text-white font-bold text-sm tracking-wide">
                   [SECURE CHECKOUT →]
                 </button>
               </div>
             </div>
           ))}
         </div>
       )}
     </main>
   </div>
 );
};

export default AdvancedAIPlanner;
