import { Link } from 'react-router-dom';
import c from './Crew.module.css';
function Crew1(props) {
  return (
    <div className='container'>
      <h5 className={c.heading5}>
        <span className={c.span}>02 </span> Meet your crew
      </h5>
      <div className={c.flex}>
        <img
          src='/crew/image-douglas-hurley.png'
          alt='Douglas Hurley'
          className={c.crewImage}
        />
        <div className={c.flex2}>
          <ul className={c.control}>
            <Link
              to={'/crew/douglas-hurley'}
              className={`${c.current} ${c.slider}`}
            />
            <Link
              to={'/crew/mark-shuttleworth'}
              className={`${c.disabled} ${c.slider}`}
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
          <div className={c.info}>
            <h4 className={c.position}>Commander</h4>
            <h3 className={c.name}>Douglas Hurley</h3>
            <p className={c.paragraph}>
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Crew1;
