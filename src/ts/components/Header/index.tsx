import React from 'react';

import localization from 'ts/helpers/Localization';
import style from './index.module.scss';

interface IHeaderPorps {
  icon?: string;
  className?: string;
}

function Header({
  icon,
  className,
}: IHeaderPorps) {
  return (
    <header className={`${style.header_wrapper} ${className || ''}`}>
      <div className={style.header}>
        <img
          className={style.header_logo}
          src={icon}
        />
        <nav className={style.header_nav}>
          <a
            className={style.header_link}
            href="/"
          >
            {localization.get('header.main')}
          </a>
          <a
            className={style.header_link}
            href="/demo/?dump=./test.git"
            rel="noreferrer"
            target="_blank"
          >
            {localization.get('header.demo')}
          </a>
          <a
            className={style.header_link}
            href="https://github.com/bakhirev/assayo"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </nav>
        <select className={style.header_select}>
          <option value="ru">Русский</option>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="hi">हिन्दी</option>
          <option value="ch">中文</option>
          <option value="jp">日本語</option>
          <option value="ko">한국어</option>
        </select>
      </div>
    </header>
  );
}

Header.defaultProps = {
  icon: './assets/logo.svg',
  className: '',
};

export default Header;
