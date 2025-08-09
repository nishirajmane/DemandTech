import { Ribbon1, Ribbon2 } from '../components';
import Card1 from '../components/Card1';

function Homepage() {
  return (
    <>
      <div style={{ position: 'absolute', width: '100%', zIndex: -1 }}>
        <Ribbon1 />
        <Ribbon2 />
      </div>

      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '3rem',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1,
        marginTop: '4rem',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: '1 1 360px', display: 'flex', justifyContent: 'center' }}>
          <Card1 />
        </div>

        <div style={{ maxWidth: 800, flex: '1 1 460px' }}>
          <h1 style={{
            fontSize: '4rem',
            marginBottom: '1rem',
            background: 'transparent ',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'blue ',
            fontFamily: 'Clash Display',
            fontWeight: '400'
          }}>
            Transforming Ideas into Digital Reality
          </h1>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '2rem',
            color: '#213547',
            lineHeight: 1.2
          }}>
            We build innovative solutions that help businesses thrive in the digital age. Our cutting-edge technology and expert team deliver results that exceed expectations.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{
              background: 'blue',
              color: 'white',
              border: 'none',
              padding: '0.9rem 1.6rem',
              fontSize: '1.1rem',
              borderRadius: '55px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0, 224, 244, 0.4)',
              fontWeight: '500'
            }}>
              Get Started
            </button>
            <button style={{
              background: 'transparent',
              color: 'blue',
              border: '2px solid rgb(13, 0, 255)',
              padding: '0.9rem 1.6rem',
              fontSize: '1.1rem',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: '600'
            }}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div style={{ minHeight: '8000px', width: '100%', position: 'relative' }} />
    </>
  );
}

export default Homepage;
