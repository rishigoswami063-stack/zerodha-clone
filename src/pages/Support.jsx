import { useState } from 'react';
import './Support.css';

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const topics = [
    {
      title: 'Account Opening',
      links: [
        'Resident individual',
        'Minor',
        'Non Resident Indian (NRI)',
        'Company, Partnership, and HUF',
        'Glossary',
      ],
    },
    {
      title: 'Your Zerodha Account',
      links: [
        'Login credentials',
        'Your Profile',
        'Account modification and segment addition',
        'CMR & DP ID',
        'Nomination',
        'Transfer and conversion of shares',
      ],
    },
    {
      title: 'Trading & Markets',
      links: [
        'Trading FAQs',
        'Kite web and mobile',
        'Margins and leverage',
        'Order types and GTT',
        'Corporate actions',
        'Kite features',
      ],
    },
    {
      title: 'Funds & Banking',
      links: [
        'Fund withdrawal',
        'Adding funds',
        'Adding bank accounts',
        'eMandates and auto-debits',
      ],
    },
    {
      title: 'Console & Reports',
      links: [
        'IPO and Corporate actions',
        'Portfolio and holdings',
        'Funds statement',
        'Profile and settings',
        'Reports and Tax P&L',
      ],
    },
    {
      title: 'Coin & Mutual Funds',
      links: [
        'Understanding mutual funds',
        'About Coin',
        'Buying and Selling through Coin',
        'Starting an SIP',
        'Managing your portfolio',
      ],
    },
  ];

  return (
    <div className="support-page">
      {/* Blue Banner Header */}
      <section className="support-banner">
        <div className="container support-banner-container">
          <div className="support-top-bar">
            <h1 className="support-portal-title">Support Portal</h1>
            <a href="#tickets" className="support-tickets-link">
              Track tickets
            </a>
          </div>

          <div className="support-search-wrapper">
            <h2 className="support-search-heading">
              Search for an answer or browse help topics to create a ticket
            </h2>
            <div className="search-input-box">
              <svg className="search-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
              </svg>
              <input
                type="text"
                className="search-input-field"
                placeholder="Eg: how do I activate F&amp;O, why is my order getting rejected..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="quick-tags-row">
              <span className="quick-tags-label">Quick links:</span>
              <a href="#track-account" className="quick-tag-link">
                Track account opening
              </a>
              <a href="#segments" className="quick-tag-link">
                Track segment activation
              </a>
              <a href="#intraday-margins" className="quick-tag-link">
                Intraday margins
              </a>
              <a href="#kite-manual" className="quick-tag-link">
                Kite user manual
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Topics Grid */}
      <section className="support-topics-section">
        <div className="container">
          <h2 className="topics-section-title">To create a ticket, select a relevant topic</h2>
          <div className="support-topics-grid">
            {topics.map((topic) => (
              <div key={topic.title} className="topic-card">
                <h3 className="topic-card-title">{topic.title}</h3>
                <ul className="topic-links-list">
                  {topic.links.map((link) => (
                    <li key={link} className="topic-link-item">
                      <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="topic-link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
