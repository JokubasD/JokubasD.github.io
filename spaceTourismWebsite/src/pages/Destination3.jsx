import { Link } from 'react-router-dom';
import Heading2 from '../components/mainComponents/Heading2';
import Heading3 from '../components/mainComponents/Heading3';
import Heading4 from '../components/mainComponents/Heading4';
import Heading5 from '../components/mainComponents/Heading5';
import Paragraph from '../components/mainComponents/Paragraph';
import c from './Destinations.module.css';
function Destination3(props) {
  return (
    <div className='destinationBackground'>
      <div className='container'>
        <Heading5>
          <span className={c.span}>01 </span> Pick your destination
        </Heading5>
        <img
          src='/destination/image-europa.png'
          alt='moon'
          className={c.planet}
        />
        <ul className={c.ul}>
          <li>
            <Link to='/destination/moon'>Moon</Link>
          </li>
          <li>
            <Link to='/destination/mars'>Mars</Link>
          </li>
          <li className={c.line}>
            <Link to='/destination/europa'>Europa</Link>
          </li>
          <li>
            <Link to='/destination/titan'>titan</Link>
          </li>
        </ul>
        <Heading2>Europa</Heading2>
        <p className={c.paragraph}>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>
        <div className={c.hl}></div>
        <div className={c.travelDetailsContainer}>
          <div>
            <Heading4>AVG. DISTANCE</Heading4>
            <Heading3>628 MIL. km</Heading3>
          </div>
          <div>
            <Heading4>Est. travel time</Heading4>
            <Heading3>3 years</Heading3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Destination3;
