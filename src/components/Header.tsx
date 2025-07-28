
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, Instagram } from 'lucide-react';
import { useMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const isMobile = useMobile();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      const sections = ['inicio', 'sobre', 'servicos', 'parceiros', 'outras-obras', 'depoimentos', 'localizacao', 'contato'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInViewport = rect.top <= 300 && rect.bottom >= 300;
          if (isInViewport) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  const getLinkColor = (section: string) => {
    if (activeSection === section) {
      return 'text-green-600';
    }
    return `${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-green-500`;
  };
  
  const getMenuButtonColor = () => {
    return isScrolled ? 'text-gray-700' : 'text-white';
  };
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-black/20 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <button onClick={() => scrollToSection('inicio')} className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/824c7f25-b118-414b-b132-d8d6bf41c31e.png" 
              alt="Steel Eco Logo" 
              className="h-12 w-auto"
            />
          </button>
          
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              <li>
                <button onClick={() => scrollToSection('inicio')} className={`text-sm font-medium ${getLinkColor('inicio')} transition-colors duration-300`}>
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sobre')} className={`text-sm font-medium ${getLinkColor('sobre')} transition-colors duration-300`}>
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicos')} className={`text-sm font-medium ${getLinkColor('servicos')} transition-colors duration-300`}>
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('parceiros')} className={`text-sm font-medium ${getLinkColor('parceiros')} transition-colors duration-300`}>
                  Parceiros
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('outras-obras')} className={`text-sm font-medium ${getLinkColor('outras-obras')} transition-colors duration-300`}>
                  Projetos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('depoimentos')} className={`text-sm font-medium ${getLinkColor('depoimentos')} transition-colors duration-300`}>
                  Depoimentos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('localizacao')} className={`text-sm font-medium ${getLinkColor('localizacao')} transition-colors duration-300`}>
                  Localização
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className={`text-sm font-medium ${getLinkColor('contato')} transition-colors duration-300`}>
                  Contato
                </button>
              </li>
            </ul>
          </nav>
          
          <button 
            className={`block lg:hidden ${getMenuButtonColor()} hover:text-green-500 transition-colors`} 
            onClick={toggleMenu} 
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && isMobile && (
        <div className="fixed inset-0 bg-white z-50 pt-20 shadow-xl">
          <div className="container mx-auto px-4 bg-white min-h-screen">
            <nav className="bg-white">
              <ul className="flex flex-col space-y-4">
                <li>
                  <button onClick={() => scrollToSection('inicio')} className="text-lg font-medium text-gray-700 hover:text-green-600 block py-2 transition-colors w-full text-left bg-white">
                    Início
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('sobre')} className="text-lg font-medium text-gray-700 hover:text-green-600 block py-2 transition-colors w-full text-left bg-white">
                    Sobre
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('servicos')} className="text-lg font-medium text-gray-700 hover:text-green-600 block py-2 transition-colors w-full text-left bg-white">
                    Serviços
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('parceiros')} className="text-lg font-medium text-gray-700 hover:text-green-600 block py-2 transition-colors w-full text-left bg-white">
                    Parceiros
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('outras-obras')} className="text-lg font-medium text-gray-700 hover:text-green-600 block py-2 transition-colors w-full text-left bg-white">
                    Projetos
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('depoimentos')} className="text-lg font-medium text-gray-700 hover:text-green-600 block py-2 transition-colors w-full text-left bg-white">
                    Depoimentos
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('localizacao')} className="text-lg font-medium text-gray-700 hover:text-green-600 block py-2 transition-colors w-full text-left bg-white">
                    Localização
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contato')} className="text-lg font-medium text-gray-700 hover:text-green-600 block py-2 transition-colors w-full text-left bg-white">
                    Contato
                  </button>
                </li>
              </ul>
            </nav>
            
            <div className="mt-8 border-t border-gray-100 pt-6 bg-white">
              <h3 className="text-sm font-semibold text-gray-600 mb-4">Contato</h3>
              <div className="flex flex-col space-y-3">
                <a href="mailto:sheila.steeleco@gmail.com" className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                  <Mail className="w-4 h-4 mr-2 text-green-600" />
                  sheila.steeleco@gmail.com
                </a>
                <a href="tel:+5561991076550" className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                  <Phone className="w-4 h-4 mr-2 text-green-600" />
                  (61) 9 9107-6550
                </a>
              </div>
            </div>
            
            <div className="mt-6 bg-white">
              <h3 className="text-sm font-semibold text-gray-600 mb-4">Siga-nos</h3>
              <div className="flex space-x-3">
                <a href="https://instagram.com/steeleco_metalicos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <button 
              onClick={toggleMenu} 
              className="absolute top-4 right-4 p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
