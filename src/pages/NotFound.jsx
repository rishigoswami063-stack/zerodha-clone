import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container not-found-container">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Kite couldn&apos;t find that page</h2>
        <p className="not-found-message">
          We couldn&apos;t find the page you were looking for. Please check the URL or head back to
          our home page.
        </p>
        <Link to="/" className="not-found-btn">
          Return to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
