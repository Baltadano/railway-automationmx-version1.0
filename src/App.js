import React from 'react';
import Header from './componentes/Header';
import SectionBeneficios from './componentes/BeneficiosSection';
import ServiciosSection from './componentes/ServiciosSection';
import ProcesoSection from './componentes/ProcesoSection';
import RedesSocialesSection from './componentes/RedesSocialesSection';
import Section from './componentes/Section';
import Section2 from './componentes/Section2';
import ContactForm from './componentes/ContactForm';
import CasosExitoSection from './componentes/CasosExitoSection';
import Footer from './componentes/Footer';
import logo from './logo.png';
import './Styles.css';
import SimpleChat from './componentes/SimpleChat';
import ChatWidgetTyping from './componentes/ChatWidgetTyping';

function App() {
  return (
    <div 
      className="relative min-h-screen bg-gradient-to-tr from-blue-900 via-blue-800 to-white overflow-hidden"
      style={{
        backgroundImage: `url()`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '70vw',
        opacity: '10',

       // color: 'green'
        
      }}
    >
      <div className="absolute inset-0 z-0" />
      <Header />
      <main className="relative z-10">
        {/* <Section id="inicio" title="Nuestros servicios " children="Atiende, guiando y agendando a tu cliente hacia tu servicio de forma inteligente como tu lo harias personalmente ..." />  */}
        <SectionBeneficios id="beneficios"></SectionBeneficios>
        <ServiciosSection id ="servicios"></ServiciosSection>
        <ProcesoSection id="proceso"></ProcesoSection>
        <CasosExitoSection id="casos-exito" ></CasosExitoSection>
        
        <ContactForm id="contacto"/>
         <RedesSocialesSection ></RedesSocialesSection>
      </main>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
