import { SERVICES } from '../../data';
import './Footer.scss';

const SOCIALS = [
  { icon: '✈️', label: 'Telegram',  href: 'https://t.me/azizjon_smm' },
  { icon: '📸', label: 'Instagram', href: 'https://instagram.com/azizjon.smm' },
];

const CONTACTS_FOOTER = [
  { icon: '📞', value: '+998 90 123 45 67' },
  { icon: '✈️', value: '@azizjon_smm' },
  { icon: '📍', value: 'Toshkent, Uzbekiston' },
];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">

          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">A</div>
              <span className="footer__logo-text">Azizjon<span>SMM</span></span>
            </div>
            <p className="footer__tagline">
              Toshkent shahridagi SMM mutaxassisi. Biznesingizni ijtimoiy tarmoqlarda muvaffaqiyatli rivojlantirish uchun shu yerdaman.
            </p>
            <div className="footer__socials">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer__social">
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="footer__col-title">Xizmatlar</div>
            {SERVICES.slice(0, 5).map(s => (
              <button key={s.title} className="footer__col-link" onClick={() => scrollTo('xizmatlar')}>
                {s.title}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="footer__col-title">Bog&apos;lanish</div>
            {CONTACTS_FOOTER.map(c => (
              <div key={c.value} className="footer__contact-row">
                <span>{c.icon}</span> {c.value}
              </div>
            ))}
          </div>

        </div>

        <div className="footer__bottom">
          <span className="footer__copy">© 2024 AzizjonSMM. Barcha huquqlar himoyalangan.</span>
          <span className="footer__location">Toshkent, O&apos;zbekiston 🇺🇿</span>
        </div>
      </div>
    </footer>
  );
}
