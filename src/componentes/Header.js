import HamburgerMenuButton from './HamburguerMenuButton';


const navItems = [
  
  { id: 'beneficios', label: 'Beneficios' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'proceso', label: 'Procesos' },
  { id: 'casos-exito', label: 'Casos de Éxito' },
  { id: 'contacto', label: 'Contacto' },
];

export default function Header() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (

    <header className="bg-blue-900 bg-opacity-80 shadow-lg sticky top-0 z-50 flex justify-between items-center px-5 py-4 animate-fade-in">
                      
       {/* Titulo y Logo */}
      <div className='flex items-center '>
       
         {/*  <img src='sd.svg' className='w-13 h-13 bg-green-100'></img>*/}
        </div>
         {/* Botón hamburguesa para pantallas pequeñas */}
        
      <nav>
         <div className='block sm:hidden' >
            <HamburgerMenuButton></HamburgerMenuButton>
         </div>
        <ul className=" flex items-center mx-auto left-1/2 transform -translate-x-1/2  absolute space-x-16 text-white font-bold text-xl">
          
          {navItems.map((item) => (
            <li key={item.id}>
              <button 
                className="hover:text-blue-300 transition-colors duration-300 hidden sm:block text-md "
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>


      </nav>
    </header>
  );
}
