
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const HostOnboardingType: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display text-[#1d0c0f] dark:text-white min-h-screen">
      <header className="p-4 flex items-center justify-between sticky top-0 bg-white dark:bg-background-dark border-b z-50">
        <button onClick={() => navigate('HOST_DASHBOARD')} className="p-1"><span className="material-symbols-outlined">close</span></button>
        <h2 className="font-bold">Describe your space</h2>
        <div className="size-10"></div>
     </header>
     <main className="max-w-md mx-auto p-4 pt-8">
        <h1 className="text-2xl font-black mb-8">What type of place will guests have?</h1>
        <div className="grid grid-cols-2 gap-4">
           {[
             { l: 'House', i: 'house' },
             { l: 'Apartment', i: 'apartment' },
             { l: 'Cabin', i: 'cabin' },
             { l: 'Hotel', i: 'hotel' },
             { l: 'Barn', i: 'agriculture' },
             { l: 'Luxe', i: 'stars' }
           ].map(type => (
             <div key={type.l} className="p-5 bg-white dark:bg-zinc-900 border-2 border-gray-100 dark:border-gray-800 rounded-xl hover:border-primary transition-all cursor-pointer">
                <span className="material-symbols-outlined text-3xl mb-2 text-primary">{type.i}</span>
                <p className="font-bold text-sm">{type.l}</p>
             </div>
           ))}
        </div>
     </main>
     <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-background-dark/90 border-t z-50">
        <button onClick={() => navigate('HOST_ONBOARDING_PHOTO')} className="w-full bg-primary text-white py-4 rounded-xl font-bold active:scale-95 transition-transform">Next Step</button>
     </div>
   </div>
 );
};

export default HostOnboardingType;
