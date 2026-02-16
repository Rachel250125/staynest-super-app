
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const SafetyCert: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-[#1d0c0f] dark:text-white min-h-screen flex flex-col transition-colors duration-300">
     <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate('HOST_DASHBOARD')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
        <h2 className="text-lg font-bold leading-tight">Safety Certification</h2>
        <div className="size-10"></div>
     </header>

     <main className="max-w-md mx-auto px-4 pt-8 pb-32 flex-1 w-full">
       <div className="flex flex-col gap-1 mb-8">
          <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-1">Step 1 of 3</p>
          <h1 className="text-3xl font-black leading-tight tracking-tighter uppercase">Allergy Safety Verification</h1>
          <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full mt-4 overflow-hidden shadow-inner">
             <div className="h-full bg-primary" style={{ width: '33%' }}></div>
          </div>
       </div>

       <div className="space-y-4 mb-12">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center gap-4 justify-between shadow-sm">
             <div className="flex items-center gap-4">
               <div className="size-12 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center"><span className="material-symbols-outlined font-black">check_circle</span></div>
               <div><p className="font-bold text-sm">Nut-Free Kitchen</p><p className="text-[10px] text-green-600 font-black uppercase tracking-widest">Verified</p></div>
             </div>
             <button className="text-[10px] font-black uppercase text-gray-400 hover:text-primary underline">Edit</button>
          </div>

          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center gap-4 justify-between shadow-sm group cursor-pointer">
             <div className="flex items-center gap-4">
               <div className="size-12 rounded-lg bg-primary/5 text-primary flex items-center justify-center"><span className="material-symbols-outlined font-black">medical_services</span></div>
               <div><p className="font-bold text-sm">Staff EpiPen Training</p><p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Needs Document</p></div>
             </div>
             <button className="bg-primary text-white px-4 py-1.5 rounded-lg text-[10px] font-black uppercase shadow-lg shadow-primary/20 active:scale-95 transition-transform">Upload</button>
          </div>
       </div>

       <div className="p-8 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl flex flex-col items-center justify-center text-center gap-3 bg-gray-50/50 dark:bg-white/5 hover:border-primary/50 transition-colors cursor-pointer group">
          <span className="material-symbols-outlined text-4xl text-gray-400 group-hover:text-primary transition-colors">video_library</span>
          <h4 className="font-bold text-sm">Property Safety Video</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-[200px]">Record a quick walkthrough of your safety features (Max 30s)</p>
          <button className="mt-2 text-primary font-black text-[10px] border-2 border-primary px-6 py-2 rounded-lg uppercase hover:bg-primary hover:text-white transition-all">Select File</button>
       </div>
     </main>

     <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 dark:bg-background-dark/95 border-t border-gray-100 dark:border-gray-800 z-50 max-w-md mx-auto">
        <button onClick={() => navigate('HOST_DASHBOARD')} className="w-full bg-primary text-white py-4 rounded-xl font-black text-lg shadow-xl active:scale-[0.98] transition-all uppercase tracking-widest">Confirm & Continue</button>
     </div>
   </div>
 );
};

export default SafetyCert;
