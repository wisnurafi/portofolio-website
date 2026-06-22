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
    <form className="comic-form" onSubmit={handleSubmit}>
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="comic-field">
          <span>Name</span>
          <input
            name="name"
            required
            minLength={2}
            maxLength={120}
            placeholder="Your name"
            autoComplete="name"
          />
        </label>

        <label className="comic-field">
          <span>Email</span>
          <input
            name="email"
            required
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
      </div>

      <label className="comic-field">
        <span>Subject</span>
        <input
          name="subject"
          maxLength={160}
          placeholder="What should I look at?"
        />
      </label>

      <label className="comic-field">
        <span>Message</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={6}
          placeholder="Tell me what happened, where it runs, and what you already tried."
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          className="inline-flex items-center justify-center gap-2 border-2 border-zinc-950 bg-lime-300 px-5 py-3 text-sm font-black uppercase text-zinc-950 shadow-[5px_5px_0_#020617] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          type="submit"
          disabled={state === "sending"}
        >
          <Send className="h-4 w-4" />
          {state === "sending" ? "Sending..." : "Send message"}
        </button>

        <p className="min-h-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-zinc-300">
          {state === "sent" && "Message sent. Check your inbox soon."}
          {state === "error" && error}
        </p>
      </div>
    </form>
  );
}
