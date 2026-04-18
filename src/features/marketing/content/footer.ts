export const footerContent = {
  brand: {
    name: "Epigraphe Atelier Code",
    tagline: "Escrevemos como artesãos. Entregamos como engenheiros.",
  },
  columns: [
    {
      title: "Navegação",
      links: [
        { label: "Início", href: "#inicio" },
        { label: "Problema", href: "#problema" },
        { label: "Solução", href: "#solucao" },
        { label: "Projetos", href: "#projetos" },
        { label: "Cases", href: "/cases" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Contato",
      links: [
        { label: "Agendar diagnóstico", href: "#contato" },
        { label: "Falar no WhatsApp", href: "https://wa.me/5599999999999" },
        { label: "Email", href: "mailto:contato@epigraphe.com" },
      ],
    },
  ],
  bottom: {
    copyright: `© ${new Date().getFullYear()} Epigraphe Atelier Code. Todos os direitos reservados. Feito com capricho artesanal e tecnologia robusta.`,
    links: [
      { label: "Privacidade", href: "#" },
      { label: "Termos", href: "#" },
    ],
  },
} as const;
