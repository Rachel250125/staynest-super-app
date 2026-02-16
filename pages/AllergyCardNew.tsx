
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const AllergyCardNew: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="relative flex h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark">
     <header className="sticky top-0 z-50 flex items-center bg-white dark:bg-zinc-900 p-4 pb-2 justify-between border-b border-gray-200 dark:border-zinc-800">
       <div onClick={() => navigate('PROFILE')} className="flex size-12 shrink-0 items-center justify-start cursor-pointer"><span className="material-symbols-outlined">arrow_back_ios</span></div>
       <h2 className="text-lg font-bold flex-1 text-center">Digital Allergy Card</h2>
       <div className="flex w-12 justify-end"><span className="material-symbols-outlined">share</span></div>
     </header>

     <div className="flex-1 overflow-y-auto pb-24">
       {/* Arabic/English Warning */}
       <div className="bg-primary px-6 py-8 text-center text-white">
         <div className="mb-4 inline-flex items-center justify-center size-16 bg-white rounded-full">
           <span className="material-symbols-outlined text-primary text-4xl font-bold">warning</span>
         </div>
         <h1 className="text-2xl font-extrabold leading-tight mb-2">أعاني من حساسية شديدة</h1>
         <h2 className="text-lg font-bold opacity-90 uppercase">I HAVE A SEVERE PEANUT ALLERGY</h2>
       </div>

       {/* Specific Allergens */}
       <div className="px-4 py-6">
         <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
           <span className="material-symbols-outlined text-primary">no_food</span>
           Allergens / مسببات الحساسية
         </h3>
         <div className="grid grid-cols-2 gap-3">
           {[
             { en: 'Peanuts', ar: 'فول سوداني', icon: 'nutrition' },
             { en: 'Tree Nuts', ar: 'مكسرات', icon: 'eco' }
           ].map(item => (
             <div key={item.en} className="flex flex-col gap-3 rounded-xl border-2 border-primary/20 bg-white dark:bg-zinc-900 p-4 items-center text-center">
               <span className="material-symbols-outlined text-4xl text-primary">{item.icon}</span>
               <h2 className="text-lg font-bold leading-tight">{item.en}</h2>
               <p className="text-primary text-sm font-semibold">{item.ar}</p>
             </div>
           ))}
         </div>
       </div>

       {/* Instructions */}
       <div className="px-4 pb-6">
         <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary rounded-r-xl p-5">
           <h4 className="font-bold text-primary flex items-center gap-2 mb-2">
             <span className="material-symbols-outlined">restaurant</span>
             Chef's Note / ملاحظة للطاهي
           </h4>
           <p className="text-sm font-bold mb-2">Please use clean pans and utensils. Cross-contamination can be fatal.</p>
           <p className="text-sm font-medium leading-relaxed text-gray-700 dark:text-gray-300">
             يرجى استخدام أواني وأدوات طهي نظيفة تماماً. التلوث المتبادل قد يكون قاتلاً بالنسبة لي. شكراً لتفهمكم.
           </p>
         </div>
       </div>

       {/* Emergency Call */}
       <div className="px-4 pb-12">
         <div className="p-6 bg-red-600 rounded-2xl text-center text-white shadow-xl">
           <h3 className="text-xl font-bold mb-4">Medical Emergency</h3>
           <a href="tel:999" className="flex items-center justify-center gap-2 w-full py-4 bg-white text-red-600 rounded-full font-black text-xl">
             <span className="material-symbols-outlined">call</span> CALL 999
           </a>
         </div>
       </div>
     </div>
   </div>
 );
};

export default AllergyCardNew;
