import useInView from '../../hooks/useInView';
import './Hero.scss';

const AVATARS = ['🧑‍💼', '👩‍💼', '👨‍💼', '👩‍💼'];
const AVATAR_COLORS = ['#60a5fa', '#818cf8', '#34d399', '#f472b6'];
const MINI_STATS = [['3+', 'Yillik Tajriba'], ['47+', 'Loyihalar'], ['3.2M', 'Reach'], ['92%', 'Qoniqish']];
const SKILLS = ['Instagram', 'Telegram', 'Facebook Ads', 'TikTok', 'Copywriting', 'Analytics'];

export default function Hero() {
  const [ref, inView] = useInView(0.1);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={ref} className="hero">
      <div className="hero__inner">

        {/* Left */}
        <div className={`hero__left ${inView ? 'visible' : ''}`}>
          <div className="hero__badge">✨ Shaxsiy brend qurish bo'yicha mutaxasis</div>

          <h1 className="hero__title">
            Shaxsiy brendingizni <span>Ijtimoiy</span> tarmoqlarda rivojlantirb beraman
          </h1>

          <p className="hero__desc">
            3+ yillik tajriba, 47+ muvaffaqiyatli loyiha. Sizning biznesingiz uchun natijaga yo&apos;naltirilgan SMM strategiyalar yarataman.
          </p>

          <div className="hero__actions">
            <button className="hero__btn-primary" onClick={() => scrollTo('aloqa')}>
              🚀 Bepul Konsultatsiya
            </button>
            <button className="hero__btn-secondary" onClick={() => scrollTo('loyihalar')}>
              📂 Loyihalar
            </button>
          </div>

          <div className="hero__proof">
            <div className="hero__avatars">
              {AVATARS.map((e, i) => (
                <div key={i} className="hero__avatar" style={{ background: AVATAR_COLORS[i] }}>
                  {e}
                </div>
              ))}
            </div>
            <div className="hero__proof-text">
              <strong>⭐⭐⭐⭐⭐ 47+ mijoz</strong>
              <span>ishonch bildirdi</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className={`hero__right ${inView ? 'visible' : ''}`}>
          <div className="hero__card">
            <div className="hero__profile">
              <div className="hero__avatar-lg">A</div>
              <div>
                <div className="hero__profile-name">Shuxrat Xalilov </div>
                <div className="hero__profile-role">SMM Mutaxassisi & Targetolog</div>
                <div className="hero__profile-tags">
                  <span className="hero__profile-tag">📍 Toshkent</span>
                  <span className="hero__profile-tag">✅ Verified</span>
                </div>
              </div>
            </div>

            <div className="hero__mini-stats">
              {MINI_STATS.map(([n, l]) => (
                <div key={l} className="hero__mini-stat">
                  <strong>{n}</strong>
                  <span>{l}</span>
                </div>
              ))}
            </div>

            <div className="hero__skills">
              {SKILLS.map(s => (
                <span key={s} className="hero__skill">{s}</span>
              ))}
            </div>
          </div>

          <div className="hero__floating">🔥 Top SMM</div>
        </div>

      </div>
    </section>
  );
}
