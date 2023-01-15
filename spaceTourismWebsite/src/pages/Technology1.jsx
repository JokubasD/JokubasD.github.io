import { Link } from 'react-router-dom';
import c from './Technology.module.css';
function Technology1(props) {
  return (
    <div className='container'>
      <h5 className={c.heading5}>
        <span className={c.span}>03 </span> SPACE LAUNCH 101
      </h5>
      <div className={c.flex}>
        <picture className={c.image}>
          <source
            media='(min-width: 1440px)'
            srcSet='/technology/image-launch-vehicle-portrait.jpg'
          />
          <img
            src='/technology/image-launch-vehicle-landscape.jpg'
            alt='Launch Vehicle'
            className={c.image}
          />
        </picture>
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
        <div className={c.info}>
          <h4 className={c.position}>THE TERMINOLOGY…</h4>
          <h3 className={c.name}>LAUNCH VEHICLE</h3>
          <p className={c.paragraph}>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
      </div>
    </div>
  );
}
export default Technology1;
