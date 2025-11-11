import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Bah, agora durmo tranquilo sabendo onde tá meu carro.",
      author: "João Silva",
      location: "Porto Alegre, RS",
    },
    {
      text: "Bueno, instalação rápida e atendimento nota mil.",
      author: "Maria Santos",
      location: "Caxias do Sul, RS",
    },
    {
      text: "Os guris da Tchê! Rastreio são parceiros de verdade.",
      author: "Carlos Oliveira",
      location: "Pelotas, RS",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">O Que Dizem Nossos Clientes</h2>
          <p className="text-xl text-muted-foreground">
            Tchê, olha só o que a galera tá falando!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
