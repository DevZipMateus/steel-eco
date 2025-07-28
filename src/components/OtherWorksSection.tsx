
import { useState, useEffect, useRef } from 'react';
import { Eye, X, MapPin, Package } from 'lucide-react';

interface OtherWork {
  id: number;
  title: string;
  client: string;
  location: string;
  product: string;
  image: string;
}

const otherWorks: OtherWork[] = [
  {
    id: 1,
    title: "Procuradoria Regional do Trabalho - 10a Região",
    client: "Construtora Vilela e Carvalho",
    location: "Asa Norte - Brasília DF",
    product: "Quadrobrise e Screenpanel Hunter Douglas",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-48-05.png"
  },
  {
    id: 2,
    title: "SIS Swiss International Schools do Brasil Ltda",
    client: "Licitação",
    location: "Asa Sul - Brasília DF",
    product: "Miniwave Hunter Douglas",
    image: "/lovable-uploads/obras/3A6AE6CB6E29226C53DC.jpeg"
  },
  {
    id: 3,
    title: "Bali Brasília Automóveis",
    client: "Licitação",
    location: "SIA - Brasília DF",
    product: "Forro Ecophon Mineralis - Saint-Gobain",
    image: "/lovable-uploads/obras/3EB009D069354A2CABBC54.jpeg"
  },
  {
    id: 4,
    title: "Sede Administrativa da CAESB",
    client: "Licitação",
    location: "Águas Claras - Brasília DF",
    product: "Dry Wall e Brise Metálico Colmeia Refax",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-47-48.png"
  },
  {
    id: 5,
    title: "Hotel Brasília Palace",
    client: "FUNASA Licitação",
    location: "Brasília DF",
    product: "Brise Metálico AA440 Tipo Asa de Avião Refax",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-47-43.png"
  },
  {
    id: 6,
    title: "Tribunal de Contas da União - TCU",
    client: "Contrato direto",
    location: "Brasília DF",
    product: "Brise Metálico Tipo Asa de Avião",
    image: "/lovable-uploads/obras/3EB093F92D306762EBA979.jpeg"
  },
  {
    id: 7,
    title: "Análise Planejamento",
    client: "Construtora RV",
    location: "Brasília DF",
    product: "Piso Elevado",
    image: "/lovable-uploads/obras/3EB0B1F1248618B5711F85.jpeg"
  },
  {
    id: 8,
    title: "Tribunal Regional do Trabalho",
    client: "Construtora Paulo Octavio",
    location: "Cuiabá MT",
    product: "Dry Wall, Forro Mineral",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-47-25.png"
  },
  {
    id: 9,
    title: "Centro de Convenções Ulisses Guimarães",
    client: "Licitação",
    location: "Brasília DF",
    product: "Revestimento Metálico Modular Clip-In Refax",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-47-21.png"
  },
  {
    id: 10,
    title: "Mercadão Goiano",
    client: "Construtora Paulo Octavio",
    location: "Águas Lindas GO",
    product: "Chapa Expandida Permetal",
    image: "/lovable-uploads/obras/5E34C0F9F3FCC6CCD4B3.jpeg"
  },
  {
    id: 11,
    title: "ETEC Carrão",
    client: "Engetal Engenharia",
    location: "São Paulo SP",
    product: "Screenpanel Hunter Douglas",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-47-04.png"
  },
  {
    id: 12,
    title: "Câmara Legislativa do DF",
    client: "Construtora SLT",
    location: "Brasília DF",
    product: "Forro Fibra Mineral e Quadrobrise Hunter Douglas",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-46-58.png"
  },
  {
    id: 13,
    title: "Shopping Conjunto Nacional",
    client: "Engetal Engenharia",
    location: "Brasília DF",
    product: "Painel 84R Hunter Douglas",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-46-51.png"
  },
  {
    id: 14,
    title: "ETEC Raposo Tavares",
    client: "Engetal Engenharia",
    location: "Butantã - São Paulo SP",
    product: "Termobrise 335 Hunter Douglas",
    image: "/lovable-uploads/obras/5E72D3A70F9195154392.jpeg"
  },
  {
    id: 15,
    title: "Casa da Democracia",
    client: "Engetal Engenharia",
    location: "Cuiabá MT",
    product: "Brise Metálico AS288 Refax",
    image: "/lovable-uploads/obras/5E767A4295C5C948CC66.jpeg"
  },
  {
    id: 16,
    title: "Sede da OAB - PB",
    client: "Engetal Engenharia",
    location: "João Pessoa PB",
    product: "Chapa Expandida Permetal",
    image: "/lovable-uploads/obras/5EA2039F7F295CB18566.jpeg"
  },
  {
    id: 17,
    title: "ETEC Jaraguá",
    client: "Engetal Engenharia",
    location: "Jaraguá - São Paulo SP",
    product: "Brise Termobrise 335 Hunter Douglas",
    image: "/lovable-uploads/obras/5EF21554C981C836DBC8.jpeg"
  }
];

const OtherWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoadStates, setImageLoadStates] = useState<Record<number, boolean>>({});
  const [expandedImage, setExpandedImage] = useState<OtherWork | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // IDs that should display complete information - now including all images
  const idsWithCompleteInfo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  const shouldShowInfo = (id: number) => {
    return idsWithCompleteInfo.includes(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          console.log('OtherWorksSection is now visible');
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleImageLoad = (workId: number) => {
    console.log(`Image loaded for work ${workId}`);
    setImageLoadStates(prev => ({ ...prev, [workId]: true }));
  };

  const handleImageError = (workId: number, imageUrl: string) => {
    console.error(`Failed to load image for work ${workId}:`, imageUrl);
  };

  const handleImageExpand = (work: OtherWork) => {
    console.log(`Expanding image for work ${work.id}`);
    setExpandedImage(work);
  };

  const handleCloseExpanded = () => {
    setExpandedImage(null);
  };

  useEffect(() => {
    if (expandedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [expandedImage]);

  return (
    <>
      <section className="py-16 bg-gray-50" id="outras-obras">
        <div className="container mx-auto px-4" ref={sectionRef}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block py-2 px-4 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4">
              Portfólio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Outras <span className="text-green-600">Obras</span>
            </h2>
            <p className="text-xl text-gray-600">
              Conheça alguns dos nossos principais projetos realizados em diferentes segmentos
              e para diversos clientes em todo o Brasil.
            </p>
          </div>

          {/* Works Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {otherWorks.map((work, index) => (
              <div
                key={work.id}
                className={`group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 cursor-pointer ${
                  isVisible ? 'animate-fadeIn' : 'opacity-0'
                }`}
                style={{ animationDelay: isVisible ? `${index * 50}ms` : '0ms' }}
                onClick={() => handleImageExpand(work)}
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  {!imageLoadStates[work.id] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <div className="animate-pulse text-gray-500">Carregando...</div>
                    </div>
                  )}
                  <img
                    src={work.image}
                    alt={work.title}
                    className={`w-full h-full object-contain transition-all duration-300 group-hover:scale-105 ${
                      imageLoadStates[work.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(work.id)}
                    onError={() => handleImageError(work.id, work.image)}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 hover:bg-green-50 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageExpand(work);
                        }}
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Image Modal */}
      {expandedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-2 sm:p-4">
          <div className="relative w-full h-full max-w-7xl max-h-full flex flex-col">
            <button
              onClick={handleCloseExpanded}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-all duration-200"
            >
              <X className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            
            <div className="flex-1 flex items-center justify-center">
              <img
                src={expandedImage.image}
                alt={expandedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
            
            {/* Conditionally render info bar only for images with complete information */}
            {shouldShowInfo(expandedImage.id) && (
              <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-lg p-4 sm:p-6 mt-4 mx-2 sm:mx-0">
                <h3 className="text-white text-lg sm:text-2xl font-bold mb-2">
                  {expandedImage.title}
                </h3>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-white text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span>{expandedImage.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-blue-400" />
                    <span>{expandedImage.product}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div 
            className="absolute inset-0 -z-10"
            onClick={handleCloseExpanded}
          />
        </div>
      )}
    </>
  );
};

export default OtherWorksSection;
