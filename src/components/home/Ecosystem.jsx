import { Link } from 'react-router-dom';
import './Ecosystem.css';

const Ecosystem = () => {
  const valueProps = [
    {
      title: 'Customer-first always',
      description:
        'That\'s why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.',
    },
    {
      title: 'No spam or gimmicks',
      description:
        'No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.',
    },
    {
      title: 'The Zerodha universe',
      description:
        'Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.',
    },
    {
      title: 'Do better with money',
      description:
        'With initiatives like Nudge and Kill Switch, we don\'t just facilitate transactions, but actively help you do better with your money.',
    },
  ];

  return (
    <section className="ecosystem-section">
      <div className="container ecosystem-container">
        {/* Left Column: Trust & Value Props */}
        <div className="ecosystem-content">
          <h2 className="ecosystem-heading">Trust with confidence</h2>
          <div className="ecosystem-props">
            {valueProps.map((prop) => (
              <div key={prop.title} className="value-prop-item">
                <h3 className="value-prop-title">{prop.title}</h3>
                <p className="value-prop-desc">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Illustration & Action Links */}
        <div className="ecosystem-visual">
          <div className="ecosystem-image-wrapper">
            <img
              src="/images/ecosystem.png"
              alt="Zerodha Ecosystem illustration"
              className="ecosystem-image"
            />
          </div>
          <div className="ecosystem-links-row">
            <Link to="/products" className="ecosystem-link">
              Explore our products <span className="arrow-icon">&rarr;</span>
            </Link>
            <a
              href="https://kite-demo.zerodha.com"
              target="_blank"
              rel="noreferrer"
              className="ecosystem-link"
            >
              Try Kite demo <span className="arrow-icon">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
