import { Link } from 'react-router-dom';
import c from './mainComponents.module.css';
function Btn(props) {
  return (
    <Link to={props.href} className={c.link}>
      {props.children}
    </Link>
  );
}
export default Btn;
