import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
            <div className="container header__inner">
                <Link to="/" className="header__logo" aria-label="Best Social Media Management Startseite">
                    best-social-media-management<span className="dot">.</span>com
                    <span className="sub">by famefact</span>
                </Link>

                <nav className="header__nav" aria-label="Hauptnavigation">
                    <a href="/#leistungen">Leistungen</a>
                    <a href="/#prozess">Prozess</a>
                    <a href="/#netzwerk">Netzwerk</a>
                    <a href="/#faq">FAQ</a>
                    <a href="/#kontakt" className="btn btn--primary header__cta">Beratung starten</a>
                </nav>
            </div>
        </header>
    )
}
