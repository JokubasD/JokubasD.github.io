import Heading5 from '../components/mainComponents/Heading5';
import c from './HomePage.module.css';
function HomePage(props) {
  return (
    <div className={c.homeContainer}>
      <Heading5>So, you want to travel to</Heading5>
    </div>
  );
}
export default HomePage;
