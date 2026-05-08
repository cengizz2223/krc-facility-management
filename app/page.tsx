"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  ChevronDown,
  Wrench,
  Leaf,
  Trash2,
  Zap,
  Building2,
  Settings,
  Shield,
  Clock,
  Users,
  TrendingUp,
  MapPin,
  Mail,
  Quote,
} from "lucide-react";
import clsx from "clsx";

/* ─── Animation Helpers ─── */
function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Data ─── */
const services = [
  {
    icon: Wrench,
    title: "Hausmeisterservice",
    desc: "Umfassender Hausmeisterdienst für Wohn- und Gewerbeimmobilien in ganz Berlin. Schnell, zuverlässig, professionell.",
    color: "from-blue-50 to-blue-100 text-blue-600",
  },
  {
    icon: Leaf,
    title: "Gartenpflege",
    desc: "Rasenmähen, Hecken schneiden, Bepflanzung und Saisonpflege. Ihr Außenbereich in bestem Zustand.",
    color: "from-green-50 to-green-100 text-green-600",
  },
  {
    icon: Trash2,
    title: "Entrümpelung",
    desc: "Professionelle Wohnungs- und Kellerentrümpelung. Umweltgerecht entsorgt, schnell und zu fairen Preisen.",
    color: "from-orange-50 to-orange-100 text-orange-600",
  },
  {
    icon: Zap,
    title: "Elektrik",
    desc: "Elektroinstallationen, Reparaturen und Wartung. Zertifizierte Elektriker für sichere und normgerechte Arbeit.",
    color: "from-yellow-50 to-yellow-100 text-yellow-600",
  },
  {
    icon: Building2,
    title: "Gebäudereinigung",
    desc: "Treppenhäuser, Gemeinschaftsflächen, Tiefgaragen und Außenanlagen. Sauberkeit auf höchstem Niveau.",
    color: "from-purple-50 to-purple-100 text-purple-600",
  },
  {
    icon: Settings,
    title: "Gebäudewartung",
    desc: "Präventive Wartung und Instandhaltung Ihrer Immobilie. Wir schützen Ihren Wert langfristig.",
    color: "from-red-50 to-red-100 text-red-600",
  },
];

const stats = [
  { value: "500+",  label: "Zufriedene Kunden",   icon: Users },
  { value: "10+",   label: "Jahre Erfahrung",      icon: TrendingUp },
  { value: "100%",  label: "Kundenzufriedenheit",  icon: Star },
  { value: "24h",   label: "Reaktionszeit",        icon: Clock },
];

const testimonials = [
  {
    name: "Michael Bauer",
    role: "Hausverwaltung Mitte",
    text: "KRC Facility Management hat unsere Erwartungen in jeder Hinsicht übertroffen. Professionell, pünktlich und absolut zuverlässig. Ich empfehle sie jedem Hauseigentümer in Berlin.",
    rating: 5,
    location: "Berlin Mitte",
  },
  {
    name: "Sandra Hoffmann",
    role: "Privatkundin",
    text: "Wir haben KRC für die Gartenpflege und Entrümpelung unserer geerbten Immobilie beauftragt. Das Team war unglaublich kompetent und hat alles perfekt erledigt.",
    rating: 5,
    location: "Berlin Prenzlauer Berg",
  },
  {
    name: "Thomas Richter",
    role: "Gewerbeimmobilien GmbH",
    text: "Als Facility Manager für mehrere Bürogebäude bin ich auf zuverlässige Partner angewiesen. KRC ist genau das – immer erreichbar, immer professionell.",
    rating: 5,
    location: "Berlin Charlottenburg",
  },
];

const faqs = [
  {
    q: "In welchen Berliner Stadtteilen sind Sie tätig?",
    a: "Wir sind in ganz Berlin tätig – von Mitte über Charlottenburg bis nach Köpenick. Kein Weg ist zu weit für unsere Teams.",
  },
  {
    q: "Wie schnell können Sie Aufträge annehmen?",
    a: "Bei dringenden Anfragen reagieren wir innerhalb von 24 Stunden. Reguläre Aufträge werden nach Vereinbarung termingerecht abgewickelt.",
  },
  {
    q: "Bieten Sie auch langfristige Wartungsverträge an?",
    a: "Ja, wir bieten maßgeschneiderte Jahresverträge für regelmäßige Leistungen an – ideal für Hausverwaltungen und Gewerbekunden.",
  },
  {
    q: "Sind Ihre Mitarbeiter versichert und zertifiziert?",
    a: "Selbstverständlich. Alle unsere Mitarbeiter sind vollständig versichert, geschult und wo nötig zertifiziert (z. B. Elektrik).",
  },
];

