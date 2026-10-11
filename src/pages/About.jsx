import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Header */}
      <section className="about-hero">
        <div className="container about-hero-container">
          <h1 className="about-hero-title">
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </section>

      {/* 2-Column Story Section */}
      <section className="about-story-section">
        <div className="container about-story-container">
          {/* Left Column */}
          <div className="about-col">
            <p className="story-paragraph">
              We started operations on the 15th of August, 2010 with the goal of breaking all barriers
              that traders and investors face in India in terms of cost, support, and technology. We
              named the company Zerodha, a combination of Zero and &quot;Rodha&quot;, the Sanskrit word for
              barrier.
            </p>
            <p className="story-paragraph">
              Today, our disruptive pricing models and in-house technology have made us the biggest
              stock broker in India.
            </p>
            <p className="story-paragraph">
              Over 1+ Crore clients place millions of orders every day through our powerful ecosystem
              of investment platforms, contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>

          {/* Right Column */}
          <div className="about-col">
            <p className="story-paragraph">
              In addition, we run a number of popular open online educational and community
              initiatives such as Varsity and TradingQ&amp;A to empower retail investors and traders.
            </p>
            <p className="story-paragraph">
              <a href="https://rainmatter.com" target="_blank" rel="noreferrer" className="about-link">
                Rainmatter
              </a>
              , our fintech fund and incubator, has invested in several fintech startups with the goal
              of growing the Indian capital markets.
            </p>
            <p className="story-paragraph">
              And yet, we are always up to something new every day. Catch up on the latest updates on
              our blog, see what the media is saying about us, or learn about our work culture.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Profile Section */}
      <section className="about-leadership-section">
        <div className="container about-leadership-container">
          <h2 className="leadership-heading">People</h2>
          <div className="leadership-card">
            <div className="leadership-avatar-col">
              <img
                src="/images/rishi.png"
                alt="Rishi Goswami"
                className="leadership-profile-img"
              />
              <h3 className="leader-name">Rishi Goswami</h3>
              <p className="leader-designation">Founder &amp; CEO</p>
            </div>
            <div className="leadership-bio-col">
              <p className="bio-paragraph">
                Rishi bootstrapped and founded Zerodha to revolutionize the Indian financial technology landscape. Driven by a deep commitment to transparency and engineering excellence, he transformed the way millions of individuals trade and invest in capital markets.
              </p>
              <p className="bio-paragraph">
                With a strong focus on building resilient systems and accessible financial products, Rishi spearheads continuous innovations across modern algorithmic platforms, direct mutual funds, and educational initiatives.
              </p>
              <p className="bio-paragraph">
                Connect on{' '}
                <a
                  href="#profile"
                  className="about-link"
                >
                  Homepage
                </a>{' '}
                / <a href="#tradingqna" className="about-link">TradingQ&amp;A</a> /{' '}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="about-link"
                >
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
