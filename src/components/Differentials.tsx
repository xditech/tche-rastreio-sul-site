import { Heart, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Differentials = () => {
  const differentials = [
    {
      icon: Heart,
      title: "Atendimento que entende teu sotaque",
      description: "Aqui tu fala do teu jeito e nós entendemos. Atendimento gaúcho de verdade.",
    },
    {
      icon: Clock,
      title: "Rastreamento em tempo real, sem rodeio",
      description: "Sistema rápido e preciso. Tu vê onde teu carro tá na hora que precisar.",
    },
    {
      icon: Users,
      title: "Equipe parceira em todo o Sul",
      description: "Estamos espalhados pela região pra te atender rapidinho, onde tu estiver.",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Nossos Diferenciais</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bah, a Tchê! Rastreio é diferente mesmo!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {differentials.map((item, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg bg-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
