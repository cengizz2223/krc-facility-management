"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Mail } from "lucide-react";

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

const faqCategories = [
  {
    category: "Allgemeines",
    questions: [
      {
        q: "In welchen Berliner Stadtteilen sind Sie tätig?",
        a: "Wir sind in ganz Berlin tätig — von Mitte über Charlottenburg, Prenzlauer Berg, Neukölln, Friedrichshain, Kreuzberg bis nach Spandau, Köpenick und Reinickendorf. Kein Berliner Stadtteil ist für uns zu weit.",
      },
      {
        q: "Wie schnell können Sie einen Auftrag annehmen?",
        a: "Bei dringenden Aufträgen reagieren wir in der Regel innerhalb von 24 Stunden. Bei regulären Aufträgen vereinbaren wir gemeinsam einen Termin nach Ihren Wünschen. Schreiben Sie uns einfach eine E-Mail an krc.fm@outlook.de.",
      },
      {
        q: "Arbeiten Sie auch am Wochenende?",
        a: "Ja, nach Absprache sind wir auch samstags tätig. Für Notfälle sind wir außerdem unter der Woche erreichbar.",
      },
      {
        q: "Können Sie auch kurzfristig helfen?",
        a: "Wir versuchen immer, schnell zu reagieren. Bei dringenden Fällen kontaktieren Sie uns direkt per E-Mail, damit wir Ihnen schnellstmöglich helfen können.",
      },
    ],
  },
  {
    category: "Preise & Verträge",
    questions: [
      {
        q: "Wie werden Ihre Leistungen abgerechnet?",
        a: "Je nach Leistung bieten wir Festpreise oder Stundensätze an. Wir erstellen Ihnen immer ein schriftliches Angebot, bevor wir mit der Arbeit beginnen — keine versteckten Kosten.",
      },
      {
        q: "Bieten Sie auch Wartungsverträge an?",
        a: "Ja, für Stammkunden bieten wir maßgeschneiderte Jahresverträge an. Diese beinhalten regelmäßige Leistungen zu vergünstigten Konditionen — ideal für Hausverwaltungen und Eigentümer mehrerer Immobilien.",
      },
      {
        q: "Ist eine kostenlose Erstberatung möglich?",
        a: "Selbstverständlich. Wir besichtigen Ihr Objekt kostenlos und erstellen anschließend ein unverbindliches Angebot. Kontaktieren Sie uns einfach per E-Mail.",
      },
      {
        q: "Welche Zahlungsmethoden akzeptieren Sie?",
        a: "Wir akzeptieren Banküberweisung und Barzahlung. Für Geschäftskunden bieten wir auch Rechnungsstellung auf Monatsbasis an.",
      },
    ],
  },
  {
    category: "Qualität & Sicherheit",
    questions: [
      {
        q: "Sind Ihre Mitarbeiter versichert?",
        a: "Ja, alle unsere Mitarbeiter sind vollständig haftpflichtversichert. Im unwahrscheinlichen Fall eines Schadens sind Sie als Auftraggeber vollständig abgesichert.",
      },
      {
        q: "Sind Ihre Elektriker zertifiziert?",
        a: "Ja, unsere Elektriker sind ausgebildete Elektrofachkräfte mit entsprechenden Zertifizierungen. Alle Elektroarbeiten werden normgerecht und sicher ausgeführt.",
      },
      {
        q: "Wie stellen Sie gleichbleibende Qualität sicher?",
        a: "Wir haben klare Qualitätsstandards und führen nach Abschluss jedes Auftrags eine Nachkontrolle durch. Zudem sind wir immer offen für Ihr Feedback und passen uns Ihren Wünschen an.",
      },
      {
        q: "Was passiert, wenn ich mit einer Leistung nicht zufrieden bin?",
        a: "Ihre Zufriedenheit ist unser oberstes Ziel. Sollte einmal etwas nicht passen, korrigieren wir es umgehend und kostenlos. Melden Sie sich einfach bei uns.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-zinc-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-zinc-50 transition-colors"
      >
        <span className="font-medium text-zinc-900 pr-8 text-sm md:text-base">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-zinc-400">
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <motion.div initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        style={{ overflow: "hidden" }}>
        <div className="px-5 pb-5 text-zinc-500 text-sm leading-relaxed">{a}</div>
      </motion.div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="container-xl relative z-10">
          <FadeUp>
            <div className="eyebrow mb-5" style={{ color: "#4ade80" }}>
              <span className="block w-5 h-0.5 bg-green-400 rounded" />
              FAQ
            </div>
            <h1 className="heading-display text-white mb-6 max-w-3xl">
              Häufige Fragen<br />
              <span className="text-gradient">einfach beantwortet</span>
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed max-w-xl">
              Hier finden Sie Antworten auf die häufigsten Fragen. Nicht dabei? Schreiben Sie uns!
            </p>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-white">
        <div className="container-xl max-w-4xl">
          {faqCategories.map((cat, ci) => (
            <FadeUp key={cat.category} delay={ci * 0.1} className="mb-14 last:mb-0">
              <h2 className="heading-md text-zinc-950 mb-6 pb-4 border-b border-zinc-100">
                {cat.category}
              </h2>
              <div className="space-y-3">
                {cat.questions.map((item, qi) => (
                  <FadeUp key={qi} delay={qi * 0.05}>
                    <FaqItem q={item.q} a={item.a} />
                  </FadeUp>
                ))}
              </div>
            </FadeUp>
          ))}

          {/* Still have questions */}
          <FadeUp delay={0.3}>
            <div className="mt-16 bg-brand-50 border border-brand-100 rounded-3xl p-10 text-center">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Mail size={24} className="text-brand-600" />
              </div>
              <h3 className="font-semibold text-zinc-900 text-xl mb-3">
                Noch Fragen offen?
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                Wir helfen Ihnen gerne weiter. Schreiben Sie uns eine E-Mail und wir antworten innerhalb von 24 Stunden.
              </p>
              <a href="mailto:krc.fm@outlook.de" className="btn-primary">
                krc.fm@outlook.de <ArrowRight size={16} />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
