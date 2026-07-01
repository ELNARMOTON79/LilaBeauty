import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Catálogo', href: '#catalog' },
  { label: 'Cajas', href: '#boxes' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo" aria-label="Lila Beauty — Home">
          <img
            src="/images/brand/logo.jpg"
            alt="Lila Beauty"
            className="navbar__logo-img"
          />
        </a>

        <nav
          className={`navbar__nav ${isOpen ? 'navbar__nav--open' : ''}`}
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div
          className={`navbar__overlay ${isOpen ? 'navbar__overlay--visible' : ''}`}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        <button
          className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>
      </div>
    </header>
  );
}
