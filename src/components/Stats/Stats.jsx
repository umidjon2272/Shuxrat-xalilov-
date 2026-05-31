import useInView from '../../hooks/useInView';
import { STATS } from '../../data';
import './Stats.scss';

export default function Stats() {
  const [ref, inView] = useInView(0.2);

  return (
    <section ref={ref} className="stats">
      <div className="stats__inner">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`stats__item ${inView ? 'visible' : ''}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="stats__num">{s.num}</div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
