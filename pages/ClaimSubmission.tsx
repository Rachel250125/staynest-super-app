
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const ClaimSubmission: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-[#130e1b] dark:text-white min-h-screen">
     <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 flex items-center justify-between">
        <button onClick={() => navigate('PROFILE')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
        <h2 className="text-lg font-bold">New Medical Claim</h2>
        <span onClick={() => navigate('PROFILE')} className="text-primary font-bold text-sm cursor-pointer">Cancel</span>
     </header>

     <main className="max-w-md mx-auto px-4 pt-4 pb-32">
        <div className="mb-8">
           <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-1">Step 1 of 3</p>
           <h1 className="text-2xl font-black mb-4">Incident Details</h1>
           <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: '33%' }}></div>
           </div>
        </div>

        <div className="p-4 bg-white dark:bg-zinc-900 border rounded-xl shadow-sm mb-6 flex justify-between items-center">
           <div className="flex flex-col">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Active Policy</p>
              <p className="font-bold">#SN-882910-TRV</p>
              <p className="text-xs text-gray-500">Valid until Oct 24, 2024</p>
           </div>
           <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
        </div>

        <div className="space-y-5">
           <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">Incident Category</label>
              <div className="flex gap-2">
                 <div className="bg-primary/10 text-primary border border-primary/30 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">warning</span> Severe Allergy Incident
                 </div>
                 <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 px-4 py-2 rounded-full text-xs font-medium text-gray-500">General Medical</div>
              </div>
           </div>

           <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">Total Expense Amount</label>
              <div className="relative">
                 <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold">$</span>
                 <input type="number" placeholder="0.00" className="w-full h-14 pl-8 bg-white dark:bg-zinc-900 border rounded-xl font-black text-lg focus:ring-primary" defaultValue="450.00" />
              </div>
           </div>

           <div className="p-6 border-2 border-dashed border-gray-200 rounded-2xl bg-white/50 dark:bg-white/5 flex flex-col items-center justify-center gap-2">
              <span className="material-symbols-outlined text-4xl text-primary/50">add_a_photo</span>
              <p className="text-sm font-bold">Upload Medical Documents</p>
              <p className="text-xs text-gray-400 text-center">Receipts, prescriptions, or hospital summaries</p>
           </div>

           <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 rounded-xl flex items-start gap-3">
              <input type="checkbox" className="mt-1 rounded text-red-600" defaultChecked />
              <div className="flex flex-col">
                 <p className="text-sm font-bold text-red-800 dark:text-red-400">Emergency EpiPen Usage</p>
                 <p className="text-[10px] text-red-700/70">Expedites claim for 24-hour review.</p>
              </div>
           </div>
        </div>
     </main>

     <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-background-dark/90 border-t z-50">
        <button onClick={() => navigate('PROFILE')} className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2">
          Submit Claim <span className="material-symbols-outlined">send</span>
        </button>
     </div>
   </div>
 );
};

export default ClaimSubmission;
