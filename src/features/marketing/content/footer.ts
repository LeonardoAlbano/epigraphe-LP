export const footerContent = {
  brand: {
    name: "Epigraphe",
    tagline: "Escrevemos como artesãos. Entregamos como engenheiros.",
  },
  columns: [
    {
      title: "Navegação",
      links: [
        { label: "Serviços", href: "#servicos" },
        { label: "Planos", href: "#planos" },
        { label: "Cases", href: "#cases" },
        { label: "Processo", href: "#processo" },
        { label: "FAQ", href: "#faq" },
        { label: "Contato", href: "#contato" },
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
    copyright: `© ${new Date().getFullYear()} Epigraphe. Todos os direitos reservados.`,
    links: [
      { label: "Privacidade", href: "#" },
      { label: "Termos", href: "#" },
    ],
  },
} as const;
