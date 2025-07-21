
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PartnersSection from "@/components/PartnersSection";
import OtherWorksSection from "@/components/OtherWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <div id="inicio" className="w-full">
          <HeroSection />
        </div>
        <div id="sobre" className="w-full">
          <AboutSection />
        </div>
        <div id="servicos" className="w-full">
          <ServicesSection />
        </div>
        <div id="parceiros" className="w-full">
          <PartnersSection />
        </div>
        <div id="outras-obras" className="w-full">
          <OtherWorksSection />
        </div>
        <div id="depoimentos" className="w-full">
          <TestimonialsSection />
        </div>
        <div id="localizacao" className="w-full">
          <LocationSection />
        </div>
        <div id="contato" className="w-full">
          <ContactForm />
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
