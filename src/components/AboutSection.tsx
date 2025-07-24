
import { useEffect, useRef } from 'react';
import { CheckCircle, Target, Users, Lightbulb, Shield, Clock } from 'lucide-react';

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
                Estamos preparados para atuar com excelência na execução de projetos na construção civil, 
                sempre com foco na sustentabilidade e no respeito ao meio ambiente. Adotamos práticas 
                responsáveis de preservação dos recursos naturais, além de promover a destinação correta 
                e a reciclagem de resíduos gerados ao longo das obras.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Apostamos na inovação contínua como parte essencial do nosso trabalho. Por isso, integramos 
                Planejamento, Projeto e Execução de forma estratégica, garantindo o uso eficiente dos recursos 
                disponíveis. Essa abordagem permite entregas com segurança, economia, agilidade, qualidade e 
                praticidade, assegurando alto desempenho em cada etapa do processo construtivo.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/dc497ae9-db5a-4ea0-a77a-333c66c92b01.png"
                alt="Steel Eco - Obra em construção"
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
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Qualidade</h4>
                <p className="text-gray-600">Cada projeto é conduzido com excelência técnica, atenção aos detalhes e compromisso em superar expectativas.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Segurança</h4>
                <p className="text-gray-600">Valorizamos a segurança dos nossos colaboradores como princípio fundamental, assegurando um ambiente de trabalho seguro, eficiente e alinhado com as melhores práticas do setor.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Respeito aos Clientes e Colaboradores</h4>
                <p className="text-gray-600">Acreditamos que o respeito é a base de toda grande construção. Atuamos com transparência, compromisso e escuta ativa para construir relações sólidas e entregar resultados que superem expectativas.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Inovação</h4>
                <p className="text-gray-600">Buscamos soluções modernas e sustentáveis que respeitem o meio ambiente e elevem a eficiência das obras, como forma de reduzir impactos ambientais e colaborar para a construção de um futuro melhor.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow col-span-full md:col-span-2 lg:col-span-4 max-w-md mx-auto">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Comprometimento com Prazos</h4>
                <p className="text-gray-600">Cumprir prazos é mais do que um compromisso, é parte da nossa identidade. Atuamos com organização, agilidade e foco para garantir entregas pontuais, sem abrir mão da excelência.</p>
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
