"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Star, Quote, ArrowRight, MapPin } from "lucide-react";

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

const testimonials = [
  {
    name: "Michael Bauer",
    role: "Hausverwaltung GmbH",
    location: "Berlin Mitte",
    rating: 5,
    service: "Hausmeisterservice",
    text: "KRC Facility Management betreut unsere Anlage mit 48 Wohneinheiten seit drei Jahren. Das Team ist immer pünktlich, professionell und kümmert sich um alles, was anfällt. Wir sind absolut begeistert und haben bereits drei weitere Objekte übergeben.",
  },
  {
    name: "Sandra Hoffmann",
    role: "Privatkundin",
    location: "Berlin Prenzlauer Berg",
    rating: 5,
    service: "Entrümpelung",
    text: "Nach dem Tod meiner Mutter musste ich die Wohnung innerhalb weniger Wochen räumen. KRC hat alles übernommen — sensibel, professionell und zu einem fairen Preis. Ich bin sehr dankbar für die tolle Arbeit.",
  },
  {
    name: "Thomas Richter",
    role: "Gewerbeimmobilien AG",
    location: "Berlin Charlottenburg",
    rating: 5,
    service: "Gebäudewartung",
    text: "Als verantwortlicher Manager für sechs Bürogebäude in Berlin bin ich auf absolut verlässliche Partner angewiesen. KRC hat noch nie enttäuscht — immer erreichbar, immer professionell, immer auf den Punkt.",
  },
  {
    name: "Anna Weber",
    role: "WEG-Verwalterin",
    location: "Berlin Friedrichshain",
    rating: 5,
    service: "Gartenpflege & Reinigung",
    text: "Die Gartenpflege und Treppenhausreinigung durch KRC hat unsere Anlage in ein anderes Licht gerückt. Die Eigentümer sind begeistert, die Qualität konstant auf hohem Niveau. Klare Empfehlung!",
  },
  {
    name: "Klaus Müller",
    role: "Privatvermieter",
    location: "Berlin Neukölln",
    rating: 5,
    service: "Elektrik",
    text: "Schnell, kompetent und sauber. Die Elektriker von KRC haben die komplette Neuinstallation in meinem Mietshaus termingerecht und ohne Probleme abgewickelt. Sehr zu empfehlen.",
  },
  {
    name: "Maria Schmidt",
    role: "Unternehmerin",
    location: "Berlin Steglitz",
    rating: 5,
    service: "Gebäudereinigung",
    text: "Unsere Büroräume werden von KRC wöchentlich gereinigt. Seit dem Start haben wir nie einen Grund zur Beanstandung gehabt. Endlich ein Reinigungsservice, dem man vertrauen kann.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={13} className={i < rating ? "fill-amber-400 text-amber-400" : "text-zinc-200"} />
      ))}
    </div>
  );
}

export default function ReferenzenPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="container-xl relative z-10">
          <FadeUp>
            <div className="eyebrow mb-5" style={{ color: "#4ade80" }}>
              <span className="block w-5 h-0.5 bg-green-400 rounded" />
              Referenzen
            </div>
            <h1 className="heading-display text-white mb-6 max-w-3xl">
              Was unsere Kunden<br />
              <span className="text-gradient">über uns sagen</span>
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed max-w-xl">
              Über 500 zufriedene Kunden in ganz Berlin vertrauen auf KRC Facility Management.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-brand-600 py-10">
        <div className="container-xl">
          <div className="grid grid-cols-3 gap-8 text-center text-white">
            {[
              { value: "500+", label: "Zufriedene Kunden" },
              { value: "5.0", label: "Durchschnittsbewertung" },
              { value: "100%", label: "Weiterempfehlungsrate" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold mb-1">{s.value}</div>
                <div className="text-green-100 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <FadeUp>
            <div className="eyebrow mb-5">Kundenstimmen</div>
            <h2 className="heading-xl text-zinc-950 mb-16 max-w-xl">
              Echte Erfahrungen,<br />echte Ergebnisse
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.08}>
                <div className="card p-7 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <Quote size={28} className="text-brand-200 fill-brand-50" />
                    <span className="text-xs font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                      {t.service}
                    </span>
                  </div>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="mt-auto pt-5 border-t border-zinc-100">
                    <StarRating rating={t.rating} />
                    <div className="mt-3 flex items-start justify-between">
                      <div>
                        <div className="font-semibold text-zinc-900 text-sm">{t.name}</div>
                        <div className="text-xs text-zinc-400">{t.role}</div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-zinc-400">
                        <MapPin size={11} />
                        {t.location}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section-py relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="container-xl relative z-10 text-center max-w-2xl mx-auto">
          <FadeUp>
            <h2 className="heading-xl text-white mb-5">
              Werden Sie unser nächster<br />
              <span className="text-gradient">zufriedener Kunde</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Kontaktieren Sie uns für ein kostenloses Angebot. Wir freuen uns auf Ihre Anfrage.
            </p>
            <Link href="/kontakt" className="btn-primary text-base px-8 py-4">
              Jetzt anfragen <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
