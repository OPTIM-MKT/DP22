import { Images } from "@/constants/images";

export const acercaHero = {
  eyebrow: "Nosotros",
  title: "Somos DP22",
  description:
    "Una desarrolladora enfocada en crear proyectos inmobiliarios con alto potencial de crecimiento, diseñados para generar valor real a nuestros clientes.",
  image: Images[2].image.src,
};

export const story = {
  eyebrow: "Nuestra historia",
  title: "Inversión inmobiliaria hecha con criterio",
  paragraphs: [
    "Nacimos con una convicción simple: cada proyecto debe generar valor real. No construimos por construir; analizamos el mercado, elegimos ubicaciones con futuro y cuidamos cada detalle del diseño y la ejecución.",
    "Acompañamos a nuestros clientes con transparencia, desde la primera conversación hasta la entrega. Para nosotros, la confianza es el cimiento de cualquier inversión.",
  ],
  image: Images[3].image.src,
};

export interface Pillar {
  title: string;
  description: string;
}

export const mission: Pillar = {
  title: "Misión",
  description:
    "Desarrollar proyectos inmobiliarios rentables y bien diseñados que generen valor real y duradero para nuestros clientes.",
};

export const vision: Pillar = {
  title: "Visión",
  description:
    "Ser la desarrolladora de referencia en el noreste de México por la calidad, la plusvalía y la confianza de nuestros desarrollos.",
};

export const valuesAbout: Pillar[] = [
  {
    title: "Transparencia",
    description: "Procesos claros y comunicación honesta en cada etapa.",
  },
  {
    title: "Excelencia",
    description: "Cuidamos el detalle en diseño, materiales y ejecución.",
  },
  {
    title: "Compromiso",
    description: "Acompañamos a cada cliente como un socio a largo plazo.",
  },
];

export const aboutCta = {
  title: "Conoce nuestras propiedades",
  description:
    "Explora los desarrollos y terrenos disponibles, o escríbenos para una asesoría personalizada.",
  primaryLabel: "Ver propiedades",
  primaryHref: "/propiedades",
  secondaryLabel: "Contactar",
  secondaryHref: "/contacto",
};
