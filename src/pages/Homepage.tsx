import { Ribbon1, Ribbon2 } from '../components';
import Card1 from '../components/Card1';
import './Homepage.css';

function Homepage() {
  return (
    <>
      <div style={{ position: 'absolute', width: '100%', zIndex: -1 }}>
        <Ribbon1 />
        <Ribbon2 />
      </div>

      <section className="hero">
        <div className="headline" style={{ marginLeft: '100px' }}>
          <h1 className="title">
            Intelligence that
            <br />
            Drives <span className="accent">Growth</span>
          </h1>
        </div>

        <div className="card-col">
          <Card1 />
        </div>

        <div className="desc-col">
          <p className="lead">
            <span style={{fontSize: '26px', marginRight: 6}}>“</span>
            We combine cutting-edge tech with expert insight to pinpoint your highest-value prospects—accelerating your path to revenue, fast.
          </p>
          <div className="actions">
            <button className="outline-btn">About Us</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
