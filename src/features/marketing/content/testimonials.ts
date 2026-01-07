export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  result?: string;
};

export const testimonials = [
  {
    quote:
      "A entrega foi extremamente organizada, com foco em performance e conversão. O processo foi claro do início ao fim.",
    name: "Cliente (autorização recomendada)",
    role: "Gestão",
    company: "Projeto de Landing Page",
    result: "Melhora de clareza e velocidade de publicação",
  },
] satisfies Testimonial[];
