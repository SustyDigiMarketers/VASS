import React, { useState, useEffect, useRef } from 'react';
import { ChatBubbleIcon, XIcon, SendIcon, ProfileIcon } from './IconComponents';

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setTimeout(() => {
                setMessages([
                    { text: 'Hello! How can we help you today?', sender: 'bot' }
                ]);
            }, 300);
        }
    }, [isOpen, messages.length]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const getBotResponse = (userInput: string): string => {
        const lowerInput = userInput.toLowerCase();
        if (lowerInput.includes('hims')) {
            return 'Our HIMS suite is a complete hospital management system. You can find more details on our product page. Would you like a demo?';
        }
        if (lowerInput.includes('hrms') || lowerInput.includes('analytics')) {
            return 'VASS HealthAnalytics provides Big Data-driven insights for healthcare management. We can schedule a call to discuss it further.';
        }
        if (lowerInput.includes('price') || lowerInput.includes('cost')) {
            return 'For pricing details, please get in touch with our sales team through the contact page. Can I help you with anything else?';
        }
        if (lowerInput.includes('contact') || lowerInput.includes('phone')) {
            return 'You can reach us at info@vasssoftwares.com or call us at +91 98765 43210. Our office is in Chennai.';
        }
        if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
            return 'Hello! How may I assist you today?';
        }
        return 'Thank you for your message. One of our representatives will be with you shortly. In the meantime, could you please provide your email address?';
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;

        const userMessage: Message = { text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        setTimeout(() => {
            const botResponseText = getBotResponse(inputValue);
            const botMessage: Message = { text: botResponseText, sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);
        }, 1000);
    };

    return (
        <>
            <div className="fixed bottom-5 right-5 z-50">
                <button
                    onClick={toggleChat}
                    className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    aria-label="Toggle chat"
                >
                    {isOpen ? <XIcon className="h-6 w-6" /> : <ChatBubbleIcon className="h-6 w-6" />}
                </button>
            </div>

            <div
                className={`fixed bottom-24 right-5 z-50 w-80 md:w-96 bg-white rounded-lg shadow-2xl transition-all duration-300 ease-in-out origin-bottom-right ${
                    isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
            >
                {/* Header */}
                <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
                    <h3 className="font-bold text-lg">VASS Support</h3>
                    <button onClick={toggleChat} className="text-white hover:text-indigo-100">
                        <XIcon className="h-5 w-5" />
                    </button>
                </div>

                {/* Messages */}
                <div className="h-80 p-4 overflow-y-auto bg-gray-50">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-end gap-2 mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.sender === 'bot' && (
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <ProfileIcon className="w-5 h-5 text-primary" />
                                </div>
                            )}
                            <div
                                className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
                                    msg.sender === 'user'
                                        ? 'bg-primary text-white rounded-br-none'
                                        : 'bg-white text-dark rounded-bl-none border border-gray-200'
                                }`}
                            >
                                <p className="text-sm">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
                    <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type a message..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-primary focus:border-primary text-sm text-dark"
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            aria-label="Send message"
                        >
                            <SendIcon className="h-5 w-5" />
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ChatWidget;
