import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background orbs */}
      <div className="hero__bg-orb hero__bg-orb--1" aria-hidden="true" />
      <div className="hero__bg-orb hero__bg-orb--2" aria-hidden="true" />
      <div className="hero__bg-orb hero__bg-orb--3" aria-hidden="true" />

      <div className="hero__content">
        <img
          src={import.meta.env.BASE_URL + "images/brand/logo.jpg"}
          alt="Lila Beauty"
          className="hero__logo"
        />

        <h1 className="hero__slogan">
          Belleza que se siente{' '}
          <span className="hero__slogan-accent">tuya</span>
        </h1>

        <p className="hero__subtitle">
          Productos de belleza originales, curados con cariño y listos para ti.
        </p>

        <a href="#catalog" className="hero__cta">
          Ver Catálogo
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </a>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
