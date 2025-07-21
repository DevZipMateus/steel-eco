
import { useEffect, useRef } from 'react';
import { ArrowDown, Building2, Leaf, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
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

  const scrollToAbout = () => {
    const element = document.getElementById('sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')"
        }}
      ></div>

      <div className="container mx-auto px-4 z-20 text-center" ref={sectionRef}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/824c7f25-b118-414b-b132-d8d6bf41c31e.png" 
              alt="Steel Eco - Tecnologia Steel-Frame" 
              className="h-24 md:h-32 w-auto"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-green-400">Steel Eco</span><br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-300">
              Produtos Metálicos
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-green-400 font-medium">
            Com certeza, em algum lugar do Brasil,<br />
            você viu uma obra executada por nós!
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Criada para atuar na fabricação e comercialização de metálicos para a construção civil, 
            a Steel Eco desenvolve soluções sustentáveis respeitando o meio ambiente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <Building2 className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Construção Civil</h3>
              <p className="text-sm text-gray-300 text-center">Soluções completas para sua obra</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <Leaf className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Sustentabilidade</h3>
              <p className="text-sm text-gray-300 text-center">Preservação dos recursos naturais</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <Award className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Qualidade</h3>
              <p className="text-sm text-gray-300 text-center">Certificação e normatização</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium rounded-full"
            >
              Conheça Nossos Serviços
            </Button>
            <Button 
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline" 
              size="lg" 
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-8 py-3 text-lg font-medium rounded-full"
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="text-green-400 hover:text-green-300 transition-colors"
          aria-label="Rolar para baixo"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
