"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type FormState = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Could not send the message.");
      }

      form.reset();
      setState("sent");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Could not send the message.");
    }
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="font-mono text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
            Name
          </span>
          <input
            name="name"
            required
            minLength={2}
            maxLength={120}
            placeholder="Your name"
            autoComplete="name"
            className="w-full border border-border bg-muted px-4 py-3 font-mono text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-amber/50 focus:bg-card"
          />
        </label>

        <label className="grid gap-2">
          <span className="font-mono text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
            Email
          </span>
          <input
            name="email"
            required
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className="w-full border border-border bg-muted px-4 py-3 font-mono text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-amber/50 focus:bg-card"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="font-mono text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
          Subject
        </span>
        <input
          name="subject"
          maxLength={160}
          placeholder="What do you want to talk about?"
          className="w-full border border-border bg-muted px-4 py-3 font-mono text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-amber/50 focus:bg-card"
        />
      </label>

      <label className="grid gap-2">
        <span className="font-mono text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
          Message
        </span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={6}
          placeholder="Give me the short version first. What happened, where it runs, and what you need from me."
          className="w-full resize-y border border-border bg-muted px-4 py-3 font-mono text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-amber/50 focus:bg-card"
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex items-center justify-center gap-2 border border-amber/40 bg-amber/10 px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.14em] text-amber transition-all hover:-translate-y-0.5 hover:border-amber hover:bg-amber hover:text-background hover:shadow-[0_0_24px_-6px_rgba(201, 151, 63,0.35)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          <Send className="h-4 w-4" />
          {state === "sending" ? "Sending..." : "Send message"}
        </button>

        <p className="min-h-6 font-mono text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
          {state === "sent" && "Message sent. I will get back to you."}
          {state === "error" && error}
        </p>
      </div>
    </form>
  );
}
