import React, { useEffect, useRef } from 'react';
import { Droplets, Sparkles, Scissors, Layers, Zap, Gem, Paintbrush } from 'lucide-react';
import { FaStore, FaTshirt } from 'react-icons/fa';
import { GiBilledCap, GiShoppingBag } from 'react-icons/gi';
import { BsCup } from 'react-icons/bs';
import { LuCalendarDays } from 'react-icons/lu';
import { MdCampaign } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import ImageModal from './Utils/ImageModal';
const imagenesPorCategoria = import.meta.glob("../assets/serigrafia-resource/*/*.jpg",{ eager: true, query: '?url', import: 'default' });
import BubbleBackground from './backgrounds/Bubbles';

const Tecnicas: React.FC = () => {
  type ImagenAgrupada = {
  categoria: string;
  nombre: string;
  url: string;
};
  
const listaAgrupada: ImagenAgrupada[] = Object.entries(imagenesPorCategoria).map(
  ([path, url]) => {
    const partes = path.split("/");
    const categoria = partes[partes.length - 2]; // Ej: Playeras, Gorras
    const nombreArchivo = partes[partes.length - 1].replace(".jpg", "");

    return {
      categoria,
      nombre: nombreArchivo,
      url: url as string,
    };
  }
);
  const location = useLocation();
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Verificar si hay hash en la URL (ej: #seccion-especifica)
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  const tecnicas = [
    {
      name: 'Plastisol',
      description: 'Técnica tradicional con excelente durabilidad y colores vibrantes. Ideal para diseños con colores sólidos.',
      icon: Paintbrush,
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Base Agua',
      description: 'Estampado ecológico con tacto suave. Perfecto para prendas de algodón y diseños detallados.',
      icon: Droplets,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      name: 'Foil',
      description: 'Acabado metálico brillante que aporta elegancia y sofisticación a cualquier diseño.',
      icon: Sparkles,
      color: 'from-purple-600 to-purple-700'
    },
    {
      name: 'Flock',
      description: 'Textura aterciopelada que crea un efecto táctil único y llamativo en tus prendas.',
      icon: Layers,
      color: 'from-pink-500 to-pink-600'
    },
    {
      name: 'HD (High Definition)',
      description: 'Estampado de alta definición para diseños complejos con detalles precisos y colores nítidos.',
      icon: Zap,
      color: 'from-indigo-600 to-indigo-700'
    },
    {
      name: 'Glitter',
      description: 'Efecto brillante y llamativo que hace que tus diseños destaquen con un toque de glamour.',
      icon: Gem,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      name: 'Corte de Vinil',
      description: 'Técnica precisa para diseños con formas definidas y colores sólidos de larga duración.',
      icon: Scissors,
      color: 'from-green-600 to-green-700'
    },
    {
      name: 'DTF con pedrería',
      description: 'Brillos decorativos que resaltan ciertas zonas del diseño con pedrería termoadhesiva. Ideal para prendas que buscan un toque de lujo.',
      icon: FaTshirt,
      color: 'from-blue-500 to-purple-700'
    }
  ];
  const prendas = [
    {
      name: 'Camisetas',
      icon: FaTshirt,
      color: 'from-blue-600 to-blue-700',
      example: listaAgrupada.find(img => img.categoria === 'Playeras')?.url || '',
    },
    {
      name: "Gorras",
      icon: GiBilledCap,
      color: 'from-cyan-500 to-cyan-600',
      example: listaAgrupada.find(img => img.categoria === 'Gorras')?.url || '',
    },
    {
      name: "Bolsas",
      icon: GiShoppingBag,
      color: 'from-purple-600 to-purple-700',
      example: listaAgrupada.find(img => img.categoria === 'Bolsas')?.url || '',
    },
    {
      name: "Tazas",
      icon: BsCup,
      color: 'from-pink-500 to-pink-600',
      example: listaAgrupada.find(img => img.categoria === 'Tazas')?.url || '',
    },
    {
      name: "Calendarios",
      icon: LuCalendarDays,
      color: 'from-indigo-600 to-indigo-700',
      example: listaAgrupada.find(img => img.categoria === 'Calendarios')?.url || '',
    },
    {
      name: "Artículos publicitarios",
      icon: FaStore,
      color: 'from-yellow-500 to-yellow-600',
      example: listaAgrupada.find(img => img.categoria === 'Articulos_publicitarios')?.url || '',
    },
    {
      name: "Articulos para campañas",
      icon: MdCampaign,
      color: 'from-green-600 to-green-700',
      example: listaAgrupada.find(img => img.categoria === 'Articulos_para_campañas')?.url || '',
    }
  ];
  const phoneNumber = '15548583702'; // Reemplaza con tu número
  const message = encodeURIComponent('Hola, tengo una duda sobre que tecnica puedo usar para mi diseño.'); // Mensaje codificado
  return (
    <section className="relative z-0 inline-block pt-18 bg-gray-50 w-full h-full"   id='tecnicas' ref={sectionRef}>
      <BubbleBackground 
        bubbleCount={30}
        color="rgba(200, 210, 255)"
        minSize={15}
        maxSize={50}
      />
      <div className="max-w-7xl pt-10 pb-20 z-0 bg-cyan-100/20 mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestras <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Técnicas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utilizamos las mejores técnicas de estampado para garantizar resultados excepcionales en cada proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tecnicas.map((tecnica, index) => {
            const IconComponent = tecnica.icon;
            return (
              <div
                key={index}
                className="z-0 not-md-card not-md:bg-white card-md rounded-xl shadow-lg  p-6"
              >
                <div className={`z-0 w-16 h-16 bg-gradient-to-r ${tecnica.color} rounded-full flex items-center justify-center mb-4`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{tecnica.name}</h3>
                <p className="text-gray-600 leading-relaxed">{tecnica.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-15 text-center" id='prendas' ref={sectionRef} >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tipo de <span className='bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>Prendas</span> o <span className='bg-gradient-to-r from-indigo-700 to-cyan-500 bg-clip-text text-transparent'> Articulos </span> que <span className='bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent'> manejamos</span>
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 mt-16'>
            {prendas.map((prenda, index) => {
              const IconComponent = prenda.icon;
              return (
                <ImageModal
                  key={index}
                  imageUrl={prenda.example || ''}
                  title={prenda.name}
                  technique={'Descripción no disponible'}>
                <div
                  key={index}
                  className=" not-md-card not-md:bg-white card-md rounded-xl shadow-lg  p-6"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${prenda.color} rounded-full flex items-center justify-center mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{prenda.name}</h3>
                  {/* <p className="text-gray-600 leading-relaxed">{prenda.description}</p> */}
                </div>
                </ImageModal>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿No sabes cuál técnica elegir?</h3>
            <p className="text-gray-600 mb-6">
              Nosotros te ayudaremos a seleccionar la técnica perfecta según tu diseño, presupuesto y tipo de prenda.
            </p>
            <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank"
              rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-200">
              Consultar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tecnicas;