import React from 'react';
import { useTranslation } from 'react-i18next';

import style from '../styles/main.module.scss';
import button from '../styles/button.module.scss';

function Demo(): React.ReactElement | null {
  const { t } = useTranslation();
  return (
    <section className={style.main_view}>
      <figure className={style.main_view_icon}>
        <img
          className={style.main_view_icon_file}
          src="./assets/demo.png"
        />
      </figure>
      <article className={style.main_view_article}>
        <h1 className={style.main_view_title}>
          <b className={style.main_view_sub_first}>
            {t('main.demo.title1')}
          </b>
          <b className={style.main_view_sub_second}>
            {t('main.demo.title2')}
          </b>
        </h1>
        <p className={style.main_view_description}>
          {t('main.demo.description')}
        </p>
        <nav className={style.main_view_nav}>
          <a
            className={button.button}
            href="/demo/"
          >
            {t('main.demo.link1')}
          </a>
          <a
            className={button.button_link}
            href="/demo/?dump=./test.txt"
          >
            {t('main.demo.link2')}
          </a>
        </nav>
      </article>
    </section>
  );
}

export default Demo;
