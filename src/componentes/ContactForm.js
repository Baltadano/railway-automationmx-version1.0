// ContactForm.js
import React from 'react';

export default function ContactForm({id}) {
   
  return (
    <div>
     
    <section id={id} className="min-h-[500px] flex items-center justify-center bg-blue-50 bg-opacity-60">
        
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg animate-fade-in">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Contáctanos</h2>
        <input type="text" placeholder="Nombre" className="mb-4 w-full px-4 py-2 border rounded" />
        <input type="email" placeholder="Correo" className="mb-4 w-full px-4 py-2 border rounded" />
        <textarea placeholder="Mensaje" className="mb-4 w-full px-4 py-2 border rounded"></textarea>
        <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition">Enviar</button>
      </form>
      <div className="flex items-center justify-center space-x-8">

      </div>
      
    </section>

    </div>
   
  );
}
