export const propiedadesPage = {
  eyebrow: "Portafolio",
  title: "Propiedades disponibles",
  description:
    "Explora nuestros desarrollos, casas y terrenos. Filtra por tipo o busca por nombre y ubicación.",
  searchPlaceholder: "Buscar por nombre o ubicación…",
  emptyState: "No encontramos propiedades con esos criterios.",
};

export type PropertyType =
  | "casa"
  | "terreno"
  | "departamento"
  | "venta"
  | "preventa";

export type PropertyStatus =
  | "disponible"
  | "reservado"
  | "vendido"
  | "rentado";

export interface FilterOption {
  value: PropertyType | "todos";
  label: string;
}

export const typeFilters: FilterOption[] = [
  { value: "todos", label: "Todos" },
  { value: "casa", label: "Casas" },
  { value: "departamento", label: "Departamentos" },
  { value: "terreno", label: "Terrenos" },
  { value: "preventa", label: "Preventa" },
  { value: "venta", label: "Venta" },
];

export const typeLabels: Record<PropertyType, string> = {
  casa: "Casa",
  terreno: "Terreno",
  departamento: "Departamento",
  venta: "Venta",
  preventa: "Preventa",
};

export const statusMeta: Record<
  PropertyStatus,
  { label: string; available: boolean }
> = {
  disponible: { label: "Disponible", available: true },
  reservado: { label: "Reservado", available: false },
  vendido: { label: "Vendido", available: false },
  rentado: { label: "Rentado", available: false },
};

export const formatPrice = (price?: number) =>
  typeof price === "number"
    ? new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
        maximumFractionDigits: 0,
      }).format(price)
    : "Precio a consultar";
