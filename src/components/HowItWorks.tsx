import { MapPin, Smartphone, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: Shield,
      title: "Instalação Rápida",
      description: "Agendamos com tu e instalamos o rastreador no teu carro rapidinho, sem complicação.",
    },
    {
      icon: Smartphone,
      title: "App na Palma da Mão",
      description: "Baixa o aplicativo e já tá conectado. Simples assim, tchê!",
    },
    {
      icon: MapPin,
      title: "Acompanhamento Real",
      description: "Tu vê onde teu carro tá a qualquer hora, direto do celular.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Como Funciona</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Instalou, cuidou. Tu acompanha teu carro em tempo real, sem complicação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
