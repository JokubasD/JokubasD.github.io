import { Link } from 'react-router-dom';

import c from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={c.header}>
      <Link to='/'>
        <img src='/logo.svg' alt='Page logo' className={c.logo}></img>
      </Link>
      <nav>
        <img src='/icon-hamburger.svg' alt='burger menu'></img>
      </nav>
    </header>
  );
};

export default MainNavigation;
