import React from "react";

export default function LyntraLanding() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white border border-blue-500 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          Lyntra
        </h1>
        <form className="space-y-5" method="POST" action="https://baltas.app.n8n.cloud/webhook-test/Automatizacion_n8n">
          <div>
            <label htmlFor="fullname" className="block text-blue-700 font-medium mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Tu nombre completo"
              className="w-full px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-blue-700 font-medium mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tuemail@ejemplo.com"
              className="w-full px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-blue-700 font-medium mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+52 1 234 567 8901"
              className="w-full px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-blue-700 font-medium mb-1">
              ¿Qué tipo de servicio tecnológico requieres?
            </label>
            <textarea
              id="service"
              name="service"
              rows="4"
              placeholder="Describe el servicio que necesitas..."
              className="w-full px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
