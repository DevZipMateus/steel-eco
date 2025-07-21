
import { useState, useEffect, useRef } from 'react';
import { Eye, X } from 'lucide-react';

const otherWorks = [
  {
    id: 1,
    title: "Valparaiso Shopping",
    client: "Construtora Vilela e Carvalho",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-48-05.png"
  },
  {
    id: 2,
    title: "SERPRO – Rio de Janeiro/RJ",
    client: "Licitação",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-47-58.png"
  },
  {
    id: 3,
    title: "SERPRO – Brasília/DF",
    client: "Licitação",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-47-53.png"
  },
  {
    id: 4,
    title: "TCU – Brasília/DF",
    client: "Licitação",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-47-48.png"
  },
  {
    id: 5,
    title: "Hospital SEPACO – São Paulo/SP",
    client: "FUNASA Licitação",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-47-43.png"
  },
  {
    id: 6,
    title: "DSA Igreja Presbiteriana",
    client: "Contrato direto",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-47-38.png"
  },
  {
    id: 7,
    title: "Fórum Núcleo Bandeirante",
    client: "Construtora RV",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-47-32.png"
  },
  {
    id: 8,
    title: "Galeão Terminal I",
    client: "Construtora Paulo Octavio",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-47-25.png"
  },
  {
    id: 9,
    title: "Aeroporto de Recife",
    client: "Licitação",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-47-21.png"
  },
  {
    id: 10,
    title: "POUPEX",
    client: "Construtora Paulo Octavio",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-47-15.png"
  },
  {
    id: 11,
    title: "ETEC – Bragança Paulista/SP",
    client: "Engetal Engenharia",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-47-04.png"
  },
  {
    id: 12,
    title: "ETEC – Cruzeiro/SP",
    client: "Construtora SLT",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-46-58.png"
  },
  {
    id: 13,
    title: "ETEC – Ribeirão Preto/SP",
    client: "Engetal Engenharia",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-46-51.png"
  },
  {
    id: 14,
    title: "ETEC – Butantã/SP",
    client: "Engetal Engenharia",
    image: "/lovable-uploads/Obras/Captura de tela de 2025-07-21 14-46-38.png"
  }
];

const OtherWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoadStates, setImageLoadStates] = useState<Record<number, boolean>>({});
  const [expandedImage, setExpandedImage] = useState<{id: number, src: string, title: string, client: string} | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const handleImageExpand = (work: {id: number, image: string, title: string, client: string}) => {
    console.log(`Expanding image for work ${work.id}`);
    setExpandedImage({id: work.id, src: work.image, title: work.title, client: work.client});
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
                className={`group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 ${
                  isVisible ? 'animate-fadeIn' : 'opacity-0'
                }`}
                style={{ animationDelay: isVisible ? `${index * 50}ms` : '0ms' }}
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  {!imageLoadStates[work.id] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <div className="animate-pulse text-gray-500">Carregando...</div>
                    </div>
                  )}
                  <img
                    src={work.image}
                    alt={work.title}
                    className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 cursor-pointer ${
                      imageLoadStates[work.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(work.id)}
                    onError={() => handleImageError(work.id, work.image)}
                    onClick={() => handleImageExpand(work)}
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
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{work.title}</h3>
                  <p className="text-sm text-gray-600">{work.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {expandedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-2 sm:p-4">
          <div className="relative w-full h-full max-w-7xl max-h-full flex items-center justify-center">
            <button
              onClick={handleCloseExpanded}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white transition-all duration-200"
            >
              <X className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <img
              src={expandedImage.src}
              alt={expandedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 text-center">
              <h3 className="text-white text-sm sm:text-xl font-bold bg-black bg-opacity-50 rounded-lg py-1 px-2 sm:py-2 sm:px-4 inline-block mb-2">
                {expandedImage.title}
              </h3>
              <p className="text-white text-xs sm:text-sm bg-black bg-opacity-50 rounded-lg py-1 px-2 inline-block">
                {expandedImage.client}
              </p>
            </div>
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
