export interface Route {
  label: string;
  href: string;
}

export const routes: Route[] = [
  { label: "Inicio", href: "/" },
  { label: "Propiedades", href: "/propiedades" },
  { label: "Nosotros", href: "/acerca" },
  { label: "Contacto", href: "/contacto" },
];

export const cta: Route = { label: "Solicitar información", href: "/contacto" };
