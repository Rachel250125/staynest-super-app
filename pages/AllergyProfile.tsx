
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const AllergyProfile: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col text-[#0c1d1b] dark:text-white transition-colors duration-200">
     <header className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#cdeae7] dark:border-[#1e3a38]">
       <div className="flex items-center p-4 justify-between max-w-md mx-auto">
         <div className="flex items-center gap-3">
           <button onClick={() => navigate('PROFILE')} className="flex items-center justify-center size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/5">
             <span className="material-symbols-outlined">arrow_back_ios_new</span>
           </button>
           <h1 className="text-lg font-bold leading-tight tracking-[-0.015em]">Food & Allergy Profile</h1>
         </div>
       </div>
     </header>

     <main className="flex-1 overflow-y-auto pb-40 max-w-md mx-auto w-full">
       <div className="px-4 pt-6">
         <div className="relative">
           <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
           <input className="w-full bg-white dark:bg-[#1a2e2c] border border-[#cdeae7] dark:border-[#1e3a38] rounded-lg pl-10 pr-4 py-3 focus:ring-primary focus:border-primary" placeholder="Search other allergens..." type="text"/>
         </div>
       </div>

       <section>
         <div className="px-4 pt-8 pb-2">
           <h2 className="text-[22px] font-bold">Primary Allergies</h2>
         </div>
         <div className="grid grid-cols-2 gap-3 p-4">
           <div className="flex flex-col gap-3 rounded-lg border-2 border-primary bg-primary/5 p-4">
             <span className="material-symbols-outlined text-primary text-[28px]">nutrition</span>
             <h3 className="text-base font-bold">Nuts</h3>
             <p className="text-primary text-xs font-medium uppercase">Active</p>
           </div>
           <div className="flex flex-col gap-3 rounded-lg border border-[#cdeae7] dark:border-[#1e3a38] bg-white dark:bg-[#1a2e2c] p-4">
             <span className="material-symbols-outlined text-gray-600 dark:text-gray-300 text-[28px]">water_drop</span>
             <h3 className="text-base font-bold">Dairy</h3>
           </div>
         </div>
       </section>

       <section className="mt-4 px-4">
         <div className="bg-white dark:bg-[#1a2e2c] rounded-lg border border-[#cdeae7] dark:border-[#1e3a38] divide-y divide-[#cdeae7] dark:divide-[#1e3a38] overflow-hidden">
           <div className="p-5 flex items-center justify-between">
             <div className="flex gap-3 items-center">
               <div className="size-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600">
                 <span className="material-symbols-outlined">medical_services</span>
               </div>
               <div>
                 <p className="font-bold">EpiPen User</p>
                 <p className="text-sm text-gray-500">Always carry medication</p>
               </div>
             </div>
             <button className="w-12 h-6 bg-primary rounded-full relative transition-colors">
               <div className="size-4 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div>
             </button>
           </div>
         </div>
       </section>
     </main>

     <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 z-50">
       <button onClick={() => navigate('PROFILE')} className="w-full bg-primary text-white py-4 rounded-full font-bold text-base shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
         Save & Personalize My Trip
         <span className="material-symbols-outlined">colors_spark</span>
       </button>
     </div>
   </div>
 );
};

export default AllergyProfile;
