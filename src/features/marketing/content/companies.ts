export type CompanyItem = {
  name: string;
  alt?: string;
  logoSrc?: string;
};

export const companiesContent = {
  title: "Empresas do Brasil e da Europa que confiam no nosso trabalho",
  subtitle: "Experiência em projetos no Brasil e na Europa, com foco em clareza, performance e conversão.",
  items: [
    { name: "BWL.O (PT)", alt: "BWL.O Portugal", logoSrc: "/brands/bwlo-pt.svg" },
    { name: "Soluções por cm²", alt: "Soluções por cm²", logoSrc: "/brands/cm2.svg" },
    { name: "Maleski Detailing", alt: "Maleski Detailing", logoSrc: "/brands/maleski-detailing.svg" },
    { name: "O Camaleão", alt: "O Camaleão", logoSrc: "/brands/o-camaleao.svg" },
    { name: "OM Desenv", alt: "OM Desenvolvimento", logoSrc: "/brands/om-desenv.svg" },
  ],
} satisfies {
  title: string;
  subtitle: string;
  items: CompanyItem[];
};
