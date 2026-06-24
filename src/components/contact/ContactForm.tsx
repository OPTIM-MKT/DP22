import { useState, type FormEvent } from "react";
import { Toaster, toast } from "sonner";
import { contactForm } from "@/constants/contact";

interface Option {
  value: string;
  label: string;
}

interface Props {
  properties?: Option[];
  defaultProperty?: string;
}

const fieldBase =
  "w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-secondary focus:outline-none transition-colors";

export default function ContactForm({
  properties = [],
  defaultProperty = "",
}: Props) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Front-end only — no submission. Provide friendly feedback.
    setSent(true);
    toast.success("¡Gracias! Te contactaremos muy pronto.");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Toaster position="top-center" richColors />

      <div className="grid gap-4 sm:grid-cols-2">
        {contactForm.fields
          .filter((f) => f.type !== "textarea" && f.type !== "select")
          .map((f) => (
            <div key={f.name}>
              <label
                htmlFor={f.name}
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted"
              >
                {f.label}
              </label>
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                required={f.required}
                placeholder={f.placeholder}
                className={fieldBase}
              />
            </div>
          ))}
      </div>

      {/* Property select */}
      <div>
        <label
          htmlFor="property"
          className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted"
        >
          Propiedad de interés
        </label>
        <select
          id="property"
          name="property"
          defaultValue={defaultProperty}
          className={fieldBase}
        >
          <option value="">Selecciona una opción</option>
          {properties.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
          <option value="otra">Otra / Asesoría general</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Me gustaría recibir más información sobre…"
          className={fieldBase}
        />
      </div>

      <button
        type="submit"
        disabled={sent}
        className="w-full rounded-full bg-primary px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
      >
        {sent ? "Enviado ✓" : contactForm.submitLabel}
      </button>
    </form>
  );
}
