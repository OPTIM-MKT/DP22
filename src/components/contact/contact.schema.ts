import { z } from "zod";

export const INTERES_OPTIONS = [
  { value: "Construcción", label: "Construcción" },
  { value: "Herramienta", label: "Herramienta" },
  { value: "Plomería & Gas", label: "Plomería & Gas" },
  { value: "Eléctrico e Iluminación", label: "Eléctrico e Iluminación" },
  { value: "Mantenimiento", label: "Mantenimiento" },
  { value: "Hogar & Oficina", label: "Hogar & Oficina" },
  { value: "Acabados", label: "Acabados" },
  { value: "Jardín & Alberca", label: "Jardín & Alberca" },
  { value: "Autos y motocicletas", label: "Autos y motocicletas" },
  { value: "Otro", label: "Otro / Consulta general" },
] as const;

export const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre es obligatorio"),
  email: z.string().email("Correo electrónico inválido").min(1, "El correo electrónico es obligatorio"),
  telefono: z.string().min(7, "El teléfono es obligatorio"),
  interes: z.string().optional().or(z.literal("")),
  mensaje: z.string().optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export function getLabelByValue<
  T extends readonly { value: string; label: string }[],
>(options: T, value?: string): string {
  if (!value) return "";
  return options.find((o) => o.value === value)?.label ?? value;
}
