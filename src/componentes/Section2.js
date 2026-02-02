// Section.js
import React from 'react';
import '/Users/marianobjl/Desktop/Plataforma/plataforma_cursos/src/Styles.css';

export default function Section2({ id, title, children, logos }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center px-8 py-12 bg-white opacity-90 transition duration-700 ease-in-out animate-fade-in bg-cover bg-center"
       style={{   
        //backgroundImage: `url(${logos})`,
        
              
      }}
    >
      <h2 className="text-4xl font-bold text-blue-700 mb-6">{title}</h2>
      <div className="text-lg text-blue-700 max-w-3xl text-green-600">{children}</div>
      <img src='./logo.png' className='elemento-con-fondo' ></img>
    </section>
   
  );
}
