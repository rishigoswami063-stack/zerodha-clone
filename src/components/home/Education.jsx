import './Education.css';

const Education = () => {
  return (
    <section className="education-section">
      <div className="container education-container">
        {/* Left Column: Education Illustration */}
        <div className="education-visual">
          <img
            src="/images/index-education.svg"
            alt="Free and open market education illustration"
            className="education-image"
          />
        </div>

        {/* Right Column: Content and Links */}
        <div className="education-content">
          <h2 className="education-heading">Free and open market education</h2>

          <div className="education-topic">
            <p className="education-topic-text">
              Varsity, the largest online stock market education book in the world covering everything
              from the basics to advanced trading.
            </p>
            <a
              href="https://zerodha.com/varsity/"
              target="_blank"
              rel="noreferrer"
              className="education-link"
            >
              Varsity <span className="arrow-icon">&rarr;</span>
            </a>
          </div>

          <div className="education-topic">
            <p className="education-topic-text">
              TradingQ&amp;A, the most active trading and investment community in India for all your
              market related queries.
            </p>
            <a
              href="https://tradingqna.com/"
              target="_blank"
              rel="noreferrer"
              className="education-link"
            >
              TradingQ&amp;A <span className="arrow-icon">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
