import React, { Fragment }from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import style from './layout.module.css';

const Layout = ({children}) => {
  return (
    <Fragment> 
         <Header/>
         <main className={style}>{children}</main>
         <Footer />
    </Fragment>
  )
}

export default Layout;