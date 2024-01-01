import React from 'react';
import { useTranslation } from 'react-i18next';

import Header from 'ts/components/Header';
import header from '../Header/index.module.scss';
import style from './index.module.scss';

function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <Header className={header.header_black}/>
      <footer className={style.footer_wrapper}>
        <section className={style.footer}>
          {t('main.footer.copy')}
        </section>
      </footer>
    </>
  );
}

export default Footer;
