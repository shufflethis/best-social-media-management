import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Disclaimer() {
    return (
        <div className="legal-page">
            <Helmet>
                <title>Disclaimer | Best Social Media Management – famefact</title>
                <meta name="description" content="Disclaimer und Haftungsausschluss von best-social-media-management.com – Ein Service von famefact / track by track GmbH." />
                <meta name="robots" content="noindex, follow" />
            </Helmet>
            <div className="container">
                <Link to="/" className="back-link">← Zurück zur Startseite</Link>
                <h1>Disclaimer</h1>

                <h2>Haftung für Inhalte</h2>
                <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                    Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten
                    nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                    Informationen zu überwachen.
                </p>

                <h2>Haftung für Links</h2>
                <p>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
                    Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                    Seiten verantwortlich.
                </p>

                <h2>Urheberrecht</h2>
                <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                    dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                    der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
                    des jeweiligen Autors bzw. Erstellers.
                </p>

                <h2>Keine Erfolgsgarantie</h2>
                <p>
                    Die auf dieser Website dargestellten Informationen zu Social Media Management, Community Management
                    und Content-Strategie basieren auf dem aktuellen Kenntnisstand und unserer langjährigen Erfahrung.
                    Der Erfolg von Social-Media-Kampagnen hängt von zahlreichen externen Faktoren ab, darunter
                    Plattformalgorithmen, Marktbedingungen und Zielgruppenverhalten. Wir garantieren keinen bestimmten
                    Kampagnenerfolg.
                </p>

                <h2>Markenhinweis</h2>
                <p>
                    „Instagram", „Facebook" und „Meta" sind eingetragene Marken der Meta Platforms, Inc.
                    „LinkedIn" ist eine eingetragene Marke der LinkedIn Corporation. „TikTok" ist eine eingetragene
                    Marke der ByteDance Ltd. „X" (ehemals „Twitter") ist eine eingetragene Marke der X Corp.
                    Die Verwendung dieser Marken dient ausschließlich der Beschreibung unserer Dienstleistungen
                    und impliziert keine Zugehörigkeit oder Unterstützung durch die jeweiligen Markeninhaber.
                </p>

                <p><em>Stand: März 2026</em></p>
            </div>
        </div>
    )
}
