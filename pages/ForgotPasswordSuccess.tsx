
import React from 'react';
import { Screen } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const ForgotPasswordSuccess: React.FC<Props> = ({ navigate }) => {
 return (
   <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col items-center justify-center p-6 text-center">
     <div className="size-32 rounded-full bg-primary/10 flex items-center justify-center mb-8">
       <div className="size-24 rounded-full bg-primary flex items-center justify-center shadow-xl">
          <span className="material-symbols-outlined text-white text-5xl">mark_email_read</span>
       </div>
     </div>
     <h1 className="text-3xl font-black mb-3">Check your Email</h1>
     <p className="text-gray-500 mb-10 max-w-[300px]">We've sent a password recovery link to your inbox. Please follow the instructions.</p>
    
     <div className="w-full max-w-[430px] space-y-4">
       <button onClick={() => navigate('LOGIN')} className="w-full bg-primary text-white py-4 rounded-xl font-bold">Open Email App</button>
       <button onClick={() => navigate('LOGIN')} className="w-full border border-primary text-primary py-4 rounded-xl font-bold">Back to Login</button>
     </div>

     <div className="mt-12 text-sm text-gray-500">
        Didn't see it? <span className="text-primary font-bold underline cursor-pointer">Resend Email</span>
     </div>
   </div>
 );
};

export default ForgotPasswordSuccess;
