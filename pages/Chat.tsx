
import React, { useState } from 'react';
import { Screen, Message } from '../types';

interface Props {
 navigate: (s: Screen) => void;
}

const Chat: React.FC<Props> = ({ navigate }) => {
 const [input, setInput] = useState('');
 const [messages, setMessages] = useState<Message[]>([
   { id: '1', sender: 'Sarah J.', text: "Hi! I saw you were looking at the Ocean View Villa. It's a great choice for families.", timestamp: '10:45 AM', isMe: false, avatar: 'https://picsum.photos/100/100?random=50' },
   { id: '2', sender: 'Me', text: "Thanks, Sarah! Does the villa have a high chair and crib available?", timestamp: '10:46 AM', isMe: true, avatar: '' }
 ]);

 const handleSend = () => {
   if (!input.trim()) return;
   setMessages([...messages, {
     id: Date.now().toString(),
     sender: 'Me',
     text: input,
     timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
     isMe: true,
     avatar: ''
   }]);
   setInput('');
 };

 return (
   <div className="relative flex h-screen w-full flex-col overflow-hidden max-w-[480px] mx-auto bg-background-light dark:bg-background-dark">
     <header className="sticky top-0 z-50 bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 p-4 pb-3 flex items-center justify-between">
       <div className="flex items-center gap-3">
         <button onClick={() => navigate('COMMUNITY')} className="p-1 -ml-2"><span className="material-symbols-outlined">arrow_back_ios_new</span></button>
         <div className="relative">
           <img className="size-10 rounded-full border" src="https://picsum.photos/100/100?random=50" alt="Sarah" />
           <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white rounded-full"></div>
         </div>
         <div><h2 className="text-base font-bold">Sarah J.</h2><p className="text-xs text-green-500">Online</p></div>
       </div>
       <span className="material-symbols-outlined">info</span>
     </header>

     <main className="flex-1 overflow-y-auto p-4 space-y-4">
       {messages.map(m => (
         <div key={m.id} className={`flex items-end gap-2 max-w-[85%] ${m.isMe ? 'justify-end ml-auto' : ''}`}>
           {!m.isMe && <img className="size-8 rounded-full border" src={m.avatar} alt="Avatar" />}
           <div className={`flex flex-col gap-1 ${m.isMe ? 'items-end' : 'items-start'}`}>
             <div className={`text-sm px-4 py-3 rounded-xl ${m.isMe ? 'bg-primary text-white rounded-br-none' : 'bg-gray-100 dark:bg-zinc-800 rounded-bl-none'}`}>
               {m.text}
             </div>
             <span className="text-[10px] text-gray-400">{m.timestamp}</span>
           </div>
         </div>
       ))}
     </main>

     <footer className="p-4 border-t border-gray-100 dark:border-zinc-800 pb-8 bg-white dark:bg-zinc-900">
       <div className="flex items-center gap-2">
         <button className="size-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-800"><span className="material-symbols-outlined">add</span></button>
         <input
           className="flex-1 h-11 bg-gray-100 dark:bg-zinc-800 border-none rounded-full px-4 text-sm focus:ring-primary"
           placeholder="Type a message..."
           value={input}
           onChange={(e) => setInput(e.target.value)}
           onKeyDown={(e) => e.key === 'Enter' && handleSend()}
         />
         <button onClick={handleSend} className="size-10 bg-primary rounded-full text-white flex items-center justify-center"><span className="material-symbols-outlined">send</span></button>
       </div>
     </footer>
   </div>
 );
};

export default Chat;
