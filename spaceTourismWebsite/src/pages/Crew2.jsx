import { Link } from 'react-router-dom';
import c from './Crew.module.css';
function Crew2(props) {
  return (
    <div className='container'>
      <h5 className={c.heading5}>
        <span className={c.span}>02 </span> Meet your crew
      </h5>
      <div className={c.flex}>
        <img
          src='/crew/image-mark-shuttleworth.png'
          alt='Mark Shuttleworth'
          className={c.crewImage}
        />
        <div className={c.flex2}>
          <ul className={c.control}>
            <Link
              to={'/crew/douglas-hurley'}
              className={`${c.disabled} ${c.slider}`}
            />
            <Link
              to={'/crew/mark-shuttleworth'}
              className={`${c.current} ${c.slider}`}
            />
            <Link
              to={'/crew/victor-glover'}
              className={`${c.disabled} ${c.slider}`}
            />
            <Link
              to={'/crew/anousheh-ansari'}
              className={`${c.disabled} ${c.slider}`}
            />
          </ul>
          <div>
            <h4 className={c.position}>Mission Specialist </h4>
            <h3 className={c.name}>MARK SHUTTLEWORTH</h3>
            <p className={c.paragraph}>
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Crew2;
