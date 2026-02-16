
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const Login: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark min-h-screen flex justify-center items-center font-display">
     <div className="relative flex h-full min-h-screen w-full max-w-[430px] flex-col bg-white dark:bg-black overflow-x-hidden shadow-2xl">
       <div className="flex items-center p-4 pb-2 justify-between">
         <div onClick={() => navigate('HOME')} className="text-neutral-800 dark:text-neutral-200 flex size-12 shrink-0 items-center justify-center cursor-pointer">
           <span className="material-symbols-outlined">close</span>
         </div>
         <div className="flex-1 text-center font-semibold">Log in or sign up</div>
         <div className="size-12"></div>
       </div>
      
       <div className="px-6 pt-8 flex-1 flex flex-col">
         <h1 className="text-[28px] font-bold leading-tight pb-6">Welcome to StayNest</h1>
        
         <div className="flex flex-col gap-4 py-3">
           <label className="flex flex-col w-full">
             <p className="text-sm font-medium pb-2">Phone Number or Email</p>
             <input className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent h-14 px-4 text-base focus:ring-2 focus:ring-primary/20" placeholder="Enter your phone number or email" type="text" />
           </label>
         </div>

         <button onClick={() => navigate('HOME')} className="w-full bg-primary text-white h-12 rounded-lg font-bold mt-4 shadow-md active:scale-[0.98] transition-all">Continue</button>

         <div className="relative py-8">
           <div className="absolute inset-0 flex items-center"><div className="w-full border-t"></div></div>
           <div className="relative flex justify-center text-sm"><span className="bg-white dark:bg-black px-2 text-neutral-500">or</span></div>
         </div>

         <div className="flex flex-col gap-3">
           {['Google', 'Apple', 'Facebook'].map(social => (
             <button key={social} className="flex w-full items-center justify-between rounded-lg h-12 px-4 border border-neutral-300 dark:border-neutral-700 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors">
               <span className="material-symbols-outlined">{social === 'Apple' ? 'apple' : social === 'Google' ? 'mail' : 'groups'}</span>
               <span className="flex-1 text-center">Continue with {social}</span>
               <div className="w-6"></div>
             </button>
           ))}
         </div>

         <div className="mt-10 text-center space-y-4 pb-12">
           <button onClick={() => navigate('HOST_DASHBOARD')} className="text-primary text-sm font-bold hover:underline">Log in as a Host</button>
           <p onClick={() => navigate('FORGOT_PASSWORD')} className="text-xs text-gray-500 cursor-pointer hover:underline">Forgot Password?</p>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Login;
