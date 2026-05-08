"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Clock, CheckCircle2, Send, ArrowRight } from "lucide-react";

function FadeUp({ children, delay = 0, className }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}>
      {children}
    </motion.div>
  );
}

const services = [
  "Hausmeisterservice",
  "Gartenpflege",
  "Entrümpelung",
  "Elektrik",
  "Gebäudereinigung",
  "Gebäudewartung",
  "Sonstiges",
];

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [sending, setSending] = useState(false);

  const toggleService = (s: string) => {
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="container-xl relative z-10">
          <FadeUp>
            <div className="eyebrow mb-5" style={{ color: "#4ade80" }}>
              <span className="block w-5 h-0.5 bg-green-400 rounded" />
              Kontakt
            </div>
            <h1 className="heading-display text-white mb-6 max-w-3xl">
              Lassen Sie uns reden —<br />
              <span className="text-gradient">kostenlos & unverbindlich</span>
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed max-w-xl">
              Schreiben Sie uns und erhalten Sie innerhalb von 24 Stunden ein individuelles Angebot.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <FadeUp>
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <div className="eyebrow mb-5">So erreichen Sie uns</div>
                  <h2 className="heading-md text-zinc-950 mb-6">
                    Immer für Sie da
                  </h2>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-brand-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-brand-600" />
                    </div>
                    <div>
                      <div className="font-medium text-zinc-900 text-sm mb-1">E-Mail</div>
                      <a href="mailto:krc.fm@outlook.de"
                        className="text-zinc-500 text-sm hover:text-brand-600 transition-colors">
                        krc.fm@outlook.de
                      </a>
                      <div className="text-xs text-zinc-400 mt-1">Antwort innerhalb 24 Stunden</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-brand-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-brand-600" />
                    </div>
                    <div>
                      <div className="font-medium text-zinc-900 text-sm mb-1">Standort</div>
                      <div className="text-zinc-500 text-sm">Berlin, Deutschland</div>
                      <div className="text-xs text-zinc-400 mt-1">Tätig in ganz Berlin</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-brand-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-brand-600" />
                    </div>
                    <div>
                      <div className="font-medium text-zinc-900 text-sm mb-1">Öffnungszeiten</div>
                      <div className="text-zinc-500 text-sm">Mo–Fr: 07:00–18:00 Uhr</div>
                      <div className="text-zinc-500 text-sm">Sa: 08:00–14:00 Uhr</div>
                    </div>
                  </div>
                </div>

                {/* Promise */}
                <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6">
                  <div className="font-semibold text-brand-900 text-sm mb-3">Unser Versprechen</div>
                  <div className="space-y-2.5">
                    {[
                      "Antwort innerhalb von 24 Stunden",
                      "Kostenloses Angebot",
                      "Keine versteckten Kosten",
                      "Persönliche Beratung",
                    ].map((p) => (
                      <div key={p} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-brand-600 flex-shrink-0" />
                        <span className="text-brand-800 text-xs">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Form */}
            <FadeUp delay={0.15} className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mb-6 animate-pulse-ring">
                    <CheckCircle2 size={36} className="text-brand-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">
                    Anfrage gesendet!
                  </h3>
                  <p className="text-zinc-500 max-w-sm leading-relaxed">
                    Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden mit einem kostenlosen Angebot bei Ihnen.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name / Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ihr vollständiger Name"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder:text-zinc-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ihre@email.de"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder:text-zinc-400"
                      />
                    </div>
                  </div>

                  {/* Object / Address */}
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      Objekt / Adresse
                    </label>
                    <input
                      type="text"
                      placeholder="Straße, PLZ, Berlin"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder:text-zinc-400"
                    />
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-3">
                      Gewünschte Leistungen
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selected.includes(s)
                              ? "bg-brand-600 text-white"
                              : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Beschreiben Sie kurz Ihr Anliegen, die Größe Ihres Objekts und Ihre Wünsche..."
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all placeholder:text-zinc-400 resize-none"
                    />
                  </div>

                  {/* Privacy */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      id="privacy"
                      className="mt-0.5 w-4 h-4 rounded accent-brand-600 flex-shrink-0"
                    />
                    <label htmlFor="privacy" className="text-xs text-zinc-500 leading-relaxed">
                      Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                      <a href="/datenschutz" className="text-brand-600 hover:underline">
                        Datenschutzerklärung
                      </a>{" "}
                      zu. Diese Einwilligung kann jederzeit widerrufen werden.
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70"
                  >
                    {sending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        Anfrage senden
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
