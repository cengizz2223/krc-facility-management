"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Heart, Target, Award, Users, CheckCircle2, ArrowRight,
  Building2, Clock, TrendingUp, Star
} from "lucide-react";

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

const values = [
  {
    icon: Heart,
    title: "Leidenschaft",
    desc: "Wir lieben, was wir tun. Jeder Auftrag wird mit vollem Einsatz und echter Begeisterung ausgeführt.",
  },
  {
    icon: Target,
    title: "Präzision",
    desc: "Keine halben Sachen. Wir arbeiten sorgfältig, gründlich und liefern immer Ergebnisse auf höchstem Niveau.",
  },
  {
    icon: Award,
    title: "Qualität",
    desc: "Zertifizierte Fachkräfte, professionelle Ausrüstung und strenge Qualitätsstandards bei jedem Einsatz.",
  },
  {
    icon: Users,
    title: "Partnerschaft",
    desc: "Wir denken langfristig. Unsere Kunden sind Partner, nicht nur Auftraggeber.",
  },
];

const milestones = [
  { year: "2014", title: "Gründung", desc: "KRC Facility Management wird in Berlin gegründet — mit dem Ziel, Facility-Dienstleistungen neu zu definieren." },
  { year: "2017", title: "Expansion", desc: "Erweiterung des Teams und der Leistungen. Erstmals über 100 aktive Kunden in Berlin." },
  { year: "2020", title: "Zertifizierung", desc: "Offizielle Zertifizierung aller Elektriker und Erweiterung des Elektrik-Angebots." },
  { year: "2024", title: "500+ Kunden", desc: "Über 500 zufriedene Kunden und mehr als 2.000 erfolgreich abgeschlossene Projekte in Berlin." },
];

const stats = [
  { value: "500+", label: "Kunden", icon: Users },
  { value: "2.000+", label: "Projekte", icon: TrendingUp },
  { value: "10+", label: "Jahre", icon: Clock },
  { value: "5.0", label: "Bewertung", icon: Star },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="container-xl relative z-10">
          <FadeUp>
            <div className="eyebrow mb-5" style={{ color: "#4ade80" }}>
              <span className="block w-5 h-0.5 bg-green-400 rounded" />
              Über uns
            </div>
            <h1 className="heading-display text-white mb-6 max-w-3xl">
              Wir sind KRC —<br />
              <span className="text-gradient">Berlins Facility Team</span>
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed max-w-xl">
              Seit über 10 Jahren sind wir der zuverlässige Facility-Partner für Berlins Immobilien. Kennenlernen?
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Story */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="eyebrow mb-5">Unsere Geschichte</div>
              <h2 className="heading-xl text-zinc-950 mb-6">
                Entstanden aus<br />einer einfachen Idee
              </h2>
              <div className="space-y-5 text-zinc-500 text-lg leading-relaxed">
                <p>
                  KRC Facility Management wurde 2014 mit einer simplen, aber kraftvollen Überzeugung gegründet:
                  Berliner Immobilien verdienen professionelles Management, das wirklich funktioniert.
                </p>
                <p>
                  Was als kleines Hausmeisterteam begann, ist heute Berlins bevorzugter Facility-Partner für
                  Privatpersonen, Hausverwaltungen, Wohnungsbaugesellschaften und Gewerbekunden.
                </p>
                <p>
                  Unser Erfolgsgeheimnis? Wir behandeln jede Immobilie so, als wäre sie unsere eigene.
                  Persönlich. Verlässlich. Mit echtem Handwerk.
                </p>
              </div>
            </FadeUp>

            {/* Stats */}
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-2 gap-5">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="card p-6">
                      <Icon size={22} className="text-brand-600 mb-3" />
                      <div className="text-3xl font-bold text-zinc-950 tracking-tight mb-1">
                        {stat.value}
                      </div>
                      <div className="text-zinc-500 text-sm">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-zinc-50">
        <div className="container-xl">
          <FadeUp>
            <div className="eyebrow mb-5">Unsere Werte</div>
            <h2 className="heading-xl text-zinc-950 mb-4 max-w-xl">
              Was uns antreibt
            </h2>
            <p className="text-zinc-500 text-lg max-w-lg mb-16 leading-relaxed">
              Diese Grundwerte bestimmen, wie wir arbeiten und wie wir mit unseren Kunden umgehen.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeUp key={v.title} delay={i * 0.1}>
                  <div className="card p-7">
                    <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center mb-5">
                      <Icon size={22} className="text-brand-600" />
                    </div>
                    <h3 className="font-semibold text-zinc-900 text-lg mb-3">{v.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <FadeUp>
            <div className="eyebrow mb-5">Meilensteine</div>
            <h2 className="heading-xl text-zinc-950 mb-16 max-w-xl">
              Unsere Entwicklung
            </h2>
          </FadeUp>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-200 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <FadeUp key={m.year} delay={i * 0.1}>
                  <div className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-brand-600 rounded-full -translate-x-1/2 mt-1.5 ring-4 ring-white" />

                    {/* Content */}
                    <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                      <div className="text-brand-600 font-bold text-sm mb-2">{m.year}</div>
                      <h3 className="font-semibold text-zinc-900 text-xl mb-2">{m.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{m.desc}</p>
                    </div>

                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section-py bg-zinc-50">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-10 text-white">
                <Building2 size={48} className="text-white/60 mb-6" strokeWidth={0.8} />
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  Ihr Partner für langfristigen Immobilienwert
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Professionelles Facility Management erhält und steigert den Wert Ihrer Immobilie nachhaltig.
                  Wir sind nicht nur Dienstleister — wir sind Ihr Partner.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="eyebrow mb-5">Warum KRC</div>
              <h2 className="heading-lg text-zinc-950 mb-8">
                Der KRC-Unterschied
              </h2>
              <div className="space-y-5">
                {[
                  { title: "Ein Ansprechpartner", desc: "Kein Weiterverweisen. Sie haben immer einen persönlichen Ansprechpartner." },
                  { title: "Festpreise ohne Überraschungen", desc: "Transparente Preisgestaltung. Was wir anbieten, das berechnen wir auch." },
                  { title: "Erfahrenes Team", desc: "Alle Mitarbeiter sind ausgebildete Fachleute mit jahrelanger Erfahrung." },
                  { title: "Vollständig versichert", desc: "Alle Arbeiten sind vollumfänglich versichert — für Ihre Sicherheit." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <CheckCircle2 size={20} className="text-brand-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-zinc-900 mb-1">{item.title}</div>
                      <div className="text-zinc-500 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/kontakt" className="btn-primary">
                  Kontakt aufnehmen <ArrowRight size={16} />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
