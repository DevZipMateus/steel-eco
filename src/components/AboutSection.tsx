
import { useEffect, useRef } from 'react';
import { CheckCircle, Target, Users, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      { threshold: 0.1 }
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

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50" id="sobre">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sobre a <span className="text-green-600">Steel Eco</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Criada para atuar na fabricação e comercialização de metálicos para a construção civil, 
              a Steel Eco veio para desenvolver e consolidar uma nova postura na relação 
              "sistemas construtivos" e "meio ambiente".
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Nossa Missão
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Está estruturada para atuar em soluções para a construção civil, observando e 
                respeitando todos os critérios de sustentabilidade, preservação dos recursos 
                naturais, destinação e reciclagem de resíduos, certificação e normatização de 
                todos envolvidos no processo de fabricação e construção.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Em constante inovação, somos estruturados para atuar em soluções de construção 
                civil respeitando todos os critérios de sustentabilidade, preservação dos recursos 
                naturais, destinação e reciclagem de resíduos, durante todo o processo de 
                fabricação à construção.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Construção sustentável"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Nossos Valores
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Liberdade Arquitetônica</h4>
                <p className="text-gray-600">Total liberdade arquitetônica, aliada ao planejamento, projeto e execução.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Qualidade</h4>
                <p className="text-gray-600">Compromisso com a excelência em todos os processos e produtos.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Parcerias</h4>
                <p className="text-gray-600">Distribuidora e parceira de empresas que apoiam a arquitetura sustentável.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Inovação</h4>
                <p className="text-gray-600">Constantemente inovando em tecnologias, equipamentos e treinamento.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Economia de Energia e Conforto
            </h3>
            <p className="text-lg md:text-xl leading-relaxed">
              A Steel Eco é distribuidora e parceira de empresas que apoiam a arquitetura sustentável 
              através de sua experiência e conhecimento, proporcionando conforto e favorecendo a economia de energia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
