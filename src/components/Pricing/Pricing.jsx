import useInView from '../../hooks/useInView';
import { PLANS } from '../../data';
import './Pricing.scss';

export default function Pricing() {
  const [ref, inView] = useInView(0.1);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="narxlar" ref={ref} className="pricing">
      <div className="pricing__inner">
        <div className="pricing__head">
          <div className="pricing__eyebrow">Narxlar</div>
          <h2 className="pricing__title">
            O&apos;zingizga <span>Mos Paket</span>ni Tanlang
          </h2>
        </div>

        <div className="pricing__grid">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`pricing__card ${plan.popular ? 'pricing__card--popular' : 'pricing__card--regular'} ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {plan.popular && <div className="pricing__badge">⭐ ENG MASHHUR</div>}

              <div className="pricing__name">{plan.name}</div>
              <div className="pricing__price-row">
                <span className="pricing__price">{plan.price}</span>
                <span className="pricing__period">so&apos;m / oy</span>
              </div>

              <div className="pricing__features">
                {plan.features.map(f => (
                  <div key={f} className="pricing__feature">
                    <span>✅</span> {f}
                  </div>
                ))}
              </div>

              <button className="pricing__cta" onClick={() => scrollTo('aloqa')}>
                {plan.cta} →
              </button>
            </div>
          ))}
        </div>

        <p className="pricing__note">
          💡 Individual loyihalar uchun alohida narx kelishuvi mavjud. Bog&apos;laning!
        </p>
      </div>
    </section>
  );
}
