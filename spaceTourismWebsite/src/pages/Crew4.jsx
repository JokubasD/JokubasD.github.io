import { Link } from 'react-router-dom';
import c from './Crew.module.css';
function Crew4(props) {
  return (
    <div className='container'>
      <h5 className={c.heading5}>
        <span className={c.span}>02 </span> Meet your crew
      </h5>
      <div className={c.flex}>
        <img
          src='/crew/image-anousheh-ansari.png'
          alt='Anousheh Ansari'
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
              className={`${c.disabled} ${c.slider}`}
            />
            <Link
              to={'/crew/victor-glover'}
              className={`${c.disabled} ${c.slider}`}
            />
            <Link
              to={'/crew/anousheh-ansari'}
              className={`${c.current} ${c.slider}`}
            />
          </ul>
          <div>
            <h4 className={c.position}>Flight Engineer</h4>
            <h3 className={c.name}>Anousheh Ansari</h3>
            <p className={c.paragraph}>
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Crew4;
