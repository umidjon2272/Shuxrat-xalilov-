import { SERVICES } from '../../data';
import './Footer.scss';

const SOCIALS = [
  { icon: '✈️', label: 'Telegram', href: 'https://t.me/shuxrat_xalilov' },
  { icon: '📸', label: 'Instagram', href: 'https://www.instagram.com/shuxratxalilov_?igsh=b2kzeTV6eWV5ZW9q' },
];

const CONTACTS_FOOTER = [
  { icon: '📞', value: '+998 94 880 59 69', href: 'tel:+998948805969' },
  { icon: '✈️', value: '@shuxratxalilov_', href: 'https://t.me/shuxrat_xalilov' },
  { icon: '📍', value: 'Toshkent, Uzbekiston', href: 'https://maps.google.com/?q=Toshkent' },
];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">

          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">SH</div>
              <span className="footer__logo-text">Shuxrat<span>Xalilov</span></span>
            </div>
            <p className="footer__tagline">
              Toshkent shahridagi SMM mutaxassisi. Biznesingizni ijtimoiy tarmoqlarda muvaffaqiyatli rivojlantirish uchun shu yerdaman.
            </p>
            <div className="footer__socials">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social"
                >
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="footer__col-title">Xizmatlar</div>
            {SERVICES.slice(0, 5).map(s => (
              <button key={s.title} className="footer__col-link" onClick={() => scrollTo('xizmatlar')}>
                {s.title}
              </button>
            ))}
          </div>

          <div>
            <div className="footer__col-title">Bog'lanish</div>
            {CONTACTS_FOOTER.map(c => (
              <a
                key={c.value}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__contact-row"
                style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                <span>{c.icon}</span> {c.value}
              </a>
            ))}
          </div>

        </div>

        <div className="footer__bottom">
          <span className="footer__copy">© 2024 Shuxrat Xalilov. Barcha huquqlar himoyalangan.</span>
          <span className="footer__location">Toshkent, O'zbekiston 🇺🇿</span>
        </div>
      </div>
    </footer>
  );
}