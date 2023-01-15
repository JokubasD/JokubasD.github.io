import { useState } from 'react';
import { Link } from 'react-router-dom';

import c from './MainNavigation.module.css';

const MainNavigation = (props) => {
  const [burgerOn, setBurgerOn] = useState(false);
  const source = burgerOn ? '/icon-close.svg' : '/icon-hamburger.svg';
  const alternative = burgerOn ? 'close menu' : 'burger menu';
  console.log('props.currentTab ===', props.currentTab);
  return (
    <>
      <div className={c.hr}></div>
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
              <Link to='/' onClick={() => setBurgerOn(false)}>
                <span className={c.highlight}>00</span> HOME
              </Link>
              <Link to='/destination/moon' onClick={() => setBurgerOn(false)}>
                <span className={c.highlight}>01</span> DESTINATION
              </Link>
              <Link
                to='/crew/douglas-hurley'
                onClick={() => setBurgerOn(false)}
              >
                <span className={c.highlight}>02</span> CREW
              </Link>
              <Link
                to='/technology/launch-vehicle'
                onClick={() => setBurgerOn(false)}
              >
                <span className={c.highlight}>03</span> TECHNOLOGY
              </Link>
            </ul>
          )}
        </nav>
        <nav className={c.horizontalNav}>
          <ul>
            <Link
              to='/'
              className={props.currentTab === 'home' ? 'currentTab' : ''}
            >
              <span className={c.highlightLarge}>00</span>HOME
            </Link>
            <Link
              to='/destination/moon'
              className={props.currentTab === 'destination' ? 'currentTab' : ''}
            >
              <span className={c.highlightLarge}>01</span>DESTINATION
            </Link>
            <Link
              to='/crew/douglas-hurley'
              className={props.currentTab === 'crew' ? 'currentTab' : ''}
            >
              <span className={c.highlightLarge}>02</span>CREW
            </Link>
            <Link
              to='/technology/launch-vehicle'
              className={props.currentTab === 'technology' ? 'currentTab' : ''}
            >
              <span className={c.highlightLarge}>03</span>TECHNOLOGY
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigation;
