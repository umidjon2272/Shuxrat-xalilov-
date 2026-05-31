import useInView from '../../hooks/useInView';
import { PROJECTS } from '../../data';
import './Projects.scss';

export default function Projects() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="loyihalar" ref={ref} className="projects">
      <div className="projects__inner">
        <div className="projects__head">
          <div className="projects__eyebrow">Portfolio</div>
          <h2 className="projects__title">Mening <span>Ishlarim</span></h2>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className={`projects__card ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="projects__img-wrap">
                <img src={p.img} alt={p.title} className="projects__img" />
              </div>
              <span className="projects__tag">{p.tag}</span>
              <div className="projects__info">
                <div className="projects__category">{p.category}</div>
                <div className="projects__name">{p.title}</div>
                <span className="projects__result">📈 {p.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
