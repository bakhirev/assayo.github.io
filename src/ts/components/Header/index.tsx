import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import UiKitSelect from 'ts/components/Select';
import defaultLanguage from 'ts/helpers/i18n';

import style from './index.module.scss';

interface IHeaderPorps {
  icon?: string;
  className?: string;
}

function Header({
  icon,
  className,
}: IHeaderPorps) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { lang } = useParams<any>();

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
            {t('header.main')}
          </a>
          <a
            className={style.header_link}
            href="/demo/"
            rel="noreferrer"
            target="_blank"
          >
            {t('header.demo')}
          </a>
          <a
            className={style.header_link}
            href="https://github.com/bakhirev/assayo"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className={style.header_link}
            href="https://hub.docker.com/r/bakhirev/assayo"
            rel="noreferrer"
            target="_blank"
          >
            Docker
          </a>
        </nav>
        <UiKitSelect
          value={lang || defaultLanguage}
          options={[
            { id: 'en', title: 'English' },
            { id: 'es', title: 'Español' },
            { id: 'zh', title: '中文' },
            { id: 'de', title: 'Deutsch' },
            { id: 'fr', title: 'Français' },
            { id: 'pt', title: 'Português' },
            { id: 'ru', title: 'Русский' },
            { id: 'ja', title: '日本語' },
            { id: 'ko', title: '한국어' },
          ]}
          className={style.header_select}
          onChange={(value: any) => {
            navigate(`/${value}`);
          }}
        />
      </div>
    </header>
  );
}

Header.defaultProps = {
  icon: './assets/logo.svg',
  className: '',
};

export default Header;
