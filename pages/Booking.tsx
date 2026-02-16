
import React, { useState } from 'react';
import { Screen, Activity } from '../types';

interface Props {
 activity: Activity | null;
 navigate: (s: Screen) => void;
}

const Booking: React.FC<Props> = ({ activity, navigate }) => {
 const [adults, setAdults] = useState(2);
 const [children, setChildren] = useState(0);
 const [selectedSlot, setSelectedSlot] = useState('Evening');

 if (!activity) return null;

 return (
   <div className="relative flex min-h-screen w-full flex-col max-w-[430px] mx-auto bg-white dark:bg-[#1a0b0d] shadow-2xl overflow-x-hidden pb-32">
     <div className="sticky top-0 z-20 flex items-center bg-white/80 dark:bg-[#1a0b0d]/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
       <div onClick={() => navigate('DETAILS')} className="text-[#1d0c0f] dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
         <span className="material-symbols-outlined">arrow_back_ios</span>
       </div>
       <h2 className="text-[#1d0c0f] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">Book Your Activity</h2>
     </div>

     {/* Summary Card */}
     <div className="p-4">
       <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-gray-800">
         <div className="flex flex-col gap-1 flex-[2_2_0px]">
           <div className="flex items-center gap-1">
             <span className="material-symbols-outlined text-primary text-sm">location_on</span>
             <p className="text-[#a14556] dark:text-[#e4a1ad] text-xs font-medium uppercase tracking-wider">{activity.location}</p>
           </div>
           <p className="text-[#1d0c0f] dark:text-white text-lg font-bold leading-tight">{activity.title}</p>
         </div>
         <div className="w-24 h-24 bg-center bg-no-repeat bg-cover rounded-lg shrink-0 shadow-sm" style={{ backgroundImage: `url(${activity.image})` }} />
       </div>
     </div>

     {/* Select Date */}
     <div className="px-4 pt-4">
       <h3 className="text-[#1d0c0f] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Select Date</h3>
     </div>
     <div className="flex gap-3 p-4 overflow-x-auto no-scrollbar">
       {[12, 13, 14, 15, 16].map((day, idx) => (
         <div key={day} className={`flex flex-col h-20 min-w-[64px] shrink-0 items-center justify-center gap-y-1 rounded-xl shadow-md border ${idx === 0 ? 'bg-primary text-white' : 'bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-gray-800'}`}>
           <p className={`text-xs font-medium uppercase ${idx === 0 ? 'opacity-80' : 'text-[#a14556]'}`}>Mon</p>
           <p className="text-xl font-bold">{day}</p>
           <p className="text-[10px] font-medium">Oct</p>
         </div>
       ))}
     </div>

     {/* Time Slots */}
     <div className="px-4 pt-4"><h3 className="text-[#1d0c0f] dark:text-white text-lg font-bold">Select Time Slot</h3></div>
     <div className="px-4 pt-2 space-y-3">
       {[
         { icon: 'light_mode', label: 'Morning Safari', time: '8:00 AM - 12:00 PM' },
         { icon: 'partly_cloudy_day', label: 'Evening Safari', time: '3:30 PM - 8:30 PM' }
       ].map(slot => (
         <div
           key={slot.label}
           onClick={() => setSelectedSlot(slot.label)}
           className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${selectedSlot === slot.label ? 'border-2 border-primary bg-primary/5' : 'border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-white/5'}`}
         >
           <div className="flex items-center gap-3">
             <span className="material-symbols-outlined text-primary">{slot.icon}</span>
             <div>
               <p className="font-bold">{slot.label}</p>
               <p className="text-sm text-[#a14556]">{slot.time}</p>
             </div>
           </div>
           <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedSlot === slot.label ? 'bg-primary border-primary' : 'border-gray-300'}`}>
             {selectedSlot === slot.label && <div className="w-2.5 h-2.5 rounded-full bg-white"></div>}
           </div>
         </div>
       ))}
     </div>

     {/* Guest Count */}
     <div className="px-4 pt-8"><h3 className="text-[#1d0c0f] dark:text-white text-lg font-bold">Guest Count</h3></div>
     <div className="px-4 py-2 space-y-6">
       <div className="flex items-center justify-between">
         <div><p className="font-bold">Adults</p><p className="text-sm text-[#a14556]">Ages 12 or above</p></div>
         <div className="flex items-center gap-4">
           <button onClick={() => setAdults(Math.max(1, adults-1))} className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center"><span className="material-symbols-outlined">remove</span></button>
           <span className="text-lg font-bold w-4 text-center">{adults}</span>
           <button onClick={() => setAdults(adults+1)} className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary"><span className="material-symbols-outlined">add</span></button>
         </div>
       </div>
     </div>

     <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white dark:bg-[#1a0b0d] border-t border-gray-100 dark:border-gray-800 px-6 py-4 pb-8 flex items-center justify-between z-30">
       <div className="flex flex-col">
         <p className="text-xs text-[#a14556] dark:text-[#e4a1ad] uppercase font-bold tracking-wider">Total Price</p>
         <div className="flex items-baseline gap-1">
           <span className="text-2xl font-bold">${activity.price * (adults + children)}</span>
           <span className="text-sm text-[#a14556] dark:text-[#e4a1ad]">/ {adults + children} Guests</span>
         </div>
       </div>
       <button
         onClick={() => navigate('CHECKOUT')}
         className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all"
       >
         Proceed to Pay
       </button>
     </div>
   </div>
 );
};

export default Booking;
