import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const whatsappNumber = "5551999999999"; // Atualize com o número real
  const whatsappMessage = "Olá! Gostaria de saber mais sobre o rastreamento veicular.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer id="contato" className="bg-secondary text-secondary-foreground">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div>
            <img src={logo} alt="Tchê! Rastreio" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm opacity-90">
              Rastreamento veicular com atendimento gaúcho de verdade.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Fala com a Gente</h3>
            <div className="space-y-3">
              <a 
                href={`mailto:contato@tcherastreio.com.br`}
                className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Mail className="h-4 w-4" />
                contato@tcherastreio.com.br
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Phone className="h-4 w-4" />
                (51) 99999-9999
              </a>
              <div className="flex items-center gap-2 text-sm opacity-90">
                <MapPin className="h-4 w-4" />
                Região Sul do Brasil
              </div>
            </div>
          </div>

          {/* CTA WhatsApp */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quer Falar Agora?</h3>
            <Button 
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chamar no WhatsApp
            </Button>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>© 2025 Tchê! Rastreio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
