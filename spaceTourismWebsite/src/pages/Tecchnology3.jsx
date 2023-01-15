import { Link } from 'react-router-dom';
import c from './Technology.module.css';
function Technology3(props) {
  return (
    <div className='container'>
      <h5 className={c.heading5}>
        <span className={c.span}>03 </span> SPACE LAUNCH 101
      </h5>
      <div className={c.flex}>
        <picture className={c.image}>
          <source
            media='(min-width: 1440px)'
            srcSet='/technology/image-space-capsule-portrait.jpg'
          />
          <img
            src='/technology/image-space-capsule-landscape.jpg'
            alt='Space Capsule'
            className={c.image}
          />
        </picture>
        <ul className={c.control}>
          <Link to={'/technology/launch-vehicle'} className={c.disabled}>
            1
          </Link>
          <Link to={'/technology/spaceport'} className={c.disabled}>
            2
          </Link>
          <Link to={'/technology/space-capsule'} className={c.current}>
            3
          </Link>
        </ul>
        <div className={c.info}>
          <h4 className={c.position}>THE TERMINOLOGY…</h4>
          <h3 className={c.name}>Space capsule</h3>
          <p className={c.paragraph}>
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings. Our
            capsule is where you'll spend your time during the flight. It
            includes a space gym, cinema, and plenty of other activities to keep
            you entertained.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Technology3;
