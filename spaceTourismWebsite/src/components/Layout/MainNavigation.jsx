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
      <nav className={`${burgerOn ? c.burgerNav : ''} ${c.mobileNav}`}>
        <img
          onClick={() => setBurgerOn((prev) => !prev)}
          src={source}
          alt={alternative}
          className={burgerOn ? c.closeLogo : c.burgerLogo}
        ></img>
        {burgerOn && (
          <ul className={c.navLinks}>
            <Link to='/'>
              <span className={c.highlight}>00</span> HOME
            </Link>
            <Link to='/destination/moon'>
              <span className={c.highlight}>01</span> DESTINATION
            </Link>
            <Link to='/crew/douglas-hurley'>
              <span className={c.highlight}>02</span> CREW
            </Link>
            <Link to='/technology/launch-vehicle'>
              <span className={c.highlight}>03</span> TECHNOLOGY
            </Link>
          </ul>
        )}
      </nav>
      <nav className={c.horizontalNav}>
        <ul>
          <Link to='/'>HOME</Link>
          <Link to='/destination/moon'>DESTINATION</Link>
          <Link to='/crew/douglas-hurley'>CREW</Link>
          <Link to='/technology/launch-vehicle'>TECHNOLOGY</Link>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
