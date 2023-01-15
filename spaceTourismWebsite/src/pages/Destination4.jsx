import { Link } from 'react-router-dom';
import Heading2 from '../components/mainComponents/Heading2';
import Heading3 from '../components/mainComponents/Heading3';
import Heading4 from '../components/mainComponents/Heading4';
import c from './Destinations.module.css';
function Destination4(props) {
  return (
    <div className='container'>
      <h5 className={c.heading5}>
        <span className={c.span}>01 </span> Pick your destination
      </h5>
      <div className={c.flex}>
        <img
          src='/destination/image-titan.png'
          alt='moon'
          className={c.planet}
        />
        <div className={c.info}>
          <ul className={c.ul}>
            <li>
              <Link to='/destination/moon'>Moon</Link>
            </li>
            <li>
              <Link to='/destination/mars'>Mars</Link>
            </li>
            <li>
              <Link to='/destination/europa'>Europa</Link>
            </li>
            <li className={c.line}>
              <Link to='/destination/titan'>titan</Link>
            </li>
          </ul>
          <Heading2>Titan</Heading2>
          <p className={c.paragraph}>
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>
          <div className={c.hl}></div>
          <div className={c.travelDetailsContainer}>
            <div>
              <Heading4>AVG. DISTANCE</Heading4>
              <Heading3>1.6 BIL. km</Heading3>
            </div>
            <div>
              <Heading4>Est. travel time</Heading4>
              <Heading3>7 years</Heading3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Destination4;
