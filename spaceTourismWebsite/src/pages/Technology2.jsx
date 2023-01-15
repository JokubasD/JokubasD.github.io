import { Link } from 'react-router-dom';
import c from './Technology.module.css';
function Technology2(props) {
  return (
    <div className='container'>
      <h5 className={c.heading5}>
        <span className={c.span}>03 </span> SPACE LAUNCH 101
      </h5>
      <div className={c.flex}>
        <picture className={c.image}>
          <source
            media='(min-width: 1440px)'
            srcSet='/technology/image-spaceport-portrait.jpg'
          />
          <img
            src='/technology/image-spaceport-landscape.jpg'
            alt='Spaceport'
            className={c.image}
          />
        </picture>
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
        <div className={c.info}>
          <h4 className={c.position}>THE TERMINOLOGY…</h4>
          <h3 className={c.name}>Spaceport</h3>
          <p className={c.paragraph}>
            A spaceport or cosmodrome is a site for launching (or receiving)
            spacecraft, by analogy to the seaport for ships or airport for
            aircraft. Based in the famous Cape Canaveral, our spaceport is
            ideally situated to take advantage of the Earth’s rotation for
            launch.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Technology2;
