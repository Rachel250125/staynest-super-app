
import React from 'react';
import { Screen } from '../types';

interface Props { navigate: (s: Screen) => void; }

const SignupVerification: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen font-display flex flex-col items-center justify-center p-8 transition-colors duration-300">
      <div className="w-full max-w-sm space-y-12">
         <div className="text-center">
            <div className="size-20 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary mx-auto mb-8 shadow-xl border border-primary/20"><span className="material-symbols-outlined text-5xl">verified_user</span></div>
            <h1 className="text-4xl font-black tracking-tighter mb-3 dark:text-white uppercase leading-none">Check your phone</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">We've sent a 6-digit code to <br/><span className="font-black text-slate-900 dark:text-white text-base">+1 (555) 000-1234</span></p>
         </div>

         <div className="flex gap-2 justify-center">
            {[1,2,3,4,5,6].map(i => (
              <input key={i} type="text" maxLength={1} className="size-12 rounded-xl bg-gray-100 dark:bg-zinc-800 border-2 border-transparent focus:border-primary text-center text-xl font-black focus:ring-0 dark:text-white transition-all focus:scale-110" />
            ))}
         </div>

         <div className="space-y-6 pt-4">
            <button onClick={() => navigate('HOME')} className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-[0_20px_40px_rgba(255,56,93,0.3)] active:scale-95 transition-transform uppercase tracking-widest">Verify & Continue</button>
            <p className="text-center text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] cursor-pointer hover:text-primary transition-colors">Resend code in 45s</p>
         </div>
      </div>
   </div>
 );
};

export default SignupVerification;