const trustBadges = [
  { icon: Shield,   label: "Vollversichert" },
  { icon: CheckCircle2, label: "Zertifiziert" },
  { icon: Clock,    label: "Pünktlich" },
  { icon: MapPin,   label: "Ganz Berlin" },
];

/* ─── Components ─── */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-amber-400 text-amber-400" : "text-zinc-200"}
        />
      ))}
    </div>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={false}
      className="border border-zinc-200 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors"
      >
        <span className="font-medium text-zinc-900 pr-8 text-base">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-zinc-400"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatedAccordion open={open}>
        <div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed">
          {a}
        </div>
      </AnimatedAccordion>
    </motion.div>
  );
}

function AnimatedAccordion({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={false}
      animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Page ─── */
export default function HomePage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-hero-pattern pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-brand-50/60 rounded-full blur-3xl pointer-events-none" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(22,163,74,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(22,163,74,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container-xl relative z-10 pt-28 pb-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-200 mb-8"
            >
              <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse-ring" />
              <span className="text-brand-700 text-sm font-medium">
                Ihr Hausmeisterservice in Berlin
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="heading-display text-zinc-950 mb-6"
            >
              Ihr Gebäude.
              <br />
              <span className="text-gradient">Unser Auftrag.</span>
            </motion.h1>

            {/* Sub headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-zinc-500 leading-relaxed max-w-2xl mb-10"
            >
              KRC Facility Management — Berlins zuverlässiger Partner für
              Hausmeisterservice, Gartenpflege, Entrümpelung, Elektrik und
              Gebäudewartung. Wir kümmern uns um alles, damit Sie es nicht müssen.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link href="/kontakt" className="btn-primary text-base px-7 py-4">
                Kostenlose Anfrage stellen
                <ArrowRight size={18} />
              </Link>
              <Link href="/leistungen" className="btn-secondary text-base px-7 py-4">
                Unsere Leistungen
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-zinc-500 text-sm">
                  <badge.icon size={15} className="text-brand-600" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-zinc-400 tracking-widest uppercase">Mehr entdecken</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown size={16} className="text-zinc-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══ STATS BAR ══ */}
      <section className="bg-zinc-950 py-14">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-zinc-400 text-sm font-medium">{stat.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="section-py bg-zinc-50">
        <div className="container-xl">
          <FadeUp>
            <div className="eyebrow mb-5">Leistungen</div>
            <h2 className="heading-xl text-zinc-950 mb-4 max-w-2xl">
              Alles aus einer Hand —<br />
              für Ihre Immobilie
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl mb-16 leading-relaxed">
              Von der Gartenpflege bis zur komplexen Gebäudewartung: KRC übernimmt alle Aufgaben rund um Ihre Immobilie.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <FadeUp key={svc.title} delay={i * 0.08}>
                  <div className="card p-7 h-full group cursor-pointer">
                    <div
                      className={clsx(
                        "inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-5 bg-gradient-to-br",
                        svc.color.split(" ").slice(0, 2).join(" ")
                      )}
                    >
                      <Icon
                        size={22}
                        className={svc.color.split(" ")[2]}
                      />
                    </div>
                    <h3 className="font-semibold text-zinc-900 text-lg mb-3 tracking-tight">
                      {svc.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {svc.desc}
                    </p>
                    <div className="mt-5 flex items-center gap-1.5 text-brand-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Mehr erfahren <ArrowRight size={14} />
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          <FadeUp delay={0.3}>
            <div className="text-center mt-12">
              <Link href="/leistungen" className="btn-secondary">
                Alle Leistungen ansehen
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ ABOUT TEASER ══ */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <FadeUp>
              <div className="eyebrow mb-5">Über KRC</div>
              <h2 className="heading-xl text-zinc-950 mb-6">
                Berliner Qualität,<br />die man spürt
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed mb-6">
                KRC Facility Management steht für Zuverlässigkeit, Professionalität und echtes Handwerk.
                Seit über 10 Jahren sind wir der bevorzugte Facility-Partner für Privatpersonen,
                Hausverwaltungen und Gewerbekunden in ganz Berlin.
              </p>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                Unser Team aus erfahrenen Fachleuten kümmert sich mit dem gleichen Engagement
                um jeden Auftrag — ob kleine Reparatur oder komplettes Gebäudemanagement.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Über 500 zufriedene Kunden in Berlin",
                  "Vollversichert und zertifiziert",
                  "Transparente Festpreise ohne versteckte Kosten",
                  "Persönlicher Ansprechpartner für jeden Kunden",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <Link href="/ueber-uns" className="btn-primary">
                Mehr über uns <ArrowRight size={16} />
              </Link>
            </FadeUp>

            {/* Right — Visual Element */}
            <FadeUp delay={0.2}>
              <div className="relative">
                {/* Main card */}
                <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-12 translate-x-12" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-8 -translate-x-8" />
                  <div className="relative z-10">
                    <Building2 size={40} className="text-white/80 mb-6" />
                    <p className="text-2xl font-bold mb-3 tracking-tight">
                      Ihr zuverlässiger Facility Partner
                    </p>
                    <p className="text-white/70 leading-relaxed text-sm">
                      Professionell. Pünktlich. Persönlich. Wir bringen Ihre Immobilie auf höchsten Standard.
                    </p>
                  </div>
                </div>

                {/* Floating stat cards */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-zinc-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
                      <Star size={18} className="text-brand-600 fill-brand-600" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500">Bewertung</div>
                      <div className="font-bold text-zinc-900">5.0 / 5.0</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-zinc-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                      <Users size={18} className="text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500">Kunden</div>
                      <div className="font-bold text-zinc-900">500+</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="section-py bg-zinc-50">
        <div className="container-xl">
          <FadeUp>
            <div className="eyebrow mb-5">Kundenstimmen</div>
            <h2 className="heading-xl text-zinc-950 mb-4 max-w-2xl">
              Was unsere Kunden sagen
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl mb-16 leading-relaxed">
              Über 500 zufriedene Kunden vertrauen KRC Facility Management — lesen Sie selbst, was sie über uns sagen.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <div className="card p-7 h-full flex flex-col">
                  <Quote size={32} className="text-brand-200 mb-4 fill-brand-100" />
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-1">
                    "{t.text}"
                  </p>
                  <div className="mt-auto">
                    <StarRating rating={t.rating} />
                    <div className="mt-3">
                      <div className="font-semibold text-zinc-900 text-sm">{t.name}</div>
                      <div className="text-xs text-zinc-400">{t.role} · {t.location}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <div className="text-center mb-14">
                <div className="eyebrow justify-center mb-5">FAQ</div>
                <h2 className="heading-xl text-zinc-950 mb-4">
                  Häufige Fragen
                </h2>
                <p className="text-zinc-500 text-lg leading-relaxed">
                  Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Leistungen.
                </p>
              </div>
            </FadeUp>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FadeUp key={i} delay={i * 0.07}>
                  <FaqItem q={faq.q} a={faq.a} index={i} />
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.3}>
              <div className="text-center mt-10">
                <Link href="/faq" className="btn-secondary">
                  Alle Fragen ansehen <ArrowRight size={16} />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══ CTA SECTION ══ */}
      <section className="section-dark section-py relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl" />
        </div>
        <div className="container-xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <div className="eyebrow justify-center mb-6">Jetzt starten</div>
              <h2 className="heading-xl text-white mb-6">
                Bereit für professionelles<br />
                <span className="text-gradient">Facility Management?</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Kontaktieren Sie uns jetzt für ein kostenloses, unverbindliches Angebot.
                Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kontakt" className="btn-primary text-base px-8 py-4">
                  Kostenlose Anfrage
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="mailto:krc.fm@outlook.de"
                  className="inline-flex items-center gap-2 text-base font-medium text-zinc-400 hover:text-white transition-colors py-4 px-6"
                >
                  <Mail size={18} />
                  krc.fm@outlook.de
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
