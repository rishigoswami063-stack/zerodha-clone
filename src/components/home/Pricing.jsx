import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="container pricing-container">
        {/* Left Column: Heading & Info */}
        <div className="pricing-left">
          <h2 className="pricing-heading">Unbeatable pricing</h2>
          <p className="pricing-desc">
            We pioneered the concept of discount broking and price transparency in India. Flat fees
            and no hidden charges.
          </p>
          <Link to="/pricing" className="pricing-link">
            See pricing <span className="arrow-icon">&rarr;</span>
          </Link>
        </div>

        {/* Right Column: Pricing Cards */}
        <div className="pricing-right">
          <div className="pricing-card">
            <div className="pricing-card-visual">
              <img
                src="/images/pricing-eq.svg"
                alt="Free account opening illustration"
                className="pricing-svg"
              />
            </div>
            <div className="pricing-card-content">
              <h3 className="pricing-card-title">Free account opening</h3>
              <p className="pricing-card-subtitle">
                Free equity delivery and direct mutual funds
              </p>
            </div>
          </div>

          <div className="pricing-card">
            <div className="pricing-card-visual">
              <img
                src="/images/other-trades.svg"
                alt="Intraday and F&O pricing illustration"
                className="pricing-svg"
              />
            </div>
            <div className="pricing-card-content">
              <h3 className="pricing-card-title">&#8377;20</h3>
              <p className="pricing-card-subtitle">
                Intraday and F&amp;O
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
