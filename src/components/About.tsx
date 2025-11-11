import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary">
            Sobre a Tchê! Rastreio
          </h2>
          
          <Card className="border-2 border-primary/20 shadow-xl">
            <CardContent className="pt-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                A <span className="font-semibold text-primary">Tchê! Rastreio</span> nasceu aqui no Sul 
                pra cuidar dos nossos carros e das nossas estradas. A gente acredita que segurança e 
                confiança andam juntas, e que o atendimento parceiro faz toda diferença.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Pode confiar, tchê — <span className="font-semibold text-secondary">aqui o cuidado é de casa</span>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
