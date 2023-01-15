import c from './mainComponents.module.css';

function Heading4(props) {
  return <h4 className={c.heading4}>{props.children}</h4>;
}
export default Heading4;
