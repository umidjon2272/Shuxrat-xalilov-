import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data';
import './Navbar.scss';

const sectionId = (name) => {
  const map = { 'Home': 'hero', 'Haqida': 'haqida', 'Xizmatlar': 'xizmatlar', 'Loyihalar': 'loyihalar', 'Narxlar': 'narxlar', 'Aloqa': 'aloqa' };
  return map[name] || name.toLowerCase();
};

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (name) => {
    const el = document.getElementById(sectionId(name));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(name);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a className="navbar__logo" href="#hero" onClick={() => scrollTo('Home')}>
          <div className="navbar__logo-icon">Sh</div>
          <span className="navbar__logo-text">Shuxrat<span>Xalilov</span></span>
        </a>

        <div className="navbar__links">
          {NAV_LINKS.map(n => (
            <button
              key={n}
              className={`navbar__link ${active === n ? 'navbar__link--active' : ''}`}
              onClick={() => scrollTo(n)}
            >{n}</button>
          ))}
          <button className="navbar__cta" onClick={() => scrollTo('Aloqa')}>
            📞 Bog&apos;lanish
          </button>
        </div>

        <button className="navbar__burger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__mobile-menu">
          {NAV_LINKS.map(n => (
            <button key={n} className="navbar__mobile-link" onClick={() => scrollTo(n)}>{n}</button>
          ))}
        </div>
      )}
    </nav>
  );
}
