import { useInView } from '../../hooks/useInView';
import SectionTitle from '../ui/SectionTitle';
import './Boxes.css';

const BOXES = [
  {
    id: 'box-1',
    name: 'Lila Glow Box',
    badge: 'Popular',
    description:
      'Nuestra caja más pedida. Incluye lo esencial para un glow natural de día a noche.',
    items: ['Lip Gloss', 'Bronzing Drops', 'Halo Glow Blush'],
    images: [
      import.meta.env.BASE_URL + 'images/lipsticks/elf-lip-gloss-rose.jpeg',
      import.meta.env.BASE_URL + 'images/skincare/elf-bronzing-drops.jpeg',
      import.meta.env.BASE_URL + 'images/skincare/elf-halo-glow-blush-wand.jpeg',
    ],
  },
  {
    id: 'box-2',
    name: 'Lip Lovers Box',
    badge: 'Nuevo',
    description:
      'Para las que no pueden vivir sin un buen labial. La combinación perfecta de color y cuidado.',
    items: ['Jelly Job Gloss', 'Smushy Balm', 'Fat Oil Lip Drip'],
    images: [
      import.meta.env.BASE_URL + 'images/lipsticks/nyx-jelly-job-red.jpeg',
      import.meta.env.BASE_URL + 'images/lipsticks/nyx-smushy-pink.jpeg',
      import.meta.env.BASE_URL + 'images/lip-oils/nyx-fat-oil-lip-drip.jpeg',
    ],
  },
  {
    id: 'box-3',
    name: 'Skin First Box',
    badge: 'Cuidado',
    description:
      'Lo que tu piel necesita. Limpieza, hidratación y glow en una sola caja.',
    items: ['Star Wash', 'Skin Tint SPF', 'SuperGlow Stick'],
    images: [
      import.meta.env.BASE_URL + 'images/skincare/star-wash-cleanser.jpeg',
      import.meta.env.BASE_URL + 'images/skincare/elf-halo-glow-skin-tint.jpeg',
      import.meta.env.BASE_URL + 'images/skincare/pixi-superglow-stick.jpeg',
    ],
  },
];

export default function Boxes() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <section className="boxes section" id="boxes" ref={ref}>
      <div className="container">
        <SectionTitle
          label="Cajas"
          heading="Nuestras Cajas"
          description="Combinaciones especiales pensadas para que te consientas o regales algo único."
        />

        <div className="boxes__grid">
          {BOXES.map((box, index) => (
            <article
              key={box.id}
              className={`boxes__card ${isInView ? 'boxes__card--visible' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              id={`box-${box.id}`}
            >
              <div className="boxes__card-image">
                {box.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={box.items[i]}
                    className="boxes__card-thumb"
                    loading="lazy"
                  />
                ))}
                <span className="boxes__card-badge">{box.badge}</span>
              </div>

              <div className="boxes__card-info">
                <h3 className="boxes__card-name">{box.name}</h3>
                <p className="boxes__card-desc">{box.description}</p>

                <div className="boxes__card-items">
                  {box.items.map((item) => (
                    <span key={item} className="boxes__card-item">
                      {item}
                    </span>
                  ))}
                </div>

                <a href="#contact" className="boxes__card-cta">
                  Preguntar por esta caja
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
