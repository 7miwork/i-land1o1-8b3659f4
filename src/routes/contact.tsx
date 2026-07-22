import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { useT } from "@/i18n";
import { SITE } from "@/config/site";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  child: z.string().trim().min(1).max(30),
  message: z.string().trim().min(5).max(1000),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Coding Classes Germany | I-Land Coding Academy" },
      { name: "description", content: "Contact I-Land Coding Academy about kids' Minecraft coding classes in Germany, Austria, Switzerland and Taiwan." },
      { property: "og:title", content: "Contact I-Land Coding Academy" },
      { property: "og:description", content: "Get in touch with our crew about our kids' coding classes." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useT();
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      child: fd.get("child"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    // Placeholder submit — replace with server function + email provider when ready
    await new Promise((r) => setTimeout(r, 500));
    setStatus("ok");
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <div className="bg-parchment">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center">
          <h1 className="font-display text-4xl text-wood-dark md:text-5xl">{t("contact.title")}</h1>
          <p className="mx-auto mt-3 text-foreground/70">{t("contact.subtitle")}</p>
          <p className="mt-2 text-sm text-foreground/60">or email {SITE.email}</p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-10 space-y-4 rounded-3xl border-2 border-wood-dark/20 bg-white p-6 shadow-lg md:p-8"
          noValidate
        >
          <Field label={t("contact.name")} name="name" err={errors.name} />
          <Field label={t("contact.email")} name="email" type="email" err={errors.email} />
          <Field label={t("contact.child")} name="child" err={errors.child} />
          <div>
            <label className="text-sm font-semibold text-wood-dark">{t("contact.message")}</label>
            <textarea
              name="message"
              rows={5}
              required
              maxLength={1000}
              className="mt-1 w-full rounded-xl border-2 border-wood-dark/20 bg-parchment/40 p-3 text-sm outline-none focus:border-sea"
            />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gold px-6 py-3 font-bold text-wood-dark ring-2 ring-wood-dark hover:scale-[1.01]"
          >
            📜 {t("contact.send")}
          </button>

          {status === "ok" && (
            <p className="rounded-xl bg-grass/20 p-3 text-center text-sm font-semibold text-wood-dark">
              {t("contact.sent")}
            </p>
          )}
          {status === "err" && (
            <p className="rounded-xl bg-destructive/10 p-3 text-center text-sm font-semibold text-destructive">
              {t("contact.error")}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  err,
}: {
  label: string;
  name: string;
  type?: string;
  err?: string;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-wood-dark">{label}</label>
      <input
        type={type}
        name={name}
        required
        className="mt-1 w-full rounded-xl border-2 border-wood-dark/20 bg-parchment/40 p-3 text-sm outline-none focus:border-sea"
      />
      {err && <p className="mt-1 text-xs text-destructive">{err}</p>}
    </div>
  );
}
