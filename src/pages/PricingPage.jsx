import './PricingPage.css';

const PricingPage = () => {
  const pricingCards = [
    {
      id: 'equity-delivery',
      badge: '/images/pricing-eq.svg',
      title: 'Free equity delivery',
      amount: '₹0',
      description:
        'All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.',
    },
    {
      id: 'intraday-fo',
      badge: '/images/other-trades.svg',
      title: 'Intraday and F&O trades',
      amount: 'Flat ₹20',
      description:
        'Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.',
    },
    {
      id: 'direct-mf',
      badge: '/images/pricing-eq.svg',
      title: 'Free direct MF',
      amount: '₹0',
      description:
        'All direct mutual fund investments are absolutely free — ₹ 0 commissions & ₹ 0 DP charges.',
    },
  ];

  const chargesTable = [
    {
      type: 'Equity delivery',
      brokerage: 'Zero Brokerage',
      stt: '0.1% on buy & sell',
      txnCharges: 'NSE: 0.00297%, BSE: 0.00375%',
      gst: '18% on (brokerage + SEBI + txn charges)',
      sebi: '₹10 / crore',
      stamp: '0.015% or ₹1500 / crore on buy',
    },
    {
      type: 'Equity intraday',
      brokerage: 'Flat ₹ 20 or 0.03% (lower)',
      stt: '0.025% on sell side',
      txnCharges: 'NSE: 0.00297%, BSE: 0.00375%',
      gst: '18% on (brokerage + SEBI + txn charges)',
      sebi: '₹10 / crore',
      stamp: '0.003% or ₹300 / crore on buy',
    },
    {
      type: 'Equity futures',
      brokerage: 'Flat ₹ 20 or 0.03% (lower)',
      stt: '0.0125% on sell side',
      txnCharges: 'NSE: 0.00173%',
      gst: '18% on (brokerage + SEBI + txn charges)',
      sebi: '₹10 / crore',
      stamp: '0.002% or ₹200 / crore on buy',
    },
    {
      type: 'Equity options',
      brokerage: 'Flat ₹ 20 per executed order',
      stt: '0.0625% on sell (premium)',
      txnCharges: 'NSE: 0.03503% (premium)',
      gst: '18% on (brokerage + SEBI + txn charges)',
      sebi: '₹10 / crore',
      stamp: '0.003% or ₹300 / crore on buy',
    },
  ];

  return (
    <div className="pricing-page">
      {/* Hero Header */}
      <section className="pricing-page-hero">
        <div className="container pricing-page-hero-container">
          <h1 className="pricing-page-hero-title">Pricing</h1>
          <p className="pricing-page-hero-subtitle">
            Free equity investments and flat &#8377;20 intraday and F&amp;O trades
          </p>
        </div>
      </section>

      {/* 3 Column Pricing Cards */}
      <section className="pricing-cards-section">
        <div className="container pricing-cards-container">
          {pricingCards.map((card) => (
            <div key={card.id} className="pricing-tier-card">
              <div className="pricing-tier-badge">
                <img src={card.badge} alt={card.title} className="tier-badge-img" />
              </div>
              <h2 className="pricing-tier-title">{card.title}</h2>
              <div className="pricing-tier-amount">{card.amount}</div>
              <p className="pricing-tier-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Charges Explanation Table */}
      <section className="pricing-table-section">
        <div className="container pricing-table-container">
          <h2 className="pricing-table-heading">Charges explained</h2>
          <div className="table-responsive-wrapper">
            <table className="charges-table">
              <thead>
                <tr>
                  <th>Segment</th>
                  <th>Brokerage</th>
                  <th>STT / CTT</th>
                  <th>Transaction charges</th>
                  <th>GST</th>
                  <th>SEBI charges</th>
                  <th>Stamp charges</th>
                </tr>
              </thead>
              <tbody>
                {chargesTable.map((row) => (
                  <tr key={row.type}>
                    <td className="segment-cell">{row.type}</td>
                    <td className="highlight-cell">{row.brokerage}</td>
                    <td>{row.stt}</td>
                    <td>{row.txnCharges}</td>
                    <td>{row.gst}</td>
                    <td>{row.sebi}</td>
                    <td>{row.stamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
