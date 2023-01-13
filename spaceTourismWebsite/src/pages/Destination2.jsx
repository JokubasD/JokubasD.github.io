import { Link } from 'react-router-dom';
import Heading2 from '../components/mainComponents/Heading2';
import Heading3 from '../components/mainComponents/Heading3';
import Heading4 from '../components/mainComponents/Heading4';
import c from './Destinations.module.css';
function Destination2(props) {
  return (
    <div className='container'>
      <h5 className={c.heading5}>
        <span className={c.span}>01 </span> Pick your destination
      </h5>
      <img src='/destination/image-mars.png' alt='moon' className={c.planet} />
      <ul className={c.ul}>
        <li>
          <Link to='/destination/moon'>Moon</Link>
        </li>
        <li className={c.line}>
          <Link to='/destination/mars'>Mars</Link>
        </li>
        <li>
          <Link to='/destination/europa'>Europa</Link>
        </li>
        <li>
          <Link to='/destination/titan'>titan</Link>
        </li>
      </ul>
      <Heading2>Mars</Heading2>
      <p className={c.paragraph}>
        Don’t forget to pack your hiking boots. You’ll need them to tackle
        Olympus Mons, the tallest planetary mountain in our solar system. It’s
        two and a half times the size of Everest!
      </p>
      <div className={c.hl}></div>
      <div className={c.travelDetailsContainer}>
        <div>
          <Heading4>AVG. DISTANCE</Heading4>
          <Heading3>225 MIL. km</Heading3>
        </div>
        <div>
          <Heading4>Est. travel time</Heading4>
          <Heading3>9 months</Heading3>
        </div>
      </div>
    </div>
  );
}
export default Destination2;
