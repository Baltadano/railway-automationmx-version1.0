import { useState } from "react";

export default function HamburgerMenuButton() {
  const [open, setOpen] = useState(false);
  
  const navItems = [
  { id: "beneficios", label: "Beneficios" },
  { id: "servicios", label: "Servicios" },
  { id: "proceso", label: "Nuestro Proceso" },
  { id: "casos-exito", label: "Casos de Éxito" },
  { id: "contacto", label: "Contacto"},
  

];
  

  return (
    <button
      className="flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none group md:hidden"
      onClick={() => setOpen(!open)}
      aria-label="Abrir menú"
    >
      {/* Línea superior */}
      <span
        className={`h-1 w-8 my-1 rounded-full bg-blue-800 transition-all duration-300 ease-in-out
          ${open ? "rotate-45 translate-y-2" : ""}`}
      />
      {/* Línea central */}
      <span
        className={`h-1 w-8 my-1 rounded-full bg-blue-800 transition-all duration-300 ease-in-out
          ${open ? "opacity-0" : ""}`}
      />
      {/* Línea inferior */}
      <span
        className={`h-1 w-8 my-1 rounded-full bg-blue-800 transition-all duration-300 ease-in-out
          ${open ? "-rotate-45 -translate-y-2" : ""}`}
      />
       {/* Menú móvil (visible solo cuando está abierto) */}
      {open && (
        <ul className="absolute top-full left-0 w-full bg-blue-900 md:hidden flex flex-col items-center space-y-4 p-6 z-50 shadow-lg text-white font-bold">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => setOpen(false)} // Cierra el menú después de click
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </button>
  );
}
