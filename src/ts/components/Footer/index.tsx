import React from 'react';

import Header from 'ts/components/Header';
import header from '../Header/index.module.scss';
import style from './index.module.scss';

function Footer() {
  return (
    <>
      <Header className={header.header_black}/>
      <footer className={style.footer_wrapper}>
        <section className={style.footer}>
          Все права защищены
        </section>
      </footer>
    </>
  );
}

export default Footer;
