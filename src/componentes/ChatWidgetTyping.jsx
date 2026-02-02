// ChatWidgetTyping.jsx
import React, { useState, useRef, useEffect } from 'react';

const ChatWidgetTyping = () => {
  const [messages, setMessages] = useState([
    { text: "¡Hola! Escribe para empezar 💙", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [showTyping, setShowTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  const webhookUrl = 'http://localhost:5678/webhook/chat';

  // 🎯 TYPING EFFECT
  useEffect(() => {
    if (!showTyping || typingText.length === 0) return;
    
    const interval = setInterval(() => {
      setTypingText(prev => {
        if (prev.length >= messages[messages.length - 1]?.fullText.length) {
          clearInterval(interval);
          setShowTyping(false);
          return prev;
        }
        return prev + messages[messages.length - 1]?.fullText[prev.length];
      });
    }, 30); // Velocidad: 30ms por letra

    return () => clearInterval(interval);
  }, [showTyping, typingText]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { text: input, isUser: true };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });

      const text = await response.text();
      const data = JSON.parse(text);
      
      // 🎯 Agrega mensaje AI con texto COMPLETO (invisible)
      const aiMsg = { 
        text: '', 
        fullText: data.output || data.message || 'Respuesta vacía',
        isUser: false 
      };
      setMessages(prev => [...prev, aiMsg]);
      
      // Inicia typing effect
      setTypingText('');
      setShowTyping(true);
      
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: `❌ ${error.message}`, 
        isUser: false 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typingText]);

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-3xl shadow-2xl border border-blue-200 flex flex-col z-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-t-3xl text-white">
        <h3 className="font-bold text-lg">🤖 Chat n8n</h3>
      </div>

      {/* Mensajes */}
      <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-blue-50/50 to-white space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
              msg.isUser 
                ? 'bg-blue-500 text-white' 
                : 'bg-white border border-blue-200'
            }`}>
              {msg.isUser ? (
                msg.text
              ) : typingText !== '' && i === messages.length - 1 ? (
                // 🎯 Typing effect - SOLO último mensaje
                <span className="animate-pulse">{typingText}<span className="animate-blink">|</span></span>
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-blue-200 p-4 rounded-2xl flex space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0s'}} />
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-blue-100">
        <div className="flex gap-3">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && sendMessage()}
            placeholder="Escribe mensaje..."
            className="flex-1 p-3 border border-blue-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
            className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl shadow-lg flex items-center justify-center disabled:opacity-50"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidgetTyping;
