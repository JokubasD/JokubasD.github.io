import c from './mainComponents.module.css';

function Heading3(props) {
  return <h3 className={c.heading3}>{props.children}</h3>;
}
export default Heading3;
