import { Link } from 'react-router-dom';
import Heading5 from '../components/mainComponents/Heading5';
import c from './Technology.module.css';
function Technology1(props) {
  return (
    <div className='container'>
      <Heading5>
        <span className={c.span}>03 </span> SPACE LAUNCH 101
      </Heading5>
      <img
        src='/technology/image-launch-vehicle-landscape.jpg'
        alt='Launch Vehicle'
        className={c.image}
      />
      <ul className={c.control}>
        <Link to={'/technology/launch-vehicle'} className={c.current}>
          1
        </Link>
        <Link to={'/technology/spaceport'} className={c.disabled}>
          2
        </Link>
        <Link to={'/technology/space-capsule'} className={c.disabled}>
          3
        </Link>
      </ul>
      <h4 className={c.position}>THE TERMINOLOGY…</h4>
      <h3 className={c.name}>LAUNCH VEHICLE</h3>
      <p className={c.paragraph}>
        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
        carry a payload from Earth's surface to space, usually to Earth orbit or
        beyond. Our WEB-X carrier rocket is the most powerful in operation.
        Standing 150 metres tall, it's quite an awe-inspiring sight on the
        launch pad!
      </p>
    </div>
  );
}
export default Technology1;
