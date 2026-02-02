// ChatAntiCORS.jsx - FUNCIONA SIEMPRE
import React, { useState } from 'react';

const SimpleChat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('n8n listo 💙');

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    setResponse('Enviando...');
    
    // PRUEBA 1: Proxy (React 3000 → n8n 5678)
    const urls = [
      'http://localhost:5678/webhook-test/chat',  // Proxy

    ];
    
    for (let url of urls) {
      try {
        console.log('🔄 Probando:', url);
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: input })
        });
        
        const text = await res.text();
        console.log('✅ URL OK:', url, text);
        
        let data;
        try {
          data = JSON.parse(text);
          
          console.log(data)
          setResponse(data.message|| JSON.stringify(data));
          return;
        } catch {
          setResponse('Respuesta: ' + text.slice(0, 100));
          return;
        }
      } catch (error) {
        console.log('❌ URL falló:', url, error.message);
        continue;
      }
    }
    
    setResponse('❌ Todas las URLs fallaron');
  };

  return (
    <div className="fixed bottom-8 right-8 bg-white p-6 rounded-3xl shadow-2xl border-4 border-blue-200 w-96 max-w-[90vw]">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-2xl mb-4">
        <h3 className="font-bold">AutomationMx Chat</h3>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-2xl mb-4 min-h-[100px] max-h-[200px] overflow-y-auto text-sm">
        {response}
      </div>
      
      <div className="flex gap-3">
        <input
  value={input}
  onChange={(e) => {
    console.log('Input:', e.target.value);  // DEBUG
    setInput(e.target.value);
  }}
  placeholder="Escribe AQUÍ"
  className="flex-1 p-3 border-2 border-red-300 rounded-xl text-lg"
  style={{ minHeight: '50px' }}
/>

        <button
          onClick={sendMessage}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all"
        >
          ➤
        </button>
      </div>
      
      <div className="text-xs text-gray-500 mt-2 text-center">
        Status: {input ? '🟢 En linea' : '🔄 Esperando...'}
      </div>
    </div>
  );
};

export default SimpleChat;
