
import React, { useState, useRef, useEffect } from 'react';
import { generateItinerary } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIPlanner: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: '1',
            sender: 'ai',
            text: "Hi! I'm your AI concierge. Where would you like to go for your next adventure?",
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            sender: 'user',
            text: input,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        try {
            const aiResponseText = await generateItinerary(input);
            const aiMsg: ChatMessage = {
                id: (Date.now() + 1).toString(),
                sender: 'ai',
                text: aiResponseText || "Sorry, I couldn't process that. Let's try again!",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiMsg]);
        } catch (error) {
            console.error(error);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-hidden">
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 p-4 shrink-0">
                <div className="flex items-center gap-3 max-w-lg mx-auto">
                    <div className="flex flex-col items-center flex-1">
                        <h2 className="text-[#130e1b] dark:text-[#f9f8fc] text-base font-bold leading-tight">StayNest AI Planner</h2>
                        <div className="flex items-center gap-1.5">
                            <span className="size-2 bg-green-500 rounded-full"></span>
                            <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">AI Concierge Online</span>
                        </div>
                    </div>
                </div>
            </header>

            <main ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex items-end gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                        {msg.sender === 'ai' && (
                            <div className="bg-primary/20 flex items-center justify-center aspect-square rounded-full w-10 shrink-0 border border-primary/10">
                                <span className="material-symbols-outlined text-primary text-xl">smart_toy</span>
                            </div>
                        )}
                        <div className={`flex flex-col gap-1 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                            <p className="text-[#694d99] dark:text-primary/70 text-[10px] font-semibold leading-normal mx-1">
                                {msg.sender === 'ai' ? 'StayNest AI' : 'You'}
                            </p>
                            <div className={`text-sm font-normal leading-relaxed max-w-[85%] rounded-[20px] px-4 py-3 shadow-sm ${
                                msg.sender === 'user' 
                                ? 'bg-primary text-white rounded-br-none' 
                                : 'bg-[#ece7f3] dark:bg-gray-800 text-[#130e1b] dark:text-white rounded-bl-none'
                            }`}>
                                {msg.text}
                            </div>
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex items-end gap-3">
                         <div className="bg-primary/20 flex items-center justify-center aspect-square rounded-full w-10 shrink-0">
                            <span className="material-symbols-outlined text-primary text-xl">smart_toy</span>
                        </div>
                        <div className="bg-[#ece7f3] dark:bg-gray-800 rounded-[20px] rounded-bl-none px-4 py-3 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
                        </div>
                    </div>
                )}
            </main>

            <footer className="p-4 bg-white dark:bg-[#1a0b0d] border-t border-gray-100 dark:border-gray-800 pb-10 shrink-0">
                <div className="flex items-center gap-3">
                    <button className="flex items-center justify-center size-10 shrink-0 text-gray-500 hover:text-primary">
                        <span className="material-symbols-outlined">add_circle</span>
                    </button>
                    <div className="relative flex-1">
                        <input 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            className="w-full bg-gray-100 dark:bg-white/5 border-none rounded-full px-5 py-3 text-sm focus:ring-2 focus:ring-primary/50 text-[#1d0c0f] dark:text-[#fcf8f9] placeholder-gray-500" 
                            placeholder="Type a message..." 
                            type="text"
                        />
                    </div>
                    <button 
                        onClick={handleSend}
                        className="flex items-center justify-center size-10 shrink-0 bg-primary rounded-full text-white shadow-lg active:scale-95 transition-transform"
                    >
                        <span className="material-symbols-outlined">send</span>
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default AIPlanner;
