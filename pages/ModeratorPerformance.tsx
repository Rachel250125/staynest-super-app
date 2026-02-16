
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const ModeratorPerformance: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display">
      <header className="p-4 border-b border-white/5 flex items-center justify-between">
         <button onClick={() => navigate('HOST_DASHBOARD')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
         <h2 className="font-bold text-white">Performance Analytics</h2>
         <span className="material-symbols-outlined text-primary">analytics</span>
      </header>

      <main className="p-4 space-y-6">
         <div className="grid grid-cols-3 gap-3">
            <div className="p-4 bg-zinc-900 rounded-xl border border-white/5">
               <p className="text-[10px] font-bold opacity-50 uppercase mb-1">Resolved</p>
               <p className="text-xl font-black text-white">450</p>
               <p className="text-green-500 text-[10px] font-bold mt-1">+12%</p>
            </div>
            <div className="p-4 bg-zinc-900 rounded-xl border border-white/5">
               <p className="text-[10px] font-bold opacity-50 uppercase mb-1">Response</p>
               <p className="text-xl font-black text-white">14m</p>
               <p className="text-primary text-[10px] font-bold mt-1">-2m</p>
            </div>
            <div className="p-4 bg-zinc-900 rounded-xl border border-white/5">
               <p className="text-[10px] font-bold opacity-50 uppercase mb-1">Satisfaction</p>
               <p className="text-xl font-black text-white">98%</p>
               <p className="text-green-500 text-[10px] font-bold mt-1">↑ 1%</p>
            </div>
         </div>

         <div className="p-6 bg-zinc-900 rounded-2xl border border-white/10 h-64 flex flex-col">
            <h3 className="font-bold text-sm mb-auto text-white">Moderation Activity Trends</h3>
            <div className="flex items-end justify-between gap-2 h-32">
               {[40, 60, 85, 95, 75, 50, 90].map((h, i) => (
                 <div key={i} className="flex-1 bg-primary/20 rounded-t-sm relative" style={{ height: `${h}%` }}>
                    <div className="absolute top-0 inset-x-0 h-1 bg-primary rounded-full"></div>
                 </div>
               ))}
            </div>
            <div className="flex justify-between mt-4 text-[8px] font-black opacity-30 uppercase tracking-widest text-white">
               <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
         </div>
      </main>
   </div>
 );
};

export default ModeratorPerformance;
