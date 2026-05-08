import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der KRC Facility Management, Berlin.",
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container-xl max-w-3xl">
        <div className="mb-10">
          <div className="eyebrow mb-4">Legal</div>
          <h1 className="heading-xl text-zinc-950 mb-2">Datenschutzerklärung</h1>
          <div className="divider-gradient mt-6" />
        </div>

        <div className="space-y-10 text-zinc-600 text-sm leading-relaxed">
          <section>
            <h2 className="text-zinc-900 font-semibold text-base mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-zinc-800 font-medium mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-zinc-900 font-semibold text-base mb-3">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-zinc-800 font-medium mb-2">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
              dieser Datenschutzerklärung.
            </p>
            <h3 className="text-zinc-800 font-medium mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              KRC Facility Management<br />
              Berlin, Deutschland<br />
              E-Mail: krc.fm@outlook.de
            </p>
          </section>

          <section>
            <h2 className="text-zinc-900 font-semibold text-base mb-3">3. Datenerfassung auf unserer Website</h2>
            <h3 className="text-zinc-800 font-medium mb-2">Kontaktformular</h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
              von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <h3 className="text-zinc-800 font-medium mb-2">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und
              Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners,
              Uhrzeit der Serveranfrage, IP-Adresse.
            </p>
          </section>

          <section>
            <h2 className="text-zinc-900 font-semibold text-base mb-3">4. Ihre Rechte</h2>
            <p className="mb-4">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
              oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
              können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>
            <p>
              Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige
              Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des
              Bundeslandes, in dem unser Unternehmen seinen Sitz hat.
            </p>
          </section>

          <section>
            <h2 className="text-zinc-900 font-semibold text-base mb-3">5. Cookies</h2>
            <p>
              Unsere Website verwendet keine Tracking-Cookies. Es werden ausschließlich technisch notwendige
              Session-Cookies verwendet, die nach dem Schließen des Browsers automatisch gelöscht werden.
            </p>
          </section>

          <section>
            <h2 className="text-zinc-900 font-semibold text-base mb-3">6. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen
              rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der
              Datenschutzerklärung umzusetzen. Stand: Mai 2026.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
