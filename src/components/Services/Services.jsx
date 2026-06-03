import useInView from '../../hooks/useInView';
import { SERVICES } from '../../data';
import './Services.scss';

export default function Services() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="xizmatlar" ref={ref} className="services">
      <div className="services__inner">
        <div className="services__head">
          <div className="services__eyebrow">Xizmatlar</div>
          <h2 className="services__title">Nima <span>Taklif Qilaman</span></h2>
          <p className="services__sub">Kontent va shaxsiy brend orqali doimiy sotuvlar.</p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`services__card ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="services__icon">{s.icon}</div>
              <h3 className="services__name">{s.title}</h3>
              <p className="services__desc">{s.desc}</p>
              <div className="services__more" onClick={() => document.getElementById('aloqa')?.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer' }}>Batafsil →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
