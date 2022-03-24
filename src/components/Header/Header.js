import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css';

const Header= () => {
  return (
    <header className={style} >
        <NavLink  className={style} to="/"> Home </NavLink>
    </header>
  )
}

export default Header;