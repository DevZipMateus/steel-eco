
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/824c7f25-b118-414b-b132-d8d6bf41c31e.png" 
                alt="Steel Eco Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Criada para atuar na fabricação e comercialização de metálicos para a construção civil, 
              desenvolvendo soluções sustentáveis.
            </p>
            <p className="text-green-400 font-medium">
              "Com certeza, em algum lugar do Brasil, você viu uma obra executada por nós!"
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="text-gray-300 hover:text-green-400 transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sobre')} className="text-gray-300 hover:text-green-400 transition-colors">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicos')} className="text-gray-300 hover:text-green-400 transition-colors">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('parceiros')} className="text-gray-300 hover:text-green-400 transition-colors">
                  Parceiros
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className="text-gray-300 hover:text-green-400 transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Brises</li>
              <li>Fachadas</li>
              <li>Fachadas Ventiladas</li>
              <li>Forros Metálicos</li>
              <li>Steel Frame</li>
              <li>Drywall</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Setor de Inflamáveis - Chácara FP As Chagas Nº 19<br />
                  Conjunto B - Guará - Brasília - DF<br />
                  CEP: 71.255-000
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <a href="tel:+5561991076550" className="text-gray-300 hover:text-green-400 transition-colors">
                  (61) 9 9107-6550
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <a href="mailto:sheila.steeleco@gmail.com" className="text-gray-300 hover:text-green-400 transition-colors">
                  sheila.steeleco@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-green-400" />
                <a href="https://instagram.com/steeleco_metalicos" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                  @steeleco_metalicos
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Steel Eco Produtos Metálicos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
