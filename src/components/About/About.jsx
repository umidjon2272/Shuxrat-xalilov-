import useInView from '../../hooks/useInView';
import './About.scss';

const CARDS = [
  { icon: '🎯', title: 'Maqsadli Natija',  desc: 'Har bir kampaniya KPI asosida boshqariladi' },
  { icon: '📊', title: 'Data-Driven',       desc: 'Analitika asosida qarorlar qabul qilinadi' },
  { icon: '⚡', title: 'Tez Muloqot',       desc: '24 soat ichida javob kafolati' },
  { icon: '🔄', title: "Doimiy O'sish",     desc: 'Har oy hisobot va strategiya yangilanishi' },
];

export default function About() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="haqida" ref={ref} className="about">
      <div className="about__inner">

        <div className={`about__visual ${inView ? 'visible' : ''}`}>
          <div className="about__avatar">A</div>
          <div>
            <div className="about__name">Shuxrat Xalilov</div>
            <div className="about__role">Shaxsiy brand | Targetolog</div>
          </div>
          <div className="about__certs">
            {['Meta Certified', 'Google Ads', 'HubSpot'].map(c => (
              <span key={c} className="about__cert">✅ {c}</span>
            ))}
          </div>
        </div>

        <div className={`about__content ${inView ? 'visible' : ''}`}>
          <div className="about__eyebrow">Men Haqimda</div>
          <h2 className="about__title">
            Raqamlar Ortida — <span>Real Natijalar</span>
          </h2>
          <p className="about__text">
            Men Shuxrat Xalilov — 3+ yildan ortiq SMM va digital marketing sohasida faoliyat yuritib kelaman. Kichik biznesdan tortib yirik brendlargacha — har biriga individual yondashuv va o&apos;lchanadigan natijalar taqdim etaman.
          </p>
          <p className="about__text">
            Instagram, Telegram, Facebook va Youtube platformalarida auditoriya qurish, reklama optimallashtirish va brand identifikatsiyasini shakllantirish — mening asosiy ixtisosligim.
          </p>
          <div className="about__cards">
            {CARDS.map(c => (
              <div key={c.title} className="about__card">
                <div className="about__card-icon">{c.icon}</div>
                <div className="about__card-title">{c.title}</div>
                <div className="about__card-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
