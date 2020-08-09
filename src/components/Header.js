import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Header = props => {
  const [menu, setMenu] = useState(false);

  const openMenu = scroolToTop => {
    menu
      ? document.querySelector('body').classList.remove('is-menu-visible')
      : document.querySelector('body').classList.add('is-menu-visible');
    setMenu(!menu);
    scroolToTop && window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <header id="header">
        <Link className="logo" to="/">
          <img src={logo} alt="" />
          Moj Keramicar
        </Link>
        <nav>
          <a href="#menu" onClick={e => openMenu(false)}>
            Meni
          </a>
        </nav>
      </header>

      <nav id="menu">
        <ul className="links">
          <li>
            <Link to="/" onClick={e => openMenu(true)}>
              Naslovna
            </Link>
          </li>
          <li>
            <Link to="/prices" onClick={e => openMenu(true)}>
              Cenovnik
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={e => openMenu(true)}>
              Galerija
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={e => openMenu(true)}>
              Kontakt
            </Link>
          </li>
          <li>
            <Link to="/info" onClick={e => openMenu(true)}>
              Sve o keramici
            </Link>
          </li>
        </ul>
        <a href="#menu" className="close" onClick={e => openMenu(false)}>
          {''}
        </a>
      </nav>
    </Fragment>
  );
};

export default Header;
