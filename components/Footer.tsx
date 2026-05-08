import Link from "next/link";
import { Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

const services = [
  { label: "Hausmeisterservice",  href: "/leistungen#hausmeister" },
  { label: "Gartenpflege",        href: "/leistungen#garten" },
  { label: "Entrümpelung",        href: "/leistungen#entruempelung" },
  { label: "Elektrik",            href: "/leistungen#elektrik" },
  { label: "Gebäudereinigung",    href: "/leistungen#reinigung" },
  { label: "Gebäudewartung",      href: "/leistungen#wartung" },
];

const company = [
  { label: "Über uns",    href: "/ueber-uns" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "FAQ",        href: "/faq" },
  { label: "Kontakt",    href: "/kontakt" },
];

const legal = [
  { label: "Impressum",    href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      {/* Top CTA strip */}
      <div className="border-b border-zinc-800">
        <div className="container-xl py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-white font-semibold text-lg mb-1">
                Bereit für professionelles Facility Management?
              </p>
              <p className="text-zinc-400 text-sm">Kostenlos anfragen — wir antworten innerhalb von 24 Stunden.</p>
            </div>
            <Link
              href="/kontakt"
              className="btn-primary flex-shrink-0"
            >
              Jetzt anfragen
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-600 text-white">
                <span className="text-sm font-bold">KRC</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm leading-none">KRC Facility</div>
                <div className="text-zinc-500 text-xs leading-none mt-0.5">Management</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Ihr zuverlässiger Partner für professionelles Facility Management in Berlin.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:krc.fm@outlook.de"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors group"
              >
                <Mail size={14} className="text-brand-500 flex-shrink-0" />
                krc.fm@outlook.de
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={14} className="text-brand-500 flex-shrink-0" />
                Berlin, Deutschland
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={14} className="text-brand-500 flex-shrink-0" />
                Mo–Fr 07:00–18:00 Uhr
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Leistungen
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Unternehmen
            </h3>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Kontakt
            </h3>
            <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
              <div className="w-10 h-10 bg-brand-600/20 rounded-xl flex items-center justify-center mb-4">
                <Mail size={18} className="text-brand-400" />
              </div>
              <p className="text-white font-medium text-sm mb-2">E-Mail schreiben</p>
              <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                Wir antworten innerhalb von 24 Stunden mit einem kostenlosen Angebot.
              </p>
              <a
                href="mailto:krc.fm@outlook.de"
                className="inline-flex items-center gap-1.5 text-sm text-brand-400 font-medium hover:text-brand-300 transition-colors"
              >
                krc.fm@outlook.de
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="container-xl py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} KRC Facility Management. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            {legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
