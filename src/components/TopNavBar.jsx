import { Link } from "react-router-dom";
import Logo from "../assets/imova-logo.png";

const TopNavBar = () => {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand">
          <img src={Logo} alt="IMOVA.AI" className="site-header__logo-mark" />
        </Link>

        <nav className="primary-menu">
          <Link to="/" className="primary-menu__link">
            Search Properties
          </Link>

          <Link to="/manage-listings" className="primary-menu__link">
            Manage Listings
          </Link>

          <Link to="/blog" className="primary-menu__link">
            Blog
          </Link>

          <Link to="/pricing" className="primary-menu__link">
            Pricing
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default TopNavBar;
