
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const CompareVersions: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-dark min-h-screen text-white font-display overflow-hidden flex flex-col">
      <header className="p-4 flex items-center justify-between border-b border-white/5">
         <button onClick={() => navigate('EDIT_HISTORY')} className="p-1"><span className="material-symbols-outlined">close</span></button>
         <h2 className="font-black text-sm uppercase tracking-[0.2em]">Compare Plan Versions</h2>
         <div className="size-10"></div>
      </header>

      <div className="flex border-b border-white/5 shrink-0">
         <div className="flex-1 p-4 text-center border-b-4 border-primary bg-primary/5">
            <p className="text-xs font-black uppercase tracking-widest opacity-50 mb-1">Version A</p>
            <p className="font-bold">CURRENT</p>
         </div>
         <div className="flex-1 p-4 text-center border-b-4 border-transparent opacity-50">
            <p className="text-xs font-black uppercase tracking-widest opacity-50 mb-1">Version B</p>
            <p className="font-bold">v2.4 Oct 12</p>
         </div>
      </div>

      <main className="flex-1 overflow-y-auto overflow-x-hidden flex">
         <div className="flex-1 border-r border-white/5 p-4 space-y-4">
            <h4 className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em] mb-4 text-center">Day 1 Changes</h4>
            <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20"><span className="text-[10px] font-black text-green-500 uppercase block mb-1">Added</span><p className="font-bold text-sm">Morning Hike: Canyon</p></div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 opacity-50"><p className="font-bold text-sm">Dinner at Nobu</p></div>
         </div>
         <div className="flex-1 p-4 space-y-4">
            <h4 className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em] mb-4 text-center">Day 1 Changes</h4>
            <div className="h-20 border-2 border-dashed border-white/10 rounded-2xl flex items-center justify-center"><p className="text-[10px] font-black opacity-20 uppercase">Empty in v2.4</p></div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5"><p className="font-bold text-sm">Dinner at Nobu</p></div>
            <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20"><span className="text-[10px] font-black text-red-500 uppercase block mb-1">Removed</span><p className="font-bold text-sm line-through">Late Night Boardwalk</p></div>
         </div>
      </main>

      <div className="p-6 bg-background-dark/95 backdrop-blur-md border-t border-white/5 flex flex-col gap-3 shrink-0">
         <button onClick={() => navigate('PLANNER')} className="w-full bg-primary py-4 rounded-2xl font-black text-lg shadow-2xl">REVERT TO VERSION B</button>
         <button onClick={() => navigate('PLANNER')} className="w-full text-white/50 text-xs font-bold uppercase tracking-widest py-2">Keep Current Version</button>
      </div>
   </div>
 );
};

export default CompareVersions;
