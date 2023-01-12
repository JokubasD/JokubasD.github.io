import { Link } from 'react-router-dom';
import Heading5 from '../components/mainComponents/Heading5';
import c from './Technology.module.css';
function Technology2(props) {
  return (
    <div className='container'>
      <Heading5>
        <span className={c.span}>03 </span> SPACE LAUNCH 101
      </Heading5>
      <img
        src='/technology/image-spaceport-landscape.jpg'
        alt='Spaceport'
        className={c.image}
      />
      <ul className={c.control}>
        <Link to={'/technology/launch-vehicle'} className={c.disabled}>
          1
        </Link>
        <Link to={'/technology/spaceport'} className={c.current}>
          2
        </Link>
        <Link to={'/technology/space-capsule'} className={c.disabled}>
          3
        </Link>
      </ul>
      <h4 className={c.position}>THE TERMINOLOGY…</h4>
      <h3 className={c.name}>Spaceport</h3>
      <p className={c.paragraph}>
        A spaceport or cosmodrome is a site for launching (or receiving)
        spacecraft, by analogy to the seaport for ships or airport for aircraft.
        Based in the famous Cape Canaveral, our spaceport is ideally situated to
        take advantage of the Earth’s rotation for launch.
      </p>
    </div>
  );
}
export default Technology2;
