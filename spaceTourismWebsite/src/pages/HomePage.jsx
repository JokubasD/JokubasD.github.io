import Btn from '../components/mainComponents/Btn';
import Heading1 from '../components/mainComponents/Heading1';
import Heading5 from '../components/mainComponents/Heading5';
import Paragraph from '../components/mainComponents/Paragraph';

function HomePage(props) {
  return (
    <div className='background'>
      <div className='container'>
        <Heading5>So, you want to travel to</Heading5>
        <Heading1>Space</Heading1>
        <Paragraph>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Paragraph>
        <Btn href={'./destination/moon'}>Explore</Btn>
      </div>
    </div>
  );
}
export default HomePage;
