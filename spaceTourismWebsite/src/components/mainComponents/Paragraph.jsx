import c from './mainComponents.module.css';
function Paragraph(props) {
  return <p className={c.paragraph}>{props.children}</p>;
}
export default Paragraph;
