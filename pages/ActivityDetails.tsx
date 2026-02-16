
import React from 'react';
import { Screen, Activity } from '../types';

interface Props {
 activity: Activity | null;
 navigate: (s: Screen) => void;
}

const ActivityDetails: React.FC<Props> = ({ activity, navigate }) => {
 if (!activity) return null;

 return (
   <div className="relative flex h-auto min-h-screen w-full flex-col pb-24 group/design-root overflow-x-hidden">
     {/* Top App Bar */}
     <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/40 to-transparent">
       <button onClick={() => navigate('HOME')} className="flex size-10 items-center justify-center rounded-full bg-white/90 text-[#1d0c0f] shadow-sm">
         <span className="material-symbols-outlined">arrow_back</span>
       </button>
       <div className="flex gap-3">
         <button className="flex size-10 items-center justify-center rounded-full bg-white/90 text-[#1d0c0f] shadow-sm">
           <span className="material-symbols-outlined">share</span>
         </button>
         <button className="flex size-10 items-center justify-center rounded-full bg-white/90 text-primary shadow-sm">
           <span className="material-symbols-outlined fill-1">favorite</span>
         </button>
       </div>
     </div>

     {/* Hero Image */}
     <div className="w-full">
       <div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end min-h-80" style={{ backgroundImage: `url(${activity.image})` }} />
     </div>

     {/* Content */}
     <div className="px-4">
       <h1 className="text-[#1d0c0f] dark:text-white tracking-tight text-[28px] font-bold leading-tight pt-6">{activity.title}</h1>
       <div className="flex items-center gap-2 mt-2">
         <div className="flex items-center gap-1">
           <span className="material-symbols-outlined text-primary fill-1 text-[18px]">star</span>
           <span className="font-semibold text-sm">{activity.rating}</span>
         </div>
         <span className="text-sm text-gray-500 underline">({activity.reviews} reviews)</span>
         <span className="text-gray-300">•</span>
         <div className="flex items-center gap-1">
           <span className="material-symbols-outlined text-[#a14556] text-[18px]">location_on</span>
           <p className="text-[#a14556] text-sm font-medium underline">{activity.location}</p>
         </div>
       </div>

       {/* Highlights */}
       <div className="mt-8">
         <h3 className="text-lg font-bold mb-4">Experience Highlights</h3>
         <div className="grid grid-cols-2 gap-3">
           {[
             { icon: 'directions_car', label: 'Dune Bashing' },
             { icon: 'pets', label: 'Camel Riding' },
             { icon: 'downhill_skiing', label: 'Sandboarding' },
             { icon: 'restaurant', label: 'BBQ Dinner' }
           ].map(h => (
             <div key={h.label} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
               <div className="size-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                 <span className="material-symbols-outlined">{h.icon}</span>
               </div>
               <span className="text-sm font-medium">{h.label}</span>
             </div>
           ))}
         </div>
       </div>

       {/* Detailed Itinerary */}
       <div className="mt-10">
         <h3 className="text-lg font-bold mb-6">Detailed Itinerary</h3>
         <div className="space-y-0 relative">
           <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-200 dark:bg-white/10 ml-[7px]"></div>
           {[
             { time: '3:00 PM', title: 'Hotel Pickup', desc: 'Convenient pickup from your hotel in a luxury 4x4 Land Cruiser.' },
             { time: '4:30 PM', title: 'Dune Bashing', desc: 'Experience the adrenaline of high-speed dune driving.' }
           ].map((step, idx) => (
             <div key={step.time} className="relative pl-8 pb-8">
               <div className={`absolute left-0 top-1 size-4 rounded-full border-4 border-white dark:border-background-dark ${idx === 0 ? 'bg-primary' : 'bg-primary/40'}`}></div>
               <p className="text-sm font-bold text-primary uppercase tracking-wider mb-1">{step.time}</p>
               <h4 className="font-bold text-base mb-1">{step.title}</h4>
               <p className="text-sm text-gray-500 dark:text-gray-400">{step.desc}</p>
             </div>
           ))}
         </div>
       </div>
     </div>

     {/* Sticky Booking Bar */}
     <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-white/10 px-6 py-4 flex items-center justify-between shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
       <div className="flex flex-col">
         <div className="flex items-baseline gap-1">
           <span className="text-xl font-bold">${activity.price}</span>
           <span className="text-sm text-gray-500 font-normal">/ adult</span>
         </div>
         <button className="text-xs font-semibold text-primary underline text-left">View all prices</button>
       </div>
       <button
         onClick={() => navigate('BOOKING')}
         className="bg-primary hover:bg-[#e63254] active:scale-95 transition-all text-white px-8 h-12 rounded-lg font-bold text-base flex items-center justify-center shadow-lg shadow-primary/20"
       >
         Check Availability
       </button>
     </div>
   </div>
 );
};

export default ActivityDetails;
