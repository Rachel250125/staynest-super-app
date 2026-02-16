
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const Chauffeur: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-[#1d0c0f] dark:text-white min-h-screen relative overflow-hidden">
     <div className="absolute top-0 left-0 right-0 z-20 flex items-center p-4 justify-between bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
       <button onClick={() => navigate('HOME')} className="size-10 rounded-full bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center">
         <span className="material-symbols-outlined">arrow_back</span>
       </button>
       <div className="flex flex-col items-center">
          <span className="text-[10px] font-black text-primary uppercase tracking-widest">StayNest Plus</span>
          <h2 className="font-bold text-base">Chauffeur Tracking</h2>
       </div>
       <span className="material-symbols-outlined opacity-0">help</span>
     </div>

     <div className="h-[65vh] w-full bg-gray-200">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7zCWrO147mw-maFU8fa1UVUsQy1DlT85ZDdTOQFrxFWSRtINs6QLyI8Rxn8CgYEyL36cP_6DEWSloQZoSiknKcPTG15uIKeZ8ZWi4Kpu-w01Oa4tu1ay6SJppOp_H-o6y-hG80hThGpP63fjpZThfqejx1uuifxZPAUFFrdUeMZpEI9fvdSYXOIlPPc2_vUY10zlZyvuUFpaNJOxqhfSVPgp80iMO19ugPegiuCbmxyEKS2yjNen4XseXs2vLa0FfzjJUn4OluS4')" }}>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative flex items-center justify-center">
                 <div className="absolute size-12 bg-primary/20 rounded-full animate-pulse"></div>
                 <div className="z-10 bg-white dark:bg-zinc-800 p-2 rounded-lg shadow-xl border border-primary/30">
                   <span className="material-symbols-outlined text-primary text-3xl">directions_car</span>
                 </div>
              </div>
           </div>
        </div>
     </div>

     <div className="absolute bottom-0 left-0 right-0 z-30 bg-white dark:bg-background-dark rounded-t-[2rem] shadow-2xl p-6 pb-12">
       <div className="w-12 h-1 bg-gray-200 mx-auto rounded-full mb-6"></div>
       <div className="flex items-center justify-center gap-2 mb-6">
          <span className="size-2 rounded-full bg-primary animate-pulse"></span>
          <p className="text-primary font-bold text-sm">Arriving in 4 minutes</p>
       </div>
      
       <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
             <img src="https://picsum.photos/100/100?random=driver" className="size-16 rounded-2xl object-cover border-2 border-primary/10" alt="Driver" />
             <div>
               <h4 className="font-bold text-lg">Michael S.</h4>
               <p className="text-xs text-gray-500">Black Mercedes S-Class</p>
               <p className="text-[10px] font-black text-gray-400 mt-1 uppercase tracking-widest">SN-77-PLUS</p>
             </div>
          </div>
          <div className="flex gap-2">
             <button className="size-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600"><span className="material-symbols-outlined">call</span></button>
             <button className="size-12 rounded-xl bg-primary flex items-center justify-center text-white"><span className="material-symbols-outlined">chat_bubble</span></button>
          </div>
       </div>
     </div>
   </div>
 );
};

export default Chauffeur;
