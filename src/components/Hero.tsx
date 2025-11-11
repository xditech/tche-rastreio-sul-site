import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-road.jpg";

const Hero = () => {
  const whatsappNumber = "5551999999999"; // Atualize com o número real
  const whatsappMessage = "Olá! Gostaria de saber mais sobre o rastreamento veicular.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})` 
        }}
      />
      
      <div className="container relative z-10 px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Com a Tchê! Rastreio, tu segue tranquilo, bagual.
          <br />
          <span className="text-primary">Aqui teu carro tá sempre seguro.</span>
        </h1>
        
        <Button 
          size="lg" 
          className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Falar com um consultor
        </Button>
      </div>
    </section>
  );
};

export default Hero;
