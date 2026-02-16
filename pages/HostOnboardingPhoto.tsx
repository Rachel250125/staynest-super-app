
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const HostOnboardingPhoto: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-[#1d0c0f] dark:text-white min-h-screen">
     <header className="p-4 flex items-center justify-between sticky top-0 bg-white dark:bg-background-dark border-b z-50">
        <button onClick={() => navigate('HOST_DASHBOARD')} className="p-1"><span className="material-symbols-outlined">arrow_back</span></button>
        <h2 className="font-bold">Add photos</h2>
        <div className="size-10"></div>
     </header>
     <main className="max-w-md mx-auto p-4 pt-8">
        <h1 className="text-2xl font-black mb-2">Add some photos of your place</h1>
        <p className="text-gray-500 mb-8">Guests love bright, clean spaces. Natural light is best.</p>
       
        <div className="aspect-[4/3] border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-4 bg-gray-50 dark:bg-white/5 cursor-pointer">
           <span className="material-symbols-outlined text-5xl text-primary/50">add_a_photo</span>
           <p className="font-bold">Select 5 or more photos</p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3">
           <div className="aspect-square rounded-xl bg-gray-100 overflow-hidden relative border">
              <img src="https://picsum.photos/400/400?random=house1" className="w-full h-full object-cover" alt="Preview" />
              <button className="absolute top-2 right-2 bg-black/40 p-1.5 rounded-full text-white"><span className="material-symbols-outlined text-xs">delete</span></button>
           </div>
           <div className="aspect-square rounded-xl border-2 border-dashed flex items-center justify-center text-gray-300"><span className="material-symbols-outlined">add</span></div>
        </div>
     </main>
     <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-background-dark/90 border-t z-50">
        <button onClick={() => navigate('HOST_PRICING')} className="w-full bg-primary text-white py-4 rounded-xl font-bold active:scale-95 transition-transform">Continue</button>
     </div>
   </div>
 );
};

export default HostOnboardingPhoto;
