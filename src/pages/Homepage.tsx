import { Ribbon1, Ribbon2, LogoSlider } from '../components';
import Card1 from '../components/Card1';
import './Homepage.css';
import { SlideTabsExample } from '../components/ui/SliderTabs';
import Button from '../components/ui/Button';

function Homepage() {
  return (
    <>
      <div style={{ position: 'absolute', width: '100%', zIndex: -1 }}>
        <Ribbon1 />
        <Ribbon2 />
      </div>
      <SlideTabsExample />
      <section className="hero">
        <div className="headline" style={{ marginLeft: '50px',marginTop:'-50px',marginBottom:'50px' }}>
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
            <span style={{fontSize: '64px', marginRight: 7, fontFamily: 'Neue Montreal',alignItems:'center',justifyContent:'center',lineHeight:'1'}}>

            </span>We combine cutting-edge tech with expert insight to pinpoint your highest-value prospects—accelerating your path to revenue fast. We combine cutting-edge tech with expert insight to pinpoint your highest-value prospects—accelerating your path to revenue fast.
          </p>
          <div className="actions">
            {/* <button className="outline-btn " style={{ marginLeft: '250px',marginTop:'10px', backgroundColor:'transparent', padding: '10px'}}>About Us</button> */}
            <Button/>
          </div>
        </div>
      </section> 
      <LogoSlider />
    </>
  );
}

export default Homepage;
