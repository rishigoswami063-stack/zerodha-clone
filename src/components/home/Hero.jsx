import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-image-wrapper">
          <img
            src="/images/landing.svg"
            alt="Invest in everything illustration"
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Invest in everything</h1>
          <p className="hero-subtitle">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>
          <a href="#signup" className="hero-cta-btn">
            Sign up for free
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
