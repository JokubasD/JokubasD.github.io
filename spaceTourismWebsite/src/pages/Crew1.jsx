import Heading5 from '../components/mainComponents/Heading5';
import c from './Crew.module.css';
function Crew1(props) {
  return (
    <div className='container'>
      <Heading5>
        <span className={c.span}>02 </span> Meet your crew
      </Heading5>
      <img
        src='/crew/image-douglas-hurley.png'
        alt='Douglas Hurley'
        className={c.crewImage}
      />
    </div>
  );
}
export default Crew1;
