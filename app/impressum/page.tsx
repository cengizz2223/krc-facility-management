import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der KRC Facility Management GmbH, Berlin.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container-xl max-w-3xl">
        <div className="mb-10">
          <div className="eyebrow mb-4">Legal</div>
          <h1 className="heading-xl text-zinc-950 mb-2">Impressum</h1>
          <div className="divider-gradient mt-6" />
        </div>

        <div className="prose-custom space-y-10 text-zinc-600 text-sm leading-relaxed">
          <section>
            <h2 className="text-zinc-900 font-semibold text-base mb-3">Angaben gemäß § 5 TMG</h2>
            <p>KRC Facility Management<br />Berlin, Deutschland<br />E-Mail: krc.fm@outlook.de</p>
          </section>

          <section>
            <h2 className="text-zinc-900 font-semibold text-base mb-3">Vertreten durch</h2>
            <p>Geschäftsführung: KRC Facility Management</p>
          </section>

          <section>
            <h2 className="text-zinc-900 font-semibold text-base mb-3">Kontakt</h2>
            <p>E-Mail: <a href="mailto:krc.fm@outlook.de" className="text-brand-600 hover:underline">krc.fm@outlook.de</a></p>
          </section>

          <section>
            <h2 className="text-zinc-900 font-semibold text-base mb-3">Haftungsausschluss</h2>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
              und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
              gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-zinc-900 font-semibold text-base mb-3">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-zinc-900 font-semibold text-base mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <section>
            <h2 className="text-zinc-900 font-semibold text-base mb-3">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer"
                className="text-brand-600 hover:underline">
                https://ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
