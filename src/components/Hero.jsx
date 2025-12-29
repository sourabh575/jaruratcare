import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image-container">
        <img
          src="https://template.canva.com/EAE0HK7TP7Y/1/0/1600w-fj5Ej0JtAC4.jpg"
          alt="Cancer awareness banner"
          className="hero-image"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = "https://template.canva.com/EAE0HK7TP7Y/1/0/1600w-fj5Ej0JtAC4.jpg"
          }}
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-heading">Cancer Awareness & Support</h1>
        <p className="hero-message">
          Together, we can spread awareness, support patients, and save lives.
        </p>
        <p className="hero-message">
          This initiative is dedicated to promoting cancer awareness and care.
        </p>
      </div>
    </section>
  );
}

export default Hero;
