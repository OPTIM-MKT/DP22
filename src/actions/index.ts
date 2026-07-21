import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";
import { getCollection } from "astro:content";
import { contactSchema } from "@/components/contact/contact.schema";
import { EmailTemplate } from "@/components/contact/email-template";
import { renderToString } from "react-dom/server";
import React from "react";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: "json",
    input: contactSchema,
    handler: async (data) => {
      // ── 1. Resolve property name from content collection ──────────────────────
      let interesLabel: string | undefined;
      if (data.interes) {
        if (data.interes === "otra") {
          interesLabel = "Otra / Asesoría general";
        } else {
          const propiedades = await getCollection("propiedades");
          const found = propiedades.find((p) => p.id === data.interes);
          interesLabel = found?.data.name ?? data.interes;
        }
      }

      // ── 2. Render React component to HTML string ─────────────────────────────
      // We render it to HTML manually to avoid Resend requiring @react-email/render
      const htmlOutput = renderToString(
        React.createElement(EmailTemplate, {
          ...data,
          interesLabel,
        }),
      );

      // ── 3. Send email via Resend ─────────────────────────────────────────────
      const { data: resendData, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["arturo.mendez@dp22.mx"],
        replyTo: data.email,
        subject: `Nuevo contacto: ${data.nombre}${interesLabel ? ` — ${interesLabel}` : ""}`,
        html: htmlOutput,
      });

      if (error) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: error.message,
        });
      }

      return { success: true, id: resendData?.id };
    },
  }),
};
