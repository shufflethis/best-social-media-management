import { useState, useEffect } from 'react'

export default function LandingPage() {
    const [openFaq, setOpenFaq] = useState(null)
    const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
    const [formStatus, setFormStatus] = useState(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormStatus('sending')
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            if (res.ok) {
                setFormStatus('success')
                setFormData({ name: '', email: '', company: '', message: '' })
            } else {
                setFormStatus('error')
            }
        } catch {
            setFormStatus('error')
        }
    }

    const faqs = [
        {
            q: 'Was macht famefact zum besten Social Media Management Anbieter?',
            a: 'famefact kombiniert über 15 Jahre Erfahrung im Social Media Management mit innovativer KI-Technologie und datengetriebener Strategie. Als eine der ersten deutschen Agenturen, die sich auf „Socialtainment" – die Verbindung von Social Media, Entertainment und Technologie – spezialisiert haben, betreuen wir über 100 Kunden aus unterschiedlichsten Branchen. Unser Full-Service-Ansatz mit Standort Berlin umfasst Strategie, Content Creation, Community Management, Paid Social und Influencer Marketing aus einer Hand. Zusätzlich sind wir Pioniere in der Generative Engine Optimization (GEO), damit Ihre Marke auch in KI-Antworten von ChatGPT, Perplexity und Google AI sichtbar wird.'
        },
        {
            q: 'Was kostet professionelles Social Media Management?',
            a: 'Die Kosten für Social Media Management variieren je nach Umfang, Kanalanzahl und gewünschtem Service-Level. Strategische Erstberatungen und Social Media Audits beginnen bei 1.500€. Monatliche Betreuungspakete starten bei 2.500€ für einen Kanal und reichen bis 15.000€+ für Full-Service Multi-Channel-Management inklusive Content Creation, Community Management, Paid Social und Influencer Marketing. Alle Pakete werden individuell auf Ihre Ziele, Branche und Budgetvorstellung zugeschnitten. Wir erstellen Ihnen ein transparency-basiertes Angebot nach einer kostenlosen Erstanalyse.'
        },
        {
            q: 'Was ist der Unterschied zwischen Social Media Management und Community Management?',
            a: 'Social Media Management umfasst die gesamte Betreuung Ihrer Social-Media-Kanäle: Strategie, Redaktionsplanung, Content-Erstellung, Veröffentlichung, Reporting und Optimierung. Community Management ist ein spezialisierter Teilbereich und fokussiert sich auf die direkte Interaktion mit Ihrer Community: Beantwortung von Kommentaren und Nachrichten, Moderation, Krisenmanagement und den Aufbau langfristiger Beziehungen zu Ihrer Zielgruppe. Bei famefact bieten wir beides als integriertes Paket – denn eine starke Community ist die Basis für nachhaltigen Social-Media-Erfolg.'
        },
        {
            q: 'Welche Social-Media-Plattformen betreut famefact?',
            a: 'Wir betreuen alle relevanten Plattformen: Instagram, Facebook, LinkedIn, TikTok, X (Twitter), YouTube, Pinterest und Threads. Für jede Plattform entwickeln wir spezifische Strategien, die deren Stärken optimal nutzen. Unsere Expertise umfasst sowohl B2C-Kanäle (Instagram, TikTok, YouTube) als auch B2B-Netzwerke (LinkedIn). Darüber hinaus beraten wir Sie zu aufkommenden Plattformen und neuen Features, damit Ihre Marke immer einen Schritt voraus ist.'
        },
        {
            q: 'Für welche Branchen und Unternehmen eignet sich euer Social Media Management?',
            a: 'Unser Social Media Management eignet sich für Unternehmen jeder Größe und Branche – von Startups und Mittelstand bis zu internationalen Konzernen. Zu unseren Referenzen zählen Marken wie Casio, Sixt, Köstritzer und viele weitere aus den Bereichen FMCG, Lifestyle, Technologie, B2B, Finanzen, Healthcare und dem öffentlichen Sektor. Wir passen Strategien, Tonalität und Content-Konzepte individuell an Ihre Branche, Zielgruppe und Geschäftsziele an.'
        },
        {
            q: 'Wie misst famefact den Erfolg von Social Media Management?',
            a: 'Wir definieren gemeinsam mit Ihnen klare KPIs, die zu Ihren Geschäftszielen passen: Reichweite, Impressions, Engagement Rate, Follower-Wachstum, Community Sentiment, Conversion Rate, Cost per Lead, Share of Voice und Brand Mention Frequency. Monatliche Reports mit transparenten Dashboards zeigen den ROI Ihres Social Media Investments. Zusätzlich messen wir mit unserer GEO-Expertise die Sichtbarkeit Ihrer Marke in KI-Systemen – ein entscheidender Zukunftsfaktor.'
        },
        {
            q: 'Was beinhaltet ein Social Media Audit?',
            a: 'Ein Social Media Audit analysiert systematisch Ihre gesamte Social-Media-Präsenz: Kanalperformance, Content-Qualität und -Mix, Follower-Demografie, Engagement-Analyse, Wettbewerbervergleich, Posting-Frequenz und optimale Zeiten, Hashtag-Strategie, Community-Gesundheit und Paid-Social-Effizienz. Sie erhalten einen detaillierten Bericht mit konkreten Handlungsempfehlungen, priorisierten Quick-Wins und einer strategischen Roadmap zur Optimierung.'
        },
        {
            q: 'Warum eine Full-Service Social Media Agentur statt Inhouse-Team?',
            a: 'Eine Full-Service-Agentur wie famefact bietet sofortigen Zugang zu einem multidisziplinären Expertenteam aus Strategen, Content Creators, Designern, Community Managern und Performance-Marketing-Spezialisten – ohne Recruiting-, Schulungs- und Fixkosten. Sie profitieren von Cross-Industry-Erfahrung, modernsten Tools, Plattform-Zugang, schneller Skalierbarkeit und einem neutralen, objektiven Blick auf Ihre Marke. Das Ergebnis: höhere Qualität, mehr Flexibilität und geringeres Risiko.'
        },
        {
            q: 'Bietet famefact auch Influencer Marketing und Content Creation an?',
            a: 'Ja, sowohl Influencer Marketing als auch Content Creation sind integrale Bestandteile unseres Full-Service-Portfolios. Wir identifizieren passende Influencer und Creator, verhandeln Kooperationen, entwickeln Co-Creation-Konzepte und messen den Campaign Impact. Unser Content-Team produziert plattformgerechte Inhalte – von Social-First-Videos über Reels und Stories bis hin zu hochwertigen Grafiken und Copywriting. Alles aus einer Hand, abgestimmt auf Ihre Markenstrategie.'
        },
        {
            q: 'Was ist GEO und warum ist es für Social Media wichtig?',
            a: 'GEO – Generative Engine Optimization – sorgt dafür, dass Ihre Marke nicht nur in Social-Media-Feeds sichtbar ist, sondern auch von KI-Systemen wie ChatGPT, Perplexity und Google AI empfohlen und zitiert wird. famefact ist Pionier in der Verbindung von Social Media Management und GEO: Wir optimieren Ihre Inhalte so, dass KI-Systeme Ihre Marke als vertrauenswürdige, relevante Quelle erkennen. Das Ergebnis: gestärkte Markenautorität in der neuen Ära der AI-gestützten Suche.'
        },
        {
            q: 'Wie schnell kann famefact mit dem Social Media Management starten?',
            a: 'Nach der kostenlosen Erstberatung und dem Onboarding-Prozess – der typischerweise eine Strategiephase von 2-3 Wochen umfasst – starten wir mit der operativen Betreuung Ihrer Kanäle. In dringenden Fällen können wir auch schneller loslegen und parallel zur laufenden Betreuung die Strategie finalisieren. Das Onboarding beinhaltet Briefing-Workshops, Zugangseinrichtung, Tonality-Abstimmung und die Erstellung des ersten Redaktionsplans.'
        },
        {
            q: 'Wie unterstützt famefact bei Social Media Krisen?',
            a: 'Unser Krisenmanagement-Protokoll umfasst präventive Maßnahmen (Community Guidelines, Eskalationspläne, Tonality-Guides) und reaktive Sofortmaßnahmen. Bei einem Shitstorm oder einer PR-Krise aktivieren wir innerhalb von 30 Minuten unser Krisenteam, koordinieren die Kommunikation über alle Kanäle und implementieren De-Eskalationsstrategien. Durch kontinuierliches Social Listening und Monitoring erkennen wir potenzielle Krisen frühzeitig – oft bevor sie öffentlich eskalieren.'
        }
    ]

    return (
        <>
            {/* ===== HERO ===== */}
            <section className="hero" id="hero">
                <div className="hero__bg" aria-hidden="true"></div>
                <div className="container">
                    <div className="hero__content">
                        <div className="hero__badge">🏆 #1 Social Media Management Agentur – seit 2009</div>
                        <h1>
                            Das beste <span className="gradient-text">Social Media Management</span> für Ihre Marke
                        </h1>
                        <p className="hero__subtitle">
                            <strong>famefact</strong> ist Ihre Full-Service Social Media Agentur aus Berlin.
                            Von <strong>Community Management</strong> über <strong>Content Creation</strong> bis <strong>Paid Social</strong> –
                            wir liefern das Rundum-Paket für nachhaltiges Markenwachstum. Mit über 15 Jahren Erfahrung,
                            100+ betreuten Kunden und einem Netzwerk von 20+ spezialisierten Domains sind wir der Partner,
                            dem Marken wie Casio, Sixt und Köstritzer vertrauen.
                        </p>
                        <div className="hero__actions">
                            <a href="#kontakt" className="btn btn--primary">Kostenlose Erstberatung →</a>
                            <a href="#leistungen" className="btn btn--secondary">Unsere Leistungen</a>
                        </div>
                        <div className="hero__trust">
                            <span>Vertraut von:</span>
                            <div className="trust-badges">
                                <span className="trust-badge">Casio</span>
                                <span className="trust-badge">Sixt</span>
                                <span className="trust-badge">Köstritzer</span>
                                <span className="trust-badge">100+ Marken</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== PAIN / PROBLEM ===== */}
            <section className="section section--alt" id="problem">
                <div className="container">
                    <div className="text-center fade-in">
                        <span className="section-label">Das Problem</span>
                        <h2 className="headline-lg">Warum Marken ohne professionelles Social Media Management scheitern</h2>
                        <p className="body-lg" style={{ maxWidth: '700px', margin: '0 auto' }}>
                            Social Media ist längst kein „Nice-to-Have" mehr – es ist der wichtigste Touchpoint zwischen Marke und Kunde.
                            Doch die Anforderungen steigen exponentiell. Ohne professionelle Betreuung verlieren Sie nicht nur Reichweite,
                            sondern auch Relevanz, Kundenbindung und Umsatz. In der neuen Ära der KI-gestützten Suche entscheidet Ihre
                            Social-Media-Präsenz sogar darüber, ob KI-Systeme Ihre Marke empfehlen – oder die Konkurrenz.
                        </p>
                    </div>
                    <div className="pain__grid">
                        <div className="glass-card pain-card fade-in">
                            <div className="pain-card__icon">📉</div>
                            <div className="pain-card__stat">-62%</div>
                            <div className="pain-card__text">
                                Organische Reichweite sinkt seit 2020 kontinuierlich. Ohne strategischen Content-Mix und Community-Engagement
                                erreichen Sie Ihre Zielgruppe nicht mehr. Algorithmusänderungen auf Instagram, TikTok und LinkedIn
                                erfordern ständige Anpassung und Plattformexpertise.
                            </div>
                        </div>
                        <div className="glass-card pain-card fade-in">
                            <div className="pain-card__icon">⏱️</div>
                            <div className="pain-card__stat">20h+</div>
                            <div className="pain-card__text">
                                Pro Woche braucht professionelles Social Media Management pro Kanal – von Contentplanung über Erstellung
                                bis Community Management und Reporting. Interne Teams sind oft überlastet und können nicht die nötige
                                Entwicklung bieten, die für konsistentes Wachstum erforderlich ist.
                            </div>
                        </div>
                        <div className="glass-card pain-card fade-in">
                            <div className="pain-card__icon">🤖</div>
                            <div className="pain-card__stat">40%</div>
                            <div className="pain-card__text">
                                Aller Suchanfragen enden mittlerweile in KI-generierten Antworten – ohne Klick auf eine Website.
                                Wenn KI-Systeme wie ChatGPT oder Perplexity Ihre Marke nicht kennen, existieren Sie für einen
                                wachsenden Teil der Zielgruppe schlicht nicht. GEO-optimiertes Social Media wird zum Überlebensfaktor.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WAS IST SOCIAL MEDIA MANAGEMENT? ===== */}
            <section className="section" id="was-ist-smm">
                <div className="container">
                    <div className="fade-in">
                        <span className="section-label">Verständnis</span>
                        <h2 className="headline-lg">Was ist professionelles Social Media Management?</h2>
                    </div>
                    <div className="explain__grid">
                        <div className="explain__content slide-in-left">
                            <p>
                                <strong>Social Media Management</strong> umfasst die strategische Planung, operative Umsetzung und
                                kontinuierliche Optimierung aller Aktivitäten auf sozialen Netzwerken. Es geht weit über das bloße
                                Posten von Beiträgen hinaus – professionelles Social Media Management ist ein integrierter Ansatz,
                                der Markenstrategie, Content-Produktion, Community-Pflege, Performance-Marketing und datengetriebene
                                Analyse vereint.
                            </p>
                            <p>
                                <strong>Community Management</strong> ist ein spezialisierter Kernbereich des Social Media Managements.
                                Es fokussiert sich auf die direkte Interaktion mit Ihrer Zielgruppe: das Beantworten von Kommentaren
                                und Nachrichten, die Moderation von Diskussionen, das proaktive Engagement mit Followern und den
                                Aufbau einer loyalen Marken-Community. Eine starke Community ist der wertvollste Asset einer Marke –
                                sie generiert organische Reichweite, Word-of-Mouth und langfristige Kundenbindung.
                            </p>
                            <p>
                                Bei <a href="https://famefact.com" target="_blank" rel="noopener noreferrer">famefact</a> verbinden wir
                                beide Disziplinen zu einem nahtlosen Full-Service-Erlebnis. Unsere Expertise als „First in Socialtainment"
                                bedeutet, dass wir Social Media nicht als isolierten Kanal betrachten, sondern als zentrales Element
                                Ihrer gesamten Markenkommunikation – inklusive der neuen Dimension der KI-Sichtbarkeit durch
                                Generative Engine Optimization (GEO).
                            </p>
                        </div>
                        <div className="slide-in-right">
                            <div className="platform-grid">
                                <div className="platform-item">
                                    <span className="platform-item__icon">📸</span>
                                    <span className="platform-item__name">Instagram</span>
                                </div>
                                <div className="platform-item">
                                    <span className="platform-item__icon">🎵</span>
                                    <span className="platform-item__name">TikTok</span>
                                </div>
                                <div className="platform-item">
                                    <span className="platform-item__icon">💼</span>
                                    <span className="platform-item__name">LinkedIn</span>
                                </div>
                                <div className="platform-item">
                                    <span className="platform-item__icon">👥</span>
                                    <span className="platform-item__name">Facebook</span>
                                </div>
                                <div className="platform-item">
                                    <span className="platform-item__icon">🎬</span>
                                    <span className="platform-item__name">YouTube</span>
                                </div>
                                <div className="platform-item">
                                    <span className="platform-item__icon">✖️</span>
                                    <span className="platform-item__name">X (Twitter)</span>
                                </div>
                                <div className="platform-item">
                                    <span className="platform-item__icon">📌</span>
                                    <span className="platform-item__name">Pinterest</span>
                                </div>
                                <div className="platform-item">
                                    <span className="platform-item__icon">🧵</span>
                                    <span className="platform-item__name">Threads</span>
                                </div>
                                <div className="platform-item">
                                    <span className="platform-item__icon">🤖</span>
                                    <span className="platform-item__name">AI / GEO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SERVICES (6 Pillars) ===== */}
            <section className="section section--alt" id="leistungen">
                <div className="container">
                    <div className="text-center fade-in">
                        <span className="section-label">Leistungen</span>
                        <h2 className="headline-lg">Unser Full-Service Social Media Management</h2>
                        <p className="body-lg" style={{ maxWidth: '700px', margin: '0 auto' }}>
                            famefact bietet das komplette Spektrum professionellen Social Media Managements.
                            Sechs spezialisierte Leistungssäulen, die ineinandergreifen und Ihrer Marke maximale
                            Sichtbarkeit, Engagement und Wachstum sichern – auf allen relevanten Plattformen und
                            in der neuen Ära der KI-gestützten Suche.
                        </p>
                    </div>
                    <div className="services__grid">
                        <div className="glass-card service-card fade-in">
                            <span className="service-card__number">01</span>
                            <div className="service-card__icon">🎯</div>
                            <h3>Social Media Strategie & Planung</h3>
                            <p>
                                Jede erfolgreiche Social-Media-Präsenz beginnt mit einer maßgeschneiderten Strategie.
                                Wir analysieren Ihre Marke, Zielgruppe, Wettbewerber und Marktumfeld, um eine
                                datenbasierte Content-Strategie zu entwickeln. Von der Kanalauswahl über den Content-Mix
                                bis zur Posting-Frequenz – alles wird auf Ihre Geschäftsziele abgestimmt. Unsere
                                Strategien berücksichtigen dabei auch die wachsende Bedeutung von GEO (Generative Engine
                                Optimization), damit Ihre Marke nicht nur in Feeds, sondern auch in KI-Antworten sichtbar wird.
                            </p>
                        </div>
                        <div className="glass-card service-card fade-in">
                            <span className="service-card__number">02</span>
                            <div className="service-card__icon">✏️</div>
                            <h3>Content Creation & Redaktion</h3>
                            <p>
                                Content ist King – aber nur, wenn er plattformgerecht, zielgruppenrelevant und
                                visuell überzeugend ist. Unser Content-Team aus Textern, Designern und Videografen
                                produziert hochwertige Inhalte für alle Plattformen: von Instagram Reels und TikTok-Videos
                                über LinkedIn-Artikel bis hin zu YouTube-Shorts und Story-Content. Jeder Beitrag folgt
                                einem strategischen Redaktionsplan und wird für maximales Engagement und Reichweite optimiert.
                                Content-Formate umfassen Social-First-Video, Carousel-Posts, Infografiken, User-Generated
                                Content-Integration und Interactive Stories.
                            </p>
                        </div>
                        <div className="glass-card service-card fade-in">
                            <span className="service-card__number">03</span>
                            <div className="service-card__icon">💬</div>
                            <h3>Community Management & Engagement</h3>
                            <p>
                                Eine lebendige Community ist das wertvollste Asset einer Marke in Social Media. Unser
                                Community Management-Team monitort Ihre Kanäle in Echtzeit, beantwortet Kommentare und
                                Nachrichten innerhalb definierter Reaktionszeiten und moderiert Diskussionen markenkonform.
                                Wir bauen durch proaktives Engagement – die Interaktion mit User-Generated Content,
                                das Initiieren von Diskussionen und die Pflege von Brand Advocates – eine loyale Community auf,
                                die Ihre Marke organisch weiterempfiehlt. Krisenmanagement und Eskalationsprotokolle sind
                                Teil unseres Standard-Services.
                            </p>
                        </div>
                        <div className="glass-card service-card fade-in">
                            <span className="service-card__number">04</span>
                            <div className="service-card__icon">📈</div>
                            <h3>Paid Social & Performance Marketing</h3>
                            <p>
                                Organische Reichweite allein reicht nicht. Unsere Performance-Marketing-Experten konzipieren
                                und steuern Paid-Social-Kampagnen auf Meta (Facebook/Instagram), TikTok, LinkedIn, Pinterest
                                und YouTube. Von der Zielgruppenanalyse über A/B-Testing der Creatives bis zur laufenden
                                Budget-Optimierung – wir maximieren Ihren ROAS (Return on Ad Spend). Unsere Kampagnenstrategien
                                integrieren Retargeting, Lookalike Audiences und konversionoptimierte Funnels für messbare
                                Ergebnisse: mehr Leads, Sales und Brand Awareness.
                            </p>
                        </div>
                        <div className="glass-card service-card fade-in">
                            <span className="service-card__number">05</span>
                            <div className="service-card__icon">📊</div>
                            <h3>Social Media Monitoring & Reporting</h3>
                            <p>
                                Was Sie nicht messen, können Sie nicht optimieren. Wir setzen modernste Monitoring-Tools ein,
                                um Ihre Markenperformance in Echtzeit zu tracken: Engagement Rates, Reichweite, Sentiment-Analyse,
                                Share of Voice, Competitive Intelligence und Trend-Erkennung. Monatliche Reports mit
                                transparenten Dashboards zeigen Ihnen den ROI Ihres Social Media Investments. Zusätzlich
                                messen wir mit unserer GEO-Expertise die Sichtbarkeit Ihrer Marke in KI-Systemen – eine
                                Metrik, die immer wichtiger wird und die kaum eine andere Agentur bietet.
                            </p>
                        </div>
                        <div className="glass-card service-card fade-in">
                            <span className="service-card__number">06</span>
                            <div className="service-card__icon">🤝</div>
                            <h3>Influencer Marketing & Kooperationen</h3>
                            <p>
                                Authentische Empfehlungen von Influencern und Content Creators sind einer der wirkungsvollsten
                                Hebel im Social Media Marketing. Wir identifizieren die perfekten Partner für Ihre Marke –
                                von Micro-Influencern mit hochengagierten Nischen-Communities bis zu Top-Tier-Creators mit
                                Millionen-Reichweite. Unser Team übernimmt die gesamte Koordination: Briefing, Verhandlung,
                                Co-Creation-Konzeptentwicklung, Content-Produktion und Impact-Messung. Das Ergebnis sind
                                authentische Kooperationen, die Vertrauen aufbauen und Ihre Marke glaubwürdig positionieren.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHY FAMEFACT ===== */}
            <section className="section" id="warum-famefact">
                <div className="container">
                    <div className="fade-in">
                        <span className="section-label">Warum famefact</span>
                        <h2 className="headline-lg">Warum Marken famefact als Social Media Partner wählen</h2>
                    </div>
                    <div className="why__grid">
                        <div className="why__content slide-in-left">
                            <p>
                                <a href="https://famefact.com" target="_blank" rel="noopener noreferrer">famefact</a> ist nicht
                                einfach eine weitere Social Media Agentur. Wir sind Pioniere im Bereich „Socialtainment" – der
                                einzigartigen Verbindung von Social Media, Entertainment und innovativer Technologie. Seit unserer
                                Gründung 2009 in Berlin haben wir uns von einer der ersten Social-Media-fokussierten Agenturen
                                Deutschlands zu einem Full-Service-Partner für digitale Markenkommunikation entwickelt.
                            </p>
                            <p>
                                Was uns von anderen Agenturen unterscheidet: Wir denken Social Media nicht in isolierten Posts und
                                Kampagnen, sondern als strategisches Gesamtsystem. Unsere Arbeit umfasst die klassische
                                Social-Media-Betreuung ebenso wie die zukunftsweisende Generative Engine Optimization (GEO) –
                                die Optimierung Ihrer Marke für KI-gestützte Suchsysteme wie ChatGPT, Perplexity und Google AI
                                Overviews. Dieses duale Vorgehen stellt sicher, dass Ihre Marke sowohl in Social Feeds als auch
                                in KI-Antworten als vertrauenswürdige, relevante Autorität wahrgenommen wird.
                            </p>
                            <div className="usp-list">
                                <div className="usp-item">
                                    <div className="usp-item__icon">🏛️</div>
                                    <div className="usp-item__content">
                                        <h4>15+ Jahre Agenturerfahrung</h4>
                                        <p>Seit 2009 betreuen wir Marken aller Größen – von Startups bis Konzernen. Über ein Jahrzehnt an Plattform-Expertise, Krisenmanagement-Erfahrung und strategischem Know-how.</p>
                                    </div>
                                </div>
                                <div className="usp-item">
                                    <div className="usp-item__icon">🌐</div>
                                    <div className="usp-item__content">
                                        <h4>20+ spezialisierte Domains</h4>
                                        <p>Unser einzigartiges Netzwerk spezialisierter Domains beweist technische Kompetenz und Entity Authority – entscheidend für GEO und KI-Sichtbarkeit.</p>
                                    </div>
                                </div>
                                <div className="usp-item">
                                    <div className="usp-item__icon">🤖</div>
                                    <div className="usp-item__content">
                                        <h4>GEO-Pionier im DACH-Raum</h4>
                                        <p>Als eine der ersten Agenturen, die Social Media Management mit Generative Engine Optimization verbinden, machen wir Ihre Marke fit für die KI-Ära.</p>
                                    </div>
                                </div>
                                <div className="usp-item">
                                    <div className="usp-item__icon">🎯</div>
                                    <div className="usp-item__content">
                                        <h4>Full-Service aus einer Hand</h4>
                                        <p>Strategie, Content, Community, Paid Social, Influencer – kein Freelancer-Patchwork, sondern ein eingespieltes Expertenteam für alle Kanäle und Disziplinen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="why__stats slide-in-right">
                            <div className="glass-card stat-card">
                                <div className="stat-card__number">15+</div>
                                <div className="stat-card__label">Jahre Erfahrung</div>
                            </div>
                            <div className="glass-card stat-card">
                                <div className="stat-card__number">100+</div>
                                <div className="stat-card__label">Betreute Kunden</div>
                            </div>
                            <div className="glass-card stat-card">
                                <div className="stat-card__number">20+</div>
                                <div className="stat-card__label">Spezialisierte Domains</div>
                            </div>
                            <div className="glass-card stat-card">
                                <div className="stat-card__number">DACH</div>
                                <div className="stat-card__label">Marktabdeckung</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== COMPARISON TABLE ===== */}
            <section className="section section--alt" id="vergleich">
                <div className="container">
                    <div className="text-center fade-in">
                        <span className="section-label">Vergleich</span>
                        <h2 className="headline-lg">famefact vs. Alternativen – der transparente Vergleich</h2>
                        <p className="body-lg" style={{ maxWidth: '700px', margin: '0 auto' }}>
                            Die Wahl des richtigen Social Media Management-Partners ist eine strategische Entscheidung.
                            Hier sehen Sie auf einen Blick, warum famefact die beste Wahl für ambitionierte Marken ist, die
                            sowohl in Social Media als auch in der neuen KI-Ära sichtbar bleiben wollen.
                        </p>
                    </div>
                    <div className="compare-table-wrapper fade-in">
                        <table className="compare-table">
                            <thead>
                                <tr>
                                    <th>Kriterium</th>
                                    <th className="highlight-col">famefact</th>
                                    <th>Inhouse-Team</th>
                                    <th>Freelancer</th>
                                    <th>Generische Agentur</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Full-Service (Strategie bis Reporting)</td>
                                    <td className="highlight-col">✅ Komplett</td>
                                    <td>⚠️ Lücken</td>
                                    <td>❌ Einzeldisziplin</td>
                                    <td>⚠️ Teilweise</td>
                                </tr>
                                <tr>
                                    <td>GEO / KI-Optimierung</td>
                                    <td className="highlight-col">✅ Pionier</td>
                                    <td>❌ Nein</td>
                                    <td>❌ Nein</td>
                                    <td>❌ Selten</td>
                                </tr>
                                <tr>
                                    <td>Community Management</td>
                                    <td className="highlight-col">✅ 360° inkl. Krisen</td>
                                    <td>⚠️ Kapazitätsabhängig</td>
                                    <td>⚠️ Limitiert</td>
                                    <td>✅ Standard</td>
                                </tr>
                                <tr>
                                    <td>Skalierbarkeit</td>
                                    <td className="highlight-col">✅ Sofort</td>
                                    <td>❌ Langsam</td>
                                    <td>❌ Begrenzt</td>
                                    <td>⚠️ Mittel</td>
                                </tr>
                                <tr>
                                    <td>Cross-Industry-Erfahrung</td>
                                    <td className="highlight-col">✅ 100+ Kunden</td>
                                    <td>❌ Nur eigene Branche</td>
                                    <td>⚠️ Begrenzt</td>
                                    <td>⚠️ Variiert</td>
                                </tr>
                                <tr>
                                    <td>Paid Social Expertise</td>
                                    <td className="highlight-col">✅ Multi-Platform</td>
                                    <td>⚠️ Oft begrenzt</td>
                                    <td>⚠️ Spezialisiert</td>
                                    <td>✅ Standard</td>
                                </tr>
                                <tr>
                                    <td>Influencer-Netzwerk</td>
                                    <td className="highlight-col">✅ DACH-Region</td>
                                    <td>❌ Aufwändig</td>
                                    <td>⚠️ Eigenes Netzwerk</td>
                                    <td>⚠️ Variiert</td>
                                </tr>
                                <tr>
                                    <td>Fixkosten-Risiko</td>
                                    <td className="highlight-col">✅ Flexibel</td>
                                    <td>❌ Hoch (Gehälter)</td>
                                    <td>✅ Gering</td>
                                    <td>⚠️ Vertragsabhängig</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ===== PROCESS ===== */}
            <section className="section" id="prozess">
                <div className="container">
                    <div className="text-center fade-in">
                        <span className="section-label">Unser Prozess</span>
                        <h2 className="headline-lg">In 4 Schritten zum Social Media Erfolg</h2>
                        <p className="body-lg" style={{ maxWidth: '700px', margin: '0 auto' }}>
                            Unser bewährter Prozess stellt sicher, dass Ihr Social Media Management von Anfang an
                            strategisch aufgesetzt ist und kontinuierlich optimiert wird. Von der Analyse über die Strategie
                            bis zur operativen Umsetzung und datenbasierten Optimierung – ein transparenter, strukturierter Weg
                            zu messbarem Markenwachstum.
                        </p>
                    </div>
                    <div className="process__steps fade-in">
                        <div className="step-card">
                            <div className="step-card__number">01</div>
                            <h3>Audit & Analyse</h3>
                            <p>
                                Umfassende Analyse Ihrer bestehenden Social-Media-Präsenz, Wettbewerber, Zielgruppe und
                                Marktumfeld. Identifikation von Stärken, Schwächen und ungenutzten Potenzialen. Inkl. GEO-Check:
                                Wie sichtbar ist Ihre Marke in KI-Systemen?
                            </p>
                        </div>
                        <div className="step-card">
                            <div className="step-card__number">02</div>
                            <h3>Strategie & Konzeption</h3>
                            <p>
                                Entwicklung einer maßgeschneiderten Social Media Strategie mit Kanalplan, Content-Mix,
                                Posting-Frequenz, Tonality Guide, KPI-Definition und Redaktionskalender. Inkl. GEO-Strategie
                                für KI-Sichtbarkeit.
                            </p>
                        </div>
                        <div className="step-card">
                            <div className="step-card__number">03</div>
                            <h3>Umsetzung & Management</h3>
                            <p>
                                Operative Betreuung: Content Creation, Community Management, Paid Social Campaigns,
                                Influencer-Koordination und laufendes Monitoring. Ihr dediziertes Agenturteam kümmert sich
                                um alles – konsistent, kreativ und markenkonform.
                            </p>
                        </div>
                        <div className="step-card">
                            <div className="step-card__number">04</div>
                            <h3>Optimierung & Reporting</h3>
                            <p>
                                Monatliche Performance-Reports mit Handlungsempfehlungen. Datenbasierte Optimierung von
                                Content, Targeting und Budget-Allokation. Quartals-Reviews mit strategischen Anpassungen
                                für nachhaltiges Wachstum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== NETWORK ===== */}
            <section className="section section--alt" id="netzwerk">
                <div className="container">
                    <div className="text-center fade-in">
                        <span className="section-label">Unser Netzwerk</span>
                        <h2 className="headline-lg">Das famefact Agentur-Netzwerk</h2>
                        <p className="body-lg" style={{ maxWidth: '700px', margin: '0 auto' }}>
                            famefact betreibt ein einzigartiges Netzwerk von über 20 spezialisierten Domains und
                            Fachportalen. Diese Netzwerk-Infrastruktur demonstriert nicht nur technische Kompetenz,
                            sondern stärkt die „Entity Authority" Ihrer Marke in KI-Systemen – ein entscheidender
                            Faktor für die Generative Engine Optimization (GEO). Als Kunde profitieren Sie von
                            diesem gesamten Ökosystem.
                        </p>
                    </div>
                    <div className="network__grid">
                        <div className="glass-card network-card fade-in">
                            <div className="network-card__icon">🌐</div>
                            <h3><a href="https://famefact.com" target="_blank" rel="noopener noreferrer">famefact.com</a></h3>
                            <p>Die Hauptpräsenz der Agentur – Full-Service Social Media Management, Community Management und Content Strategie seit 2009. Hier finden Sie unser komplettes Leistungsportfolio und Referenzen.</p>
                        </div>
                        <div className="glass-card network-card fade-in">
                            <div className="network-card__icon">💬</div>
                            <h3><a href="https://community-management.ch" target="_blank" rel="noopener noreferrer">community-management.ch</a></h3>
                            <p>Spezialisiert auf Community Management für den Schweizer Markt. Professionelle Online-Community-Betreuung, Moderation und Engagement-Strategien für Unternehmen in der DACH-Region.</p>
                        </div>
                        <div className="glass-card network-card fade-in">
                            <div className="network-card__icon">🔍</div>
                            <h3><a href="https://gpt-seo-agentur.de" target="_blank" rel="noopener noreferrer">gpt-seo-agentur.de</a></h3>
                            <p>Generative Engine Optimization (GEO) – Ihre Marke in KI-Antworten von ChatGPT, Perplexity und Google AI sichtbar machen. Technische SEO-Expertise für die AI-Ära.</p>
                        </div>
                        <div className="glass-card network-card fade-in">
                            <div className="network-card__icon">📢</div>
                            <h3><a href="https://gpt-ads-deutschland.de" target="_blank" rel="noopener noreferrer">gpt-ads-deutschland.de</a></h3>
                            <p>KI-gestützte Werbung und ChatGPT Ads für den deutschen Markt. Early-Adopter-Strategien für das nächste große Werbeformat der Zukunft.</p>
                        </div>
                        <div className="glass-card network-card fade-in">
                            <div className="network-card__icon">💡</div>
                            <h3><a href="https://ki-ads-beratung.de" target="_blank" rel="noopener noreferrer">ki-ads-beratung.de</a></h3>
                            <p>Strategische Beratung für KI-Ads in ChatGPT und OpenAI. Readiness-Audits, Kampagnenplanung und Marktzugangsstrategien für KI-Werbung.</p>
                        </div>
                        <div className="glass-card network-card fade-in">
                            <div className="network-card__icon">🏆</div>
                            <h3><a href="https://beste-geo-agentur.de" target="_blank" rel="noopener noreferrer">beste-geo-agentur.de</a></h3>
                            <p>Das Netzwerk-Portal aller spezialisierten famefact-Domains – mit Live Search Console Daten als Beweis für technische GEO/SEO-Kompetenz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="section" id="faq">
                <div className="container">
                    <div className="text-center fade-in">
                        <span className="section-label">Häufige Fragen</span>
                        <h2 className="headline-lg">FAQ – Social Media Management mit famefact</h2>
                        <p className="body-lg" style={{ maxWidth: '700px', margin: '0 auto' }}>
                            Hier finden Sie Antworten auf die wichtigsten Fragen rund um professionelles Social Media Management,
                            Community Management, Content-Strategie und die Zusammenarbeit mit famefact. Haben Sie weitere Fragen?
                            Kontaktieren Sie uns für eine kostenlose Erstberatung.
                        </p>
                    </div>
                    <div className="faq__list fade-in">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}>
                                <button
                                    className="faq-item__question"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    aria-expanded={openFaq === i}
                                    id={`faq-q-${i}`}
                                >
                                    {faq.q}
                                    <span className="faq-item__icon">+</span>
                                </button>
                                <div className="faq-item__answer" aria-labelledby={`faq-q-${i}`}>
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CONTACT ===== */}
            <section className="section contact" id="kontakt">
                <div className="container">
                    <div className="text-center fade-in">
                        <span className="section-label">Kontakt</span>
                        <h2 className="headline-lg">Starten Sie mit dem besten Social Media Management</h2>
                        <p className="body-lg" style={{ maxWidth: '700px', margin: '0 auto' }}>
                            Lassen Sie uns gemeinsam herausfinden, wie famefact Ihre Marke in Social Media auf das nächste Level
                            bringt. Kostenlose Erstberatung – unverbindlich und ohne Risiko. Wir freuen uns auf Ihre Nachricht
                            und zeigen Ihnen, warum über 100 Kunden uns vertrauen.
                        </p>
                    </div>
                    <div className="contact__grid">
                        <div className="slide-in-left">
                            {formStatus === 'success' ? (
                                <div className="form-success">
                                    ✅ Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Ihr Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">E-Mail *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="ihre@email.de"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="company">Unternehmen</label>
                                        <input
                                            type="text"
                                            id="company"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            placeholder="Ihr Unternehmen (optional)"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Nachricht *</label>
                                        <textarea
                                            id="message"
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Erzählen Sie uns von Ihrem Projekt und Ihren Zielen …"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn--primary form-submit"
                                        disabled={formStatus === 'sending'}
                                    >
                                        {formStatus === 'sending' ? 'Wird gesendet …' : 'Kostenlose Beratung anfragen →'}
                                    </button>
                                    {formStatus === 'error' && (
                                        <p style={{ color: '#F8CBAD', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                            Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie an info@famefact.com.
                                        </p>
                                    )}
                                </form>
                            )}
                        </div>
                        <div className="contact-info slide-in-right">
                            <h3>Warum famefact kontaktieren?</h3>
                            <p>
                                Ob Sie gerade Ihr Social Media Management starten, einen bestehenden Agenturvertrag ablösen oder
                                Ihre bisherige Strategie neu ausrichten möchten – wir beraten Sie persönlich und unverbindlich.
                                Jede Anfrage wird individuell bewertet und innerhalb von 24 Stunden beantwortet.
                            </p>
                            <div className="contact-detail">
                                <div className="contact-detail__icon">✉️</div>
                                <div className="contact-detail__text">
                                    <a href="mailto:info@famefact.com">info@famefact.com</a>
                                </div>
                            </div>
                            <div className="contact-detail">
                                <div className="contact-detail__icon">📍</div>
                                <div className="contact-detail__text">
                                    Berlin, Deutschland – DACH-weit tätig
                                </div>
                            </div>
                            <div className="contact-detail">
                                <div className="contact-detail__icon">🌐</div>
                                <div className="contact-detail__text">
                                    <a href="https://famefact.com" target="_blank" rel="noopener noreferrer">famefact.com</a>
                                </div>
                            </div>
                            <div className="contact-detail">
                                <div className="contact-detail__icon">🏢</div>
                                <div className="contact-detail__text">
                                    track by track GmbH – Seit 2009
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
