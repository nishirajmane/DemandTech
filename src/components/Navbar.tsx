import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand" aria-label="DemandTech">
        <span className="mark" />
        <span>DT</span>
      </div>

      <nav className="center-pill" aria-label="Primary Navigation">
        <span className="home-dot" title="Home" />
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">Solution</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
      </nav>

      <Link to="/contact" className="right-cta">
        <span className="dot" />
        <span>Let’s Talk</span>
      </Link>
    </header>
  );
}

export default Navbar;
