import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const propiedades = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/propiedades" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      Image: image(),
      description: z.string(),
      type: z.enum(["casa", "terreno", "departamento", "venta", "preventa"]),
      price: z.number().optional(),
      location: z.string().optional(),
      size: z.number().optional(),
      bedrooms: z.number().optional(),
      bathrooms: z.number().optional(),
      parking: z.number().optional(),
      gallery: z.array(z.string()).optional(),
      galleryName: z.string().optional(),
      amenities: z.array(z.string()).optional(),
      video: z.string().optional(),
      map: z.string().optional(),
      featured: z.boolean().optional(),
      status: z.enum(["disponible", "reservado", "vendido", "rentado"]),
    }),
});

export const collections = { propiedades };
