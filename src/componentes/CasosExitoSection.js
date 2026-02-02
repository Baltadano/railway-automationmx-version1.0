import Slider from "react-slick";

const casos = [
  {
    img: "/LogoAutomaMx01.jpg", // Cambia por tus imágenes
    empresa: "TechSoluciones",
    descripcion: "Optimizamos la cadena de producción con IA logrando un aumento del 35% en eficiencia operativa.",
  },
  {
    img: "/LogoAutomaMx01.jpg",
    empresa: "EcoLogistics",
    descripcion: "Redujimos costos logísticos automatizando la gestión de rutas y almacenes.",
  },
  {
    img: "/LogoAutomaMx01.jpg",
    empresa: "FinPro MX",
    descripcion: "Implementamos chatbots legales que agilizaron la atención a clientes en procesos financieros.",
  },
];

export default function CasosExitoSection({id}) {
    
  const settings = {
    
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4500,
  };

  return (
    <section id={id} className="py-20 px-2 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12 drop-shadow-lg">
        Casos de Éxito
      </h2>
      <div className="max-w-3xl mx-auto">
        <Slider {...settings}>
          {casos.map((caso, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <div className="rounded-2xl shadow-2xl overflow-hidden relative group aspect-video w-full bg-blue-100">
                  
                <img 
                  src={caso.img} 
                  alt={"Caso " + caso.empresa} 
                  className="object-cover w-full h-full group-hover:scale-105 transition" 
                />
                {/* Marca de agua si deseas */}

                {/* <img src="/AutomatioMxLogo.jpg" alt="Logo" className="absolute bottom-4 right-4 w-12 opacity-30" /> */}
              </div>
              <h3 className="text-2xl text-blue-800 font-bold mt-6">{caso.empresa}</h3>
              <p className="text-blue-900 text-center mt-3 mb-6 max-w-lg">{caso.descripcion}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
