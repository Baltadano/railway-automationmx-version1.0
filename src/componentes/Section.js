// Section.js
import React from 'react';


export default function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center px-8 py-12 bg-white opacity-90 transition duration-700 ease-in-out animate-fade-in bg-cover bg-center"
       style={{   
      }}
    >
      <h2 className="text-4xl font-bold text-blue-700 mb-6">{title}</h2>
      <div className="text-lg text-blue-700 max-w-3xl text-blue-600 text-center">{children}</div>
    
    </section>
   
  );
}
