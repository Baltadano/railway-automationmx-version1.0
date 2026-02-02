export default function BeneficiosSection() {
  const beneficios = [
    {
      titulo: "Mayor Eficiencia",
      descripcion: "Automatizamos tareas repetitivas para que tu equipo se enfoque en lo estratégico, reduciendo tiempos y errores.",
      icono: (
        <svg className="w-10 h-10 text-blue-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M13 2L2 7l11 5 9-4.09M13 22V13M2 17l11 5 9-4.09" />
        </svg>
      ),
    },
    {
      titulo: "Toma de Decisiones Inteligente",
      descripcion: "Procesamos y analizamos datos en tiempo real para ofrecerte insights que potencian tus decisiones empresariales.",
      icono: (
        <svg className="w-10 h-10 text-blue-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      titulo: "Escalabilidad y Adaptabilidad",
      descripcion: "Nuestras soluciones crecen y se adaptan contigo, permitiendo implementar IA a la medida de tu negocio y nuevos desafíos.",
      icono: (
        <svg className="w-10 h-10 text-blue-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" /><path d="M8 12h8" />
        </svg>
      ),
    }
  ];

  return (
    <section
      id="beneficios"
       style={{
        backgroundImage: `url('/LogoAutomaMx01.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
        paddingTop: '34px'
      }}
      className="position-relative"
      >
      
      
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3  mt-10">
        {beneficios.map((b, i) => (
          <div key={i} className="relative group">
            {/* Borde reflejo animado */}
            <div className="relative rounded-xl p-4 sm:p-6 md:p-8 flex flex-col items-center shadow-lg w-full sm:w-64 md:w-80 max-w-sm mx-auto group-hover:scale-105 transition-transform duration-300"></div>
                            
            {/* Contenido del recuadro */}
            <div className="relative rounded-xl bg-opacity-0 p-8 flex flex-col items-center shadow-lg group-hover:scale-105 transition-transform duration-300 ">
             
              <div>{b.icono}</div>
              <h3 className="text-2xl font-semibold text-white mb-2 text-center">{b.titulo}</h3>
              <p className="text-white text-center">{b.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
