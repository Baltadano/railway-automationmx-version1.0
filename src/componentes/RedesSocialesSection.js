// RedesSocialesSection.js
export default function RedesSocialesSection() {
  const redes = [
    {
      nombre: "Instagram",
      url: "https://www.instagram.com/automationmx/",
      svg: (
        <svg className="w-10 h-10 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c2.2 0 4 1.8 4 4v10c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4V7c0-2.2 1.8-4 4-4h10zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 1a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
        </svg>
      )
    },
    {
      nombre: "WhatsApp",
      url: "https://wa.me/1234567890",
      svg: (
        <svg className="w-10 h-10 text-green-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-8.5 15.5l-1.1 4l4-1.1A10 10 0 1 0 12 2zm0 18c-1.5 0-3-.4-4.4-1.2l-.7-.4l-2.6.7l.7-2.6l-.4-.7C3.4 15 3 13.5 3 12a9 9 0 1 1 9 9zm5.1-6.3l-1.6-.8c-.2-.1-.3-.2-.4.1c-.3.6-.6 1.1-.9 1c-.3-.1-1.2-.6-1.6-.9s-.6-.9-.3-1.1c.2-.2.4-.3.3-.5s-.3-.7-.6-1.5c-.3-.8-.6-.8-.8-.8c-.2 0-.4 0-.6 0c-.2 0-.4 0-.5.2c-.1.2-.6 1-.7 1.3c-.1.3-.2.3-.4.2c-.2-.1-.8-.4-1.5-1c-.7-.6-1-1.1-1.1-1.3c-.1-.2 0-.4.1-.5c.1-.1.2-.3.3-.4c.1-.1.1-.2.1-.3c0-.2 0-.4-.1-.8C8 9.3 7.9 9 7.7 8.9c-.2-.1-.4-.1-.6-.1c-.2 0-.4.4-.5.7c-.1.4-.3 1.1-.2 1.8c.2 1.2 1.2 2.4 2.1 3.2c1 .8 2.2 1.2 3.4 1.1c.7 0 1.4-.2 1.9-.4c.4-.2.8-.5 1.1-.7s.5-.6.7-.9c.2-.3.2-.6.2-.8c0-.3 0-.4-.1-.4z"/>
        </svg>
      )
    },
    {
      nombre: "Facebook",
      url: "https://facebook.com/tuempresa",
      svg: (
        <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h5v-7h-2v-3h2v-2a3 3 0 0 1 3-3h2v3h-2c-.7 0-1 .3-1 1v1h3v3h-3v7h3a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-10 px-4 bg-white rounded-xl shadow-lg max-w-xl mx-auto mt-10 border border-blue-100">
      <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">Síguenos en Redes</h2>
      <div className="flex items-center justify-center space-x-8">
        {redes.map((red, idx) => (
          <a
            key={idx}
            href={red.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full bg-blue-50 hover:bg-gradient-to-tr hover:from-blue-400 hover:to-blue-700 shadow transition p-4"
            aria-label={red.nombre}
          >
            {red.svg}
          </a>
        ))}
      </div>
    </section>
  );
}
