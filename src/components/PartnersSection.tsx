import { useEffect, useRef } from 'react';
import { Handshake, Target, Users } from 'lucide-react';

const PartnersSection = () => {
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

  const partnerLogos = [
    '/lovable-uploads/parceiros/3A06B150746E31A08B08.jpeg',
    '/lovable-uploads/parceiros/3A176AE0035DB4DA5450.jpeg',
    '/lovable-uploads/parceiros/3A226D2D074373468E7E.jpeg',
    '/lovable-uploads/parceiros/3A6AE6CB6E29226C53DC.jpeg',
    '/lovable-uploads/parceiros/3A8DB77B48A99202CDBF.jpeg',
    '/lovable-uploads/parceiros/3AF326B0F796F62328DF.jpeg',
    '/lovable-uploads/parceiros/3AF8A58CE04D6CCC813D.jpeg',
    '/lovable-uploads/parceiros/PSA.png',
    '/lovable-uploads/parceiros/grade-metalica.jpg',
    '/lovable-uploads/parceiros/images (1).png',
    '/lovable-uploads/parceiros/images (2).png',
    '/lovable-uploads/parceiros/images.png'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-gray-50" id="parceiros">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossos <span className="text-green-600">Parceiros</span>
          </h2>
          
          <div className="mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-10 h-10 text-green-600" />
            </div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Nossas parcerias são marcadas por relações antigas e leais na busca dos 
              melhores caminhos em direção a objetivos comuns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Objetivos Comuns</h3>
              <p className="text-gray-600 leading-relaxed">
                Junto aos nossos parceiros, transformamos metas sustentáveis em resultados concretos, 
                entregando obras de excelência que refletem nosso compromisso com a qualidade e o futuro da construção civil.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Relações Duradouras</h3>
              <p className="text-gray-600 leading-relaxed">
                Estabelecemos parcerias duradouras baseadas na cooperação, compromisso com a sustentabilidade 
                e rigor na qualidade da construção.
              </p>
            </div>
          </div>

          {/* Partner Logos Grid */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Nossos Parceiros de Confiança
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {partnerLogos.map((logo, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center min-h-[120px]"
                >
                  <img 
                    src={logo} 
                    alt={`Parceiro ${index + 1}`}
                    className="max-w-full max-h-20 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Arquitetura Sustentável
            </h3>
            <p className="text-lg md:text-xl leading-relaxed">
              A Steel Eco é distribuidora e parceira de marcas comprometidas com a arquitetura sustentável. 
              Com expertise e parcerias estratégicas, entregamos inovação, conforto e eficiência para construções 
              que respeitam o presente e transformam o futuro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
