// ServiciosSection.js
export default function ServiciosSection() {
  const servicios = [
    {
      titulo: "Automatización Inteligente",
      descripcion: "Integramos IA en tus procesos para eliminar tareas manuales y maximizar la productividad empresarial.",
      icono: (
        <svg className="w-14 h-14 text-blue-400 bg-gradient-to-tr from-blue-900 to-blue-400 rounded-full p-3 mb-6 shadow-lg" viewBox="0 0 24 24" fill="none">
          <path stroke="currentColor" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3"/>
        </svg>
      ),
    },
    {
      titulo: "Analítica Avanzada",
      descripcion: "Soluciones que aprovechan el análisis de datos con IA para tomar decisiones en tiempo real y generar informes automáticos.",
      icono: (
        <svg className="w-14 h-14 text-blue-400 bg-gradient-to-tr from-blue-800 to-blue-400 rounded-full p-3 mb-6 shadow-lg" viewBox="0 0 24 24" fill="none">
          <path stroke="currentColor" strokeWidth="2" d="M17 20h5v-2a8 8 0 10-16 0v2h5"/>
        </svg>
      ),
    },
    {
      titulo: "Integración de Chatbots",
      descripcion: "Implementamos chatbots potenciados por IA que optimizan la atención al cliente y automatizan respuestas en múltiples canales.",
      icono: (
        <svg className="w-14 h-14 text-blue-400 bg-gradient-to-tr from-blue-700 to-blue-300 rounded-full p-3 mb-6 shadow-lg" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path stroke="currentColor" strokeWidth="2" d="M8 12h8M9 15h6"/>
        </svg>
      ),
    }
  ];

  return (
    <section id="servicios" className="py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-blue-50 relative">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12 tracking-tight">Nuestros Servicios</h2>
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
        {servicios.map((servicio, i) => (
          <div
            key={i}
            className="relative bg-white border-2 border-transparent bg-clip-padding rounded-3xl p-10 shadow-2xl flex flex-col items-center hover:border-blue-400 hover:scale-105 transition duration-300 group"
            style={{
              boxShadow: '0 12px 36px rgba(36,60,180,0.18)',
              backgroundOrigin: 'border-box',
              borderImage: 'linear-gradient(90deg,#0ea5e9,#818cf8) 1',
            }}
          >
            {servicio.icono}
            <h3 className="text-2xl font-extrabold text-blue-800 mb-4 text-center" style={{textShadow:'0 4px 10px #e0e0ff'}}>
              {servicio.titulo}
            </h3>
            <p className="text-blue-700 text-center font-medium">{servicio.descripcion}</p>
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-14 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 rounded-full"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
