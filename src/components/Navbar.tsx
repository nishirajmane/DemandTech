import reactLogo from '../assets/react.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={reactLogo} alt="DemandTech Logo" style={{ height: '2.5rem' }} />
        <span style={{ 
          marginLeft: '0.75rem', 
          fontSize: '1.5rem', 
          fontWeight: 'bold',
          background: 'rgb(28, 0, 244) ',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
        </span>
      </div>

      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/" style={{ 
          color: '#213547', 
          fontWeight: 500,
          position: 'relative',
          textDecoration: 'none'
        }}>Home</Link>
        <Link to="/services" style={{ 
          color: '#213547', 
          fontWeight: 500,
          position: 'relative',
          textDecoration: 'none'
        }}>Services</Link>
        <Link to="/about" style={{ 
          color: '#213547', 
          fontWeight: 500,
          position: 'relative',
          textDecoration: 'none'
        }}>About</Link>
        <Link to="/contact" style={{ 
          color: '#213547', 
          fontWeight: 500,
          position: 'relative',
          textDecoration: 'none'
        }}>Contact</Link>
      </div>

      <button style={{
        background: 'blue',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1.5rem',
        borderRadius: '50px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;
