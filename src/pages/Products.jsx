import './Products.css';

const Products = () => {
  const products = [
    {
      id: 'kite',
      name: 'Kite',
      logo: '/images/kite-logo.svg',
      title: 'Our flagship trading platform',
      description:
        'Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.',
      links: [
        { label: 'Explore Kite', href: 'https://kite.zerodha.com' },
        { label: 'Try demo', href: 'https://kite-demo.zerodha.com' },
      ],
      badge: 'Flagship App',
    },
    {
      id: 'console',
      name: 'Console',
      logo: '/images/console.svg',
      title: 'The central dashboard',
      description:
        'The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations, tax statements, and analytics.',
      links: [{ label: 'Learn more', href: 'https://console.zerodha.com' }],
      badge: 'Reporting & Analytics',
    },
    {
      id: 'coin',
      name: 'Coin',
      logo: '/images/coin.svg',
      title: 'Direct mutual funds platform',
      description:
        'Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.',
      links: [{ label: 'Coin', href: 'https://coin.zerodha.com' }],
      badge: '₹0 Commission',
    },
    {
      id: 'kite-connect',
      name: 'Kite Connect API',
      logo: '/images/kite-connect.svg',
      title: 'Trading APIs for developers',
      description:
        'Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.',
      links: [{ label: 'Kite Connect', href: 'https://kite.trade' }],
      badge: 'Developer Tools',
    },
    {
      id: 'varsity',
      name: 'Varsity mobile',
      logo: '/images/varsity.png',
      title: 'Financial education on the go',
      description:
        'An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.',
      links: [{ label: 'Varsity mobile', href: 'https://zerodha.com/varsity' }],
      badge: 'Free Education',
    },
  ];

  return (
    <div className="products-page">
      {/* Hero Header */}
      <section className="products-hero">
        <div className="container products-hero-container">
          <h1 className="products-hero-title">Technology</h1>
          <p className="products-hero-subtitle">
            Sleek, modern, and intuitive trading platforms
          </p>
          <p className="products-hero-subtext">
            Check out our{' '}
            <a href="/pricing" className="products-text-link">
              investment offerings <span className="arrow-icon">&rarr;</span>
            </a>
          </p>
        </div>
      </section>

      {/* Product Showcase Rows */}
      <section className="products-list-section">
        <div className="container products-list-container">
          {products.map((product, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={product.id}
                className={`product-showcase-row ${isReversed ? 'row-reversed' : ''}`}
              >
                {/* Visual / Card side */}
                <div className="product-visual-col">
                  <div className="product-card-preview">
                    <img
                      src={product.logo}
                      alt={`${product.name} Logo`}
                      className="product-logo-img"
                    />
                    <span className="product-badge">{product.badge}</span>
                    <h3 className="product-preview-name">{product.name}</h3>
                  </div>
                </div>

                {/* Content description side */}
                <div className="product-info-col">
                  <h2 className="product-title">{product.name}</h2>
                  <p className="product-tagline">{product.title}</p>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-links-group">
                    {product.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="product-action-link"
                      >
                        {link.label} <span className="arrow-icon">&rarr;</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Universe Ecosystem CTA */}
      <section className="products-universe-section">
        <div className="container products-universe-container">
          <h2 className="universe-title">The Zerodha Universe</h2>
          <p className="universe-subtitle">
            Extend your trading and investment experience even further with our partner platforms
          </p>
          <div className="universe-cta-wrapper">
            <a href="#signup" className="hero-cta-btn">
              Sign up for free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
