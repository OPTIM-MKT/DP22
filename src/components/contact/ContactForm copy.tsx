"use client";

import { actions } from "astro:actions";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "sonner";
import {
  contactSchema,
  type ContactFormData,
  INTERES_OPTIONS,
} from "./contact.schema";
import { FiLoader, FiSend } from "react-icons/fi";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      const { data: responseData, error } = await actions.send(data);

      if (error) {
        throw new Error(error.message || "Error al enviar el formulario.");
      }

      toast.success("¡Mensaje enviado con éxito! 🎉", {
        description: "Nos pondremos en contacto contigo pronto.",
        duration: 6000,
      });
      reset();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Error al enviar el formulario.";
      toast.error("No se pudo enviar el mensaje", {
        description: message,
        duration: 6000,
      });
    }
  };

  const inputClass =
    "w-full rounded-xl border border-border dark:bg-ash/10 dark:text-white bg-bone px-4 py-3.5 text-sm text-ink placeholder:text-ash outline-none transition-all duration-200 focus:border-primary dark:focus:border-secondary focus:ring-2 focus:ring-primary/10";
  const labelClass =
    "mb-2 block text-xs font-semibold tracking-[0.1em] text-ink/70 uppercase dark:text-white/70";
  const errorClass = "text-red-500 text-xs mt-1 block";

  return (
    <>
      <Toaster
        position="bottom-center"
        theme="system"
        richColors
        closeButton
        toastOptions={{
          style: {
            fontFamily: "var(--font-body)",
            borderRadius: "12px",
          },
        }}
      />

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className={labelClass} style={{ fontFamily: "var(--font-body)" }}>
              Nombre completo
              <span className="text-secondary ml-1">*</span>
            </label>
            <input
              type="text"
              id="nombre"
              placeholder="Tu nombre completo"
              className={inputClass}
              style={{ fontFamily: "var(--font-body)" }}
              {...register("nombre")}
            />
            {errors.nombre && (
              <span className={errorClass}>{errors.nombre.message}</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClass} style={{ fontFamily: "var(--font-body)" }}>
              Correo electrónico
              <span className="text-secondary ml-1">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="tu@email.com"
              className={inputClass}
              style={{ fontFamily: "var(--font-body)" }}
              {...register("email")}
            />
            {errors.email && (
              <span className={errorClass}>{errors.email.message}</span>
            )}
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="telefono" className={labelClass} style={{ fontFamily: "var(--font-body)" }}>
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              placeholder="Tu número de teléfono"
              className={inputClass}
              style={{ fontFamily: "var(--font-body)" }}
              {...register("telefono")}
            />
            {errors.telefono && (
              <span className={errorClass}>{errors.telefono.message}</span>
            )}
          </div>

          {/* Interés */}
          <div>
            <label htmlFor="interes" className={labelClass} style={{ fontFamily: "var(--font-body)" }}>
              Categoría o Producto de interés
            </label>
            <select
              id="interes"
              className={inputClass}
              style={{ fontFamily: "var(--font-body)" }}
              {...register("interes")}
              defaultValue=""
            >
              <option value="" disabled>Selecciona una opción</option>
              {INTERES_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.interes && (
              <span className={errorClass}>{errors.interes.message}</span>
            )}
          </div>

          {/* Asunto */}
          <div className="sm:col-span-2">
            <label htmlFor="asunto" className={labelClass} style={{ fontFamily: "var(--font-body)" }}>
              Asunto
            </label>
            <input
              type="text"
              id="asunto"
              placeholder="¿En qué podemos ayudarte?"
              className={inputClass}
              style={{ fontFamily: "var(--font-body)" }}
              {...register("asunto")}
            />
            {errors.asunto && (
              <span className={errorClass}>{errors.asunto.message}</span>
            )}
          </div>
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="mensaje" className={labelClass} style={{ fontFamily: "var(--font-body)" }}>
            Mensaje
          </label>
          <textarea
            id="mensaje"
            rows={5}
            placeholder="Describe tu proyecto o consulta..."
            className={`${inputClass} resize-none`}
            style={{ fontFamily: "var(--font-body)" }}
            {...register("mensaje")}
          />
          {errors.mensaje && (
            <span className={errorClass}>{errors.mensaje.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-3 rounded-full dark:bg-secondary-dark dark:hover:bg-secondary bg-primary px-8 py-4 text-sm font-semibold tracking-[0.15em] text-ink uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-xl cursor-pointer disabled:opacity-60 disabled:pointer-events-none"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {isSubmitting ? (
            <>
              <FiLoader className="animate-spin" size={16} />
              Enviando...
            </>
          ) : (
            <>
              Enviar mensaje
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </>
          )}
        </button>
      </form>
    </>
  );
}
