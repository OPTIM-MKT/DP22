import { Images } from "@/constants/images";

export interface HeroSlide {
  src: string;
  title: string;
  subtitle: string;
}

export const heroSlides: HeroSlide[] = [
  {
    src: Images[0].image.src,
    title: "Desarrollar espacios que generan valor",
    subtitle:
      "Proyectos inmobiliarios pensados para crecer con el tiempo y con quienes los habitan.",
  },
  {
    src: Images[1].image.src,
    title: "Inversión con visión a futuro",
    subtitle:
      "Ubicaciones estratégicas y diseño cuidado en cada metro cuadrado.",
  },
  {
    src: Images[2].image.src,
    title: "Confianza construida con detalle",
    subtitle:
      "Acompañamos cada etapa con transparencia y compromiso real.",
  },
  {
    src: Images[3].image.src,
    title: "Tu patrimonio, nuestro propósito",
    subtitle:
      "Desarrollos con alto potencial de plusvalía y rentabilidad.",
  },
];

export const intro = {
  eyebrow: "DP22 Desarrolladora",
  title: "Creamos valor real, no solo metros cuadrados",
  description:
    "En DP22 desarrollamos proyectos inmobiliarios con alto potencial de crecimiento. Combinamos análisis de mercado, diseño y ejecución impecable para que cada inversión genere valor real para nuestros clientes.",
  ctaLabel: "Conoce las propiedades",
  ctaHref: "/propiedades",
};

export interface ValueItem {
  icon: "trending" | "shield" | "map" | "diamond";
  title: string;
  description: string;
}

export const values: ValueItem[] = [
  {
    icon: "trending",
    title: "Plusvalía",
    description:
      "Seleccionamos zonas con crecimiento sostenido para maximizar el retorno.",
  },
  {
    icon: "map",
    title: "Ubicación",
    description:
      "Cada desarrollo nace en un punto estratégico, conectado y con futuro.",
  },
  {
    icon: "diamond",
    title: "Diseño",
    description:
      "Arquitectura sobria y funcional, pensada para perdurar y disfrutar.",
  },
  {
    icon: "shield",
    title: "Confianza",
    description:
      "Procesos claros y acompañamiento cercano en cada etapa del proyecto.",
  },
];

export const stats = [
  { value: "+12", label: "Proyectos desarrollados" },
  { value: "+150", label: "Familias acompañadas" },
  { value: "100%", label: "Enfoque en plusvalía" },
];

export const propertiesTeaser = {
  eyebrow: "Portafolio",
  title: "Propiedades seleccionadas",
  description:
    "Una muestra de los desarrollos y terrenos disponibles. Explora cada uno y solicita información.",
  ctaLabel: "Ver todas las propiedades",
  ctaHref: "/propiedades",
};

export const homeCta = {
  // Background image for the CTA section.
  bgSrc: Images[1].image.src,
  eyebrow: "Construyamos juntos",
  title: "¿Listo para invertir con visión?",
  description:
    "Agenda una conversación con nuestro equipo y descubre la propiedad ideal para ti.",
  primaryLabel: "Solicitar información",
  primaryHref: "/contacto",
  secondaryLabel: "Ver propiedades",
  secondaryHref: "/propiedades",
};
