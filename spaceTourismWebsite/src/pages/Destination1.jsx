import { Link } from 'react-router-dom';
import Heading2 from '../components/mainComponents/Heading2';
import Heading3 from '../components/mainComponents/Heading3';
import Heading4 from '../components/mainComponents/Heading4';
import Heading5 from '../components/mainComponents/Heading5';
import Paragraph from '../components/mainComponents/Paragraph';
import c from './Destinations.module.css';
function Destination1(props) {
  return (
    <div className='destinationBackground'>
      <div className='container'>
        <Heading5>
          <span className={c.span}>01 </span> Pick your destination
        </Heading5>
        <img
          src='/destination/image-moon.png'
          alt='moon'
          className={c.planet}
        />
        <ul className={c.ul}>
          <li className={c.line}>
            <Link to='/destination/moon'>Moon</Link>
          </li>
          <li>
            <Link to='/destination/mars'>Mars</Link>
          </li>
          <li>
            <Link to='/destination/europa'>Europa</Link>
          </li>
          <li>
            <Link to='/destination/titan'>titan</Link>
          </li>
        </ul>
        <Heading2>Moon</Heading2>
        <p className={c.paragraph}>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div className={c.hl}></div>
        <div className={c.travelDetailsContainer}>
          <div>
            <Heading4>AVG. DISTANCE</Heading4>
            <Heading3>384,400 km</Heading3>
          </div>
          <div>
            <Heading4>Est. travel time</Heading4>
            <Heading3>3 Days</Heading3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Destination1;
