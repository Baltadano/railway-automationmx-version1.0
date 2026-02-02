// ProcesoSection.js
export default function ProcesoSection() {
  const procesos = [
    {
      titulo: "Estudiamos",
      descripcion: "Analizamos cada proceso de tu empresa para identificar oportunidades de mejora y diseñar estrategias personalizadas usando IA.",
      icono: (
        <svg className="w-16 h-16 text-white bg-gradient-to-br from-blue-700 to-blue-400 rounded-2xl p-4 shadow-xl mb-8" viewBox="0 0 24 24" fill="none">
          <path stroke="currentColor" strokeWidth="2" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h8"/>
          <path stroke="currentColor" strokeWidth="2" d="M18 6l-6 6M15 4l5 5-5 5" />
        </svg>
      ),
    },
    {
      titulo: "Aplicamos",
      descripcion: "Implementamos soluciones inteligentes para automatizar procesos y maximizar resultados, adaptándonos a tus necesidades.",
      icono: (
        <svg className="w-16 h-16 text-white bg-gradient-to-br from-blue-800 to-blue-400 rounded-2xl p-4 shadow-xl mb-8" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2"/>
          <path stroke="currentColor" strokeWidth="2" d="M8 16l8-8"/>
        </svg>
      ),
    },
    {
      titulo: "Optimizamos",
      descripcion: "Monitorizamos y mejoramos continuamente para asegurar eficiencia, escalabilidad y éxito en todos tus procesos automatizados.",
      icono: (
        <svg className="w-16 h-16 text-white bg-gradient-to-br from-blue-900 to-blue-400 rounded-2xl p-4 shadow-xl mb-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path stroke="currentColor" strokeWidth="2" d="M10 14l2 2 4-4"/>
        </svg>
      ),
    }
  ];

  return (
    <section id="proceso" className="py-24 px-6 bg-gradient-to-br from-blue-200 via-white to-blue-50 relative">
      <h2 className="text-5xl font-extrabold text-center text-blue-900 mb-16 tracking-tight drop-shadow-lg">
        Nuestro Proceso
      </h2>
      <div className="max-w-6xl mx-auto grid gap-14 md:grid-cols-3">
        {procesos.map((proceso, i) => (
          <div
            key={i}
            className="relative bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 border-4 border-white rounded-3xl p-12 shadow-2xl flex flex-col items-center justify-center min-h-[360px] md:min-h-[420px] hover:scale-105 transition duration-300 group"
            style={{
              boxShadow: '0 16px 52px rgba(36,60,180,0.18)',
            }}
          >
            {proceso.icono}
            <h3 className="text-3xl font-bold text-white mb-6 text-center drop-shadow-md">{proceso.titulo}</h3>
            <p className="text-blue-50 text-lg text-center font-medium">{proceso.descripcion}</p>
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-20 h-2 bg-gradient-to-r from-white via-blue-300 to-white rounded-full shadow-lg"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
