import { useEffect, useRef } from 'react';
import { Building, Wind, Home, Layers, Grid, Hammer } from 'lucide-react';

const services = [
  {
    title: "Brises",
    description: "Constantemente inovando em tecnologias, equipamentos, logística, segurança e treinamento de equipes, a Steel Eco instala produtos para fachadas de edifícios, tendo em seu currículo as maiores e mais importantes obras de Brasília e em todo Brasil.",
    icon: Wind,
    image: "/lovable-uploads/produtos/Captura de tela de 2025-07-21 14-25-08.png"
  },
  {
    title: "Fachadas",
    description: "A instalação de fachadas é sempre um desafio vencido pela competência e qualidade de mão de obra altamente especializada. A Steel Eco possui equipamentos de apoio necessários à instalação, reduzindo assim os custos de tempo e de mão de obra.",
    icon: Building,
    image: "/lovable-uploads/produtos/Captura de tela de 2025-07-21 13-59-04.png"
  },
  {
    title: "Fachadas Ventiladas",
    description: "Fachada Ventilada exige estrutura auxiliar perfeita, fidelidade ao projeto e às características do produto, além de mão de obra qualificada e treinada. A Steel Eco oferece técnica, conhecimento, experiência e confiabilidade.",
    icon: Grid,
    image: "/lovable-uploads/produtos/Captura de tela de 2025-07-21 14-37-17.png"
  },
  {
    title: "Forros Metálicos",
    description: "Os Forros Metálicos, cada vez mais usados por sua beleza, leveza, praticidade e mobilidade, assim como os brises e fachadas, exigem mão de obra especializada para garantir a perfeição estética e de funcionalidade.",
    icon: Layers,
    image: "/lovable-uploads/produtos/Captura de tela de 2025-07-21 14-38-47.png"
  },
  {
    title: "Forros Fibra Mineral",
    description: "A Steel Eco acumula a experiência de instalação de milhões de m² de Forro de Fibra Mineral em todo o Brasil, garantindo qualidade e durabilidade.",
    icon: Grid,
    image: "/lovable-uploads/produtos/Captura de tela de 2025-07-21 14-41-15.png"
  },
  {
    title: "Piso Elevado",
    description: "Piso Elevado é a suspensão e alinhamento do piso com a finalidade de manuseio acessível. Sobre ele também há a locomoção de pessoas, o que exige segurança e conforto que somente a mão de obra qualificada pode oferecer.",
    icon: Layers,
    image: "/lovable-uploads/produtos/Captura de tela de 2025-07-21 14-42-42.png"
  },
  {
    title: "Drywall",
    description: "Milhões de m² de Drywall instalados no Brasil contam nossa história na construção civil. Temos uma longa história de sucesso marcada por confiabilidade e seriedade.",
    icon: Hammer,
    image: "/lovable-uploads/produtos/Captura de tela de 2025-07-21 14-43-51.png"
  }
];

const ServicesSection = () => {
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
    <section className="py-20 bg-white" id="servicos">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossos <span className="text-green-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fornecimento e instalação de produtos metálicos para construção civil 
            com foco na sustentabilidade e qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <service.icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-800 to-green-800 rounded-lg p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            História de Sucesso
          </h3>
          <p className="text-lg md:text-xl leading-relaxed">
            Temos uma longa história de sucesso marcada por confiabilidade, seriedade, 
            sem jamais ter tido uma só ação judicial ou reclamação em órgãos de controle 
            de qualidade e de defesa ao consumidor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
