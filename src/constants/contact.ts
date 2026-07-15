export const site = {
  name: "DP22",
  defaultTitle: "DP22 — Desarrolladora Inmobiliaria",
  defaultDescription:
    "Desarrollamos proyectos inmobiliarios con alto potencial de crecimiento, diseñados para generar valor real a nuestros clientes.",
} as const;

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: "phone" | "mail" | "pin";
}

export const contact = {
  eyebrow: "Contacto",
  title: "Hablemos de tu próxima inversión",
  description:
    "Cuéntanos qué propiedad te interesa y nuestro equipo te acompañará en cada paso.",
  address: "Media Luna 100, San Pedro, El Cercado, México, 67328",
  phone: "81 1761 4936",
  phoneHref: "tel:+528117614936",
  email: "ventas@dp22.mx",
  emailHref: "mailto:ventas@dp22.mx",
  whatsappHref: "https://wa.me/528117614936",
  mapEmbed:
    "https://www.google.com/maps?q=Media%20Luna%20100%2C%20San%20Pedro%2C%20El%20Cercado%2C%2067328&output=embed",
} as const;

export const contactChannels: ContactChannel[] = [
  {
    label: "Teléfono",
    value: contact.phone,
    href: contact.phoneHref,
    icon: "phone",
  },
  {
    label: "Correo",
    value: contact.email,
    href: contact.emailHref,
    icon: "mail",
  },
  {
    label: "Dirección",
    value: contact.address,
    href: "https://maps.google.com/?q=Media+Luna+100,+San+Pedro,+El+Cercado,+67328",
    icon: "pin",
  },
];

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  placeholder: string;
  required?: boolean;
}

export const contactForm = {
  submitLabel: "Solicitar información",
  fields: [
    {
      name: "name",
      label: "Nombre",
      type: "text",
      placeholder: "Tu nombre completo",
      required: true,
    },
    {
      name: "phone",
      label: "Teléfono",
      type: "tel",
      placeholder: "81 0000 0000",
      required: true,
    },
    {
      name: "email",
      label: "Correo",
      type: "email",
      placeholder: "tucorreo@ejemplo.com",
      required: true,
    },
    {
      name: "property",
      label: "Propiedad de interés",
      type: "select",
      placeholder: "Selecciona una opción",
    },
    {
      name: "message",
      label: "Mensaje",
      type: "textarea",
      placeholder: "Me gustaría recibir más información sobre…",
    },
  ] satisfies FormField[],
} as const;
