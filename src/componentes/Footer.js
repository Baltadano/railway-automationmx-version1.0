// Footer.js
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 flex flex-col items-center">
      <div className="flex space-x-4 mb-2">
        {/* Íconos redes sociales aquí, por ejemplo usando FontAwesome */}
        <h3 className="hover:text-blue-300"> Powered by AutomationMX</h3>
      </div>
      <span className="text-sm">© 2025 AutomationMX - Todos los derechos reservados</span>
    </footer>
  );
}
