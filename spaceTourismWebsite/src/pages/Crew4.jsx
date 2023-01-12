import { Link } from 'react-router-dom';
import Heading5 from '../components/mainComponents/Heading5';
import c from './Crew.module.css';
function Crew4(props) {
  return (
    <div className='container'>
      <Heading5>
        <span className={c.span}>02 </span> Meet your crew
      </Heading5>
      <img
        src='/crew/image-anousheh-ansari.png'
        alt='Anousheh Ansari'
        className={c.crewImage}
      />
      <ul className={c.control}>
        <Link
          to={'/crew/douglas-hurley'}
          className={`${c.disabled} ${c.slider}`}
        />
        <Link
          to={'/crew/mark-shuttleworth'}
          className={`${c.diabled} ${c.slider}`}
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
      <h4 className={c.position}>Flight Engineer</h4>
      <h3 className={c.name}>Anousheh Ansari</h3>
      <p className={c.paragraph}>
        Anousheh Ansari is an Iranian American engineer and co-founder of Prodea
        Systems. Ansari was the fourth self-funded space tourist, the first
        self-funded woman to fly to the ISS, and the first Iranian in space.
      </p>
    </div>
  );
}
export default Crew4;
