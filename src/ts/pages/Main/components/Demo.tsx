import React from 'react';

import localization from 'ts/helpers/Localization';

import style from '../styles/main.module.scss';
import button from '../styles/button.module.scss';

function Demo(): React.ReactElement | null {
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
            {localization.get('main.demo.title1')}
          </b>
          <b className={style.main_view_sub_second}>
            {localization.get('main.demo.title2')}
          </b>
        </h1>
        <p className={style.main_view_description}>
          {localization.get('main.demo.description')}
        </p>
        <nav className={style.main_view_nav}>
          <a
            className={button.button}
            href="/demo/"
          >
            {localization.get('main.demo.link1')}
          </a>
          <a
            className={button.button_link}
            href="/demo/?dump=./test.txt"
          >
            {localization.get('main.demo.link2')}
          </a>
        </nav>
      </article>
    </section>
  );
}

export default Demo;
