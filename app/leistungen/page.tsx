"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Wrench, Leaf, Trash2, Zap, Building2, Settings,
  CheckCircle2, ArrowRight, ChevronRight
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

const services = [
  {
    id: "hausmeister",
    icon: Wrench,
    title: "Hausmeisterservice",
    subtitle: "Zuverlässig & Kompetent",
    desc: "Unser Hausmeisterservice übernimmt alle anfallenden Aufgaben rund um Ihre Immobilie. Als persönlicher Ansprechpartner vor Ort sorgen wir dafür, dass alles reibungslos läuft.",
    features: [
      "Kleinreparaturen und Instandsetzungen",
      "Kontrolle und Wartung technischer Anlagen",
      "Pflege von Gemeinschaftsflächen",
      "Mülltonnenmanagement",
      "Winterdienst und Streudienst",
      "Briefkastenentleerung und Postzustellung",
      "Überwachung und Meldung von Schäden",
      "Handwerkerkoordination",
    ],
    accent: "#16a34a",
    bg: "from-green-50 to-emerald-50",
    iconBg: "bg-green-100 text-green-700",
  },
  {
    id: "garten",
    icon: Leaf,
    title: "Gartenpflege",
    subtitle: "Schön & Gepflegt",
    desc: "Ihr Garten und Außenbereich verdient professionelle Pflege das ganze Jahr. Wir gestalten, pflegen und erhalten Außenanlagen auf höchstem Niveau.",
    features: [
      "Rasenmähen und Rasenedging",
      "Heckenschnitt und Formschnitt",
      "Beetpflege und Bepflanzung",
      "Baum- und Strauchschnitt",
      "Laubbeseitigung im Herbst",
      "Saisonale Bepflanzung",
      "Bewässerungsanlagenbetreuung",
      "Unkrautentfernung",
    ],
    accent: "#059669",
    bg: "from-emerald-50 to-green-50",
    iconBg: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "entruempelung",
    icon: Trash2,
    title: "Entrümpelung",
    subtitle: "Schnell & Gründlich",
    desc: "Professionelle Entrümpelung für Wohnungen, Keller, Dachböden und Gewerbeobjekte. Wir entsorgen fachgerecht, schnell und zu fairen Festpreisen.",
    features: [
      "Wohnungsentrümpelung",
      "Kellerentrümpelung",
      "Dachbodenräumung",
      "Büro- und Gewerbeauflösung",
      "Nachlass- und Erbschaftsräumung",
      "Fachgerechte Entsorgung",
      "Recycling und Wiederverwertung",
      "Reinigung nach der Entrümpelung",
    ],
    accent: "#ea580c",
    bg: "from-orange-50 to-amber-50",
    iconBg: "bg-orange-100 text-orange-700",
  },
  {
    id: "elektrik",
    icon: Zap,
    title: "Elektrik",
    subtitle: "Sicher & Normgerecht",
    desc: "Zertifizierte Elektriker für alle elektrischen Arbeiten in Ihrer Immobilie. Von der einfachen Reparatur bis zur kompletten Installation — sicher und normgerecht.",
    features: [
      "Elektroinstallationen und -reparaturen",
      "Steckdosen und Lichtschalter",
      "Beleuchtungsanlagen",
      "Sicherungskasten und Verteiler",
      "Außenbeleuchtung",
      "Notbeleuchtung",
      "E-Check und Sicherheitsprüfungen",
      "Klingel- und Sprechanlagen",
    ],
    accent: "#ca8a04",
    bg: "from-yellow-50 to-amber-50",
    iconBg: "bg-yellow-100 text-yellow-700",
  },
  {
    id: "reinigung",
    icon: Building2,
    title: "Gebäudereinigung",
    subtitle: "Glänzend & Hygienisch",
    desc: "Professionelle Gebäudereinigung für Treppenhäuser, Gemeinschaftsflächen, Büros und Außenanlagen. Sauberkeit, die man sieht und spürt.",
    features: [
      "Treppenhausreinigung",
      "Gemeinschaftsflächenpflege",
      "Tiefgaragenreinigung",
      "Fensterreinigung",
      "Büroreinigung",
      "Grundreinigung",
      "Unterhaltsreinigung",
      "Baureinigung",
    ],
    accent: "#7c3aed",
    bg: "from-purple-50 to-violet-50",
    iconBg: "bg-purple-100 text-purple-700",
  },
  {
    id: "wartung",
    icon: Settings,
    title: "Gebäudewartung",
    subtitle: "Präventiv & Langfristig",
    desc: "Regelmäßige Wartung schützt Ihren Immobilienwert und verhindert kostspielige Reparaturen. Unser Wartungsservice hält alles in bestem Zustand.",
    features: [
      "Heizungsinspektion und -wartung",
      "Aufzugskontrolle",
      "Dachinspektion",
      "Fassadenprüfung",
      "Entwässerungsprüfung",
      "Brandschutzprüfung",
      "Wasserschadensvorbeugung",
      "Dokumentation und Protokollierung",
    ],
    accent: "#dc2626",
    bg: "from-red-50 to-rose-50",
    iconBg: "bg-red-100 text-red-700",
  },
];

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="container-xl relative z-10">
          <FadeUp>
            <div className="eyebrow mb-5" style={{ color: "#4ade80" }}>
              <span className="block w-5 h-0.5 bg-green-400 rounded" />
              Leistungen
            </div>
            <h1 className="heading-display text-white mb-6 max-w-3xl">
              Alles, was Ihre<br />
              <span className="text-gradient">Immobilie braucht</span>
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed max-w-xl">
              KRC Facility Management bietet das komplette Spektrum an Hausmeister- und Facility-Leistungen für Berliner Immobilien.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          const isEven = i % 2 === 0;
          return (
            <div
              key={svc.id}
              id={svc.id}
              className={`section-py border-b border-zinc-100 ${!isEven ? "bg-zinc-50" : ""}`}
            >
              <div className="container-xl">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                  {/* Text */}
                  <FadeUp className={!isEven ? "lg:col-start-2" : ""}>
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${svc.iconBg}`}>
                      <Icon size={26} />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
                      {svc.subtitle}
                    </div>
                    <h2 className="heading-lg text-zinc-950 mb-5">{svc.title}</h2>
                    <p className="text-zinc-500 text-lg leading-relaxed mb-8">{svc.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {svc.features.map((f) => (
                        <div key={f} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: svc.accent }} />
                          <span className="text-zinc-600 text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/kontakt" className="btn-primary">
                      Jetzt anfragen <ArrowRight size={16} />
                    </Link>
                  </FadeUp>

                  {/* Visual */}
                  <FadeUp delay={0.15} className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div
                      className={`bg-gradient-to-br ${svc.bg} rounded-3xl p-12 flex items-center justify-center aspect-square max-w-sm mx-auto lg:max-w-none`}
                    >
                      <Icon size={120} style={{ color: svc.accent, opacity: 0.3 }} strokeWidth={0.8} />
                    </div>
                  </FadeUp>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="section-dark section-py relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl -translate-x-1/2" />
        </div>
        <div className="container-xl relative z-10 text-center max-w-2xl mx-auto">
          <FadeUp>
            <h2 className="heading-xl text-white mb-5">Bereit für Ihren Auftrag?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Kontaktieren Sie uns jetzt. Kostenlose Beratung und Angebot innerhalb von 24 Stunden.
            </p>
            <Link href="/kontakt" className="btn-primary text-base px-8 py-4">
              Kostenlose Anfrage <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
