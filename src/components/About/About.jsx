import { useInView } from '../../hooks/useInView';
import './About.css';

const VALUES = [
  {
    icon: '✨',
    title: 'Productos originales',
    desc: 'Todo lo que vendemos es 100% original, directo de marcas de confianza.',
  },
  {
    icon: '💜',
    title: 'Curaduría con cariño',
    desc: 'Elegimos cada producto pensando en lo que realmente vale la pena.',
  },
  {
    icon: '⚡',
    title: 'Respuesta rápida',
    desc: 'Te contestamos al momento. Sin complicaciones ni vueltas.',
  },
];

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <div className="about__layout">
          <div className={`about__text ${isInView ? 'about__text--visible' : ''}`}>
            <span className="about__label">Nosotros</span>
            <h2 className="about__heading">Belleza con intención</h2>
            <p className="about__description">
              Creemos que el cuidado personal es un momento para ti. Por eso
              elegimos productos honestos, de marcas en las que confiamos, y los
              acercamos a ti sin complicaciones ni vueltas.
            </p>
          </div>

          <div className="about__cards">
            {VALUES.map((value, index) => (
              <div
                className={`about__card ${isInView ? 'about__card--visible' : ''}`}
                key={value.title}
                style={{ transitionDelay: isInView ? `${300 + index * 150}ms` : '0ms' }}
              >
                <div className="about__card-icon" aria-hidden="true">
                  {value.icon}
                </div>
                <div className="about__card-content">
                  <h3 className="about__card-title">{value.title}</h3>
                  <p className="about__card-desc">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
