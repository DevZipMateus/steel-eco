import { useEffect, useRef } from 'react';
import { ArrowDown, Building2, Leaf, Award, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn');
      }
    }, {
      threshold: 0.1
    });
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
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
      backgroundImage: "url('/lovable-uploads/1144f265-797e-4a73-a76e-e2bea0d81d3e.png')"
    }}></div>

      <div className="container mx-auto px-4 z-20 text-center" ref={sectionRef}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-4 flex justify-center mt-16 md:mt-20">
            <img src="/lovable-uploads/df5c8629-6d91-40e2-9b95-ea2041f809bc.png" alt="Steel Eco - Tecnologia Steel-Frame" className="h-32 md:h-40 lg:h-48 w-auto" />
          </div>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-green-400 font-medium">
            Com certeza, em algum lugar do Brasil,<br />
            você viu uma obra executada por nós!
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
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
            <Button onClick={scrollToAbout} size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium rounded-full">
              Conheça Nossos Serviços
            </Button>
            <Button onClick={() => {
            const element = document.getElementById('contato');
            if (element) element.scrollIntoView({
              behavior: 'smooth'
            });
          }} variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-8 py-3 text-lg font-medium rounded-full">
              Entre em Contato
            </Button>
            <Button onClick={() => window.open('https://www.instagram.com/steeleco_metalicos/', '_blank')} variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-6 py-3 text-lg font-medium rounded-full flex items-center gap-2">
              <Instagram className="w-5 h-5" />
              Instagram
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button onClick={scrollToAbout} className="text-green-400 hover:text-green-300 transition-colors" aria-label="Rolar para baixo">
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>
    </section>;
};
export default HeroSection;
