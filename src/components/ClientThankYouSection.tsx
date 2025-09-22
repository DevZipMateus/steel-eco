import { useEffect, useRef } from 'react';
import { FileText } from 'lucide-react';

const ClientThankYouSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const thankYouLetters = [
    {
      id: 1,
      company: "Technobra Construção & Incorporação",
      image: "/lovable-uploads/agradecimentos/technobra-agradecimento.jpg",
      description: "Reconhecimento pela excelência em projetos de fachadas inovadoras e sustentáveis"
    },
    {
      id: 2,
      company: "EMIBM Engenharia e Inovação LTDA",
      image: "/lovable-uploads/agradecimentos/emibm-agradecimento.jpg",
      description: "Carta de reconhecimento pelos projetos de brises e elementos arquitetônicos"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden opacity-0"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <FileText className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Cartas de Agradecimento de Clientes
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            O reconhecimento dos nossos clientes é o que nos motiva a buscar sempre a excelência. 
            Confira algumas das cartas de agradecimento que recebemos pelos nossos trabalhos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {thankYouLetters.map((letter) => (
            <div
              key={letter.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={letter.image}
                  alt={`Carta de agradecimento da ${letter.company}`}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {letter.company}
                </h3>
                <p className="text-gray-600">
                  {letter.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 font-medium">
            Sua satisfação é nossa maior conquista
          </p>
          <p className="text-gray-600 mt-2">
            Cada projeto é desenvolvido com dedicação e comprometimento para superar as expectativas dos nossos clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientThankYouSection;