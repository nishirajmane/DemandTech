import './App.css'
import { Ribbon1, Ribbon2 } from './components'
import reactLogo from './assets/react.svg'

function App() {
  return (
    <>
      {/* Navbar */}
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
        {/* Logo */}
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

        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" style={{ 
            color: '#213547', 
            fontWeight: 500,
            position: 'relative',
            textDecoration: 'none'
          }}>Home</a>
          <a href="#" style={{ 
            color: '#213547', 
            fontWeight: 500,
            position: 'relative',
            textDecoration: 'none'
          }}>Services</a>
          <a href="#" style={{ 
            color: '#213547', 
            fontWeight: 500,
            position: 'relative',
            textDecoration: 'none'
          }}>About</a>
          <a href="#" style={{ 
            color: '#213547', 
            fontWeight: 500,
            position: 'relative',
            textDecoration: 'none'
          }}>Contact</a>
        </div>

        {/* CTA Button */}
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

      {/* Ribbons */}
      <div style={{ position: 'absolute', width: '100%', zIndex: -1 }}>
        <Ribbon1 />
        <Ribbon2 />
      </div>
      
      {/* Hero Section */}
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1,
        marginTop: '4rem'
      }}>
        <h1 style={{
          fontSize: '5rem',
          marginBottom: '1rem',
          alignContent: 'right',
          justifyContent: 'right',
          alignItems: 'right',
          background: 'transparent ',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'blue ',
          fontFamily: 'Clash Display',
          fontWeight: '400',
          maxWidth: '800px'
        }}>
          Transforming Ideas into Digital Reality
        </h1>
        <p style={{
          fontSize: '1.5rem',
          maxWidth: '800px',
          marginBottom: '2rem',
          color: '#213547',
          lineHeight: 1
        }}>
          We build innovative solutions that help businesses thrive in the digital age. Our cutting-edge technology and expert team deliver results that exceed expectations.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{
            background: 'blue',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            borderRadius: '55px',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(0, 224, 244, 0.4)',
            fontWeight: '400',
            fontFamily: 'Clash Display'
          }}>
            Get Started
          </button>
          <button style={{
            background: 'transparent',
            color: 'blue',
            border: '2px solid rgb(13, 0, 255)',
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Learn More
          </button>
        </div>
      </div>
      
      {/* Main content with scrollable area - increased height for smoother animation */}
      <div style={{ minHeight: '8000px', width: '100%', position: 'relative' }}>
        {/* Additional content can be added here */}
      </div>
    </>  
  )
}

export default App
