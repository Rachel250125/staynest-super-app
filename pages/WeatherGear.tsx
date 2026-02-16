
import React, { useState, useEffect } from 'react';
import { Screen } from '../types';
import { getWeatherGearTips } from '../services/geminiService';

interface Props { navigate: (s: Screen) => void; }

const WeatherGear: React.FC<Props> = ({ navigate }) => {
 const [aiData, setAiData] = useState<{tip: string, gear: any[]}>({
   tip: "Analyzing local environment for your Dubai excursion...",
   gear: [
     { t: 'Breathable Linen', s: 'For Desert Safari', i: 'checkroom' },
     { t: 'Light Jacket', s: 'For breezy evenings', i: 'apparel' }
   ]
 });
 const [loading, setLoading] = useState(true);

 useEffect(() => {
   const fetchTips = async () => {
     const data = await getWeatherGearTips("Dubai, UAE");
     if (data.tip) {
       setAiData(data);
     }
     setLoading(false);
   };
   fetchTips();
 }, []);

 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white transition-colors duration-300">
      <header className="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between sticky top-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
         <button onClick={() => navigate('PLANNER')} className="p-1"><span className="material-symbols-outlined">arrow_back_ios</span></button>
         <div className="text-center">
            <h2 className="font-bold text-sm uppercase tracking-widest">Weather & Gear</h2>
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Dubai Excursion</p>
         </div>
         <span className="material-symbols-outlined cursor-pointer">share</span>
      </header>
      <main className="max-w-md mx-auto p-4 space-y-12 pt-8 pb-32">
         <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
            {[
              { d: 'Today', i: 'wb_sunny', t: '32°', s: 'High UV' },
              { d: 'Mon', i: 'air', t: '31°', s: 'Breezy' },
              { d: 'Tue', i: 'wb_sunny', t: '33°', s: 'Clear' }
            ].map(day => (
              <div key={day.d} className="min-w-[120px] p-6 bg-white dark:bg-zinc-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center group hover:border-primary/30 transition-all cursor-pointer">
                 <p className="text-[10px] font-black opacity-30 uppercase tracking-widest mb-4">{day.d}</p>
                 <span className="material-symbols-outlined text-4xl text-orange-400 mb-3 group-hover:scale-110 transition-transform">{day.i}</span>
                 <p className="text-3xl font-black leading-none mb-1 tracking-tighter">{day.t}</p>
                 <p className="text-[9px] font-black text-primary uppercase tracking-widest mt-1">{day.s}</p>
              </div>
            ))}
         </div>

         <div className="p-6 bg-primary/5 border border-primary/20 rounded-[2.5rem] flex gap-6 items-center shadow-sm">
            <div className="size-16 rounded-[1.5rem] bg-primary text-white flex items-center justify-center shrink-0 shadow-xl shadow-primary/20">
               <span className={`material-symbols-outlined text-3xl font-black ${loading ? 'animate-spin' : ''}`}>{loading ? 'sync' : 'lightbulb'}</span>
            </div>
            <div className="min-w-0">
               <p className="font-black text-primary uppercase text-[10px] tracking-[0.2em] mb-1">Local AI Tip</p>
               <p className="text-sm opacity-80 leading-relaxed italic dark:text-gray-300">"{aiData.tip}"</p>
            </div>
         </div>

         <div className="space-y-6">
            <div className="flex justify-between items-end px-2">
               <h3 className="text-xl font-black tracking-tight uppercase">Smart Gear Tips</h3>
               <span className="text-[10px] font-black uppercase text-primary opacity-60 tracking-[0.2em]">AI Powered</span>
            </div>
            <div className="space-y-3">
               {aiData.gear.map(item => (
                 <div key={item.t} className="p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex items-center justify-between group hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                       <div className="size-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner"><span className="material-symbols-outlined font-black">{item.i}</span></div>
                       <div>
                          <p className="font-bold text-sm dark:text-white">{item.t}</p>
                          <p className="text-xs opacity-50 dark:text-gray-400 font-medium">{item.s}</p>
                       </div>
                    </div>
                    <button className="bg-primary/10 text-primary px-6 py-2.5 rounded-full font-black text-[9px] uppercase tracking-widest border border-primary/20 active:scale-95 transition-all">Add</button>
                 </div>
               ))}
            </div>
         </div>
      </main>
   </div>
 );
};

export default WeatherGear;
