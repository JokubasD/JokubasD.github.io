import { useState } from 'react';
import { Link } from 'react-router-dom';

import c from './MainNavigation.module.css';

const MainNavigation = () => {
  const [burgerOn, setBurgerOn] = useState(false);
  const source = burgerOn ? '/icon-close.svg' : '/icon-hamburger.svg';
  const alternative = burgerOn ? 'close menu' : 'burger menu';
  return (
    <header className={c.header}>
      <Link to='/'>
        <img src='/logo.svg' alt='Page logo' className={c.logo}></img>
      </Link>
      <nav>
        <img
          onClick={() => setBurgerOn((prev) => !prev)}
          src={source}
          alt={alternative}
        ></img>
        {burgerOn && (
          <ul className={c.navLinks}>
            <Link to='/'>00 HOME</Link>
            <Link to='/destination/moon'>01 DESTINATION</Link>
            <Link to='/crew/douglas-hurley'>02 CREW</Link>
            <Link to='/technology'>03 TECHNOLOGY</Link>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default MainNavigation;
