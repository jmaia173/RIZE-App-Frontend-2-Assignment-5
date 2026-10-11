import "./Hero.css";

function Hero({ title, subtitle, ctaText, image, onCtaClick }) {
  const backgroundImage = image
    ? `linear-gradient(135deg, rgba(26, 26, 46, 0.92), rgba(102, 126, 234, 0.7)), url("${image}")`
    : undefined;

  return (
    <section className="hero" style={{ backgroundImage }}>
      <div className="hero-content">
        <h2 className="hero-title">{title}</h2>
        <p className="hero-subtitle">{subtitle}</p>
        <button className="hero-button" onClick={onCtaClick}>
          {ctaText}
        </button>
      </div>
    </section>
  );
}

export default Hero;