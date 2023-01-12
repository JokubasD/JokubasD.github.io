import c from './mainComponents.module.css';

function Heading1(props) {
  return <h1 className={c.heading1}>{props.children}</h1>;
}
export default Heading1;
