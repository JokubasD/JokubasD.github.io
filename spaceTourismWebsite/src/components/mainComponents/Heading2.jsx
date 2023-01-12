import c from './mainComponents.module.css';

function Heading2(props) {
  return <h2 className={c.heading2}>{props.children}</h2>;
}
export default Heading2;
