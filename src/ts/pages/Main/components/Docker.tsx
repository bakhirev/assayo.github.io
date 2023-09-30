import React from 'react';

import title from 'ts/components/Title/index.module.scss';
import localization from 'ts/helpers/Localization';

import button from '../styles/button.module.scss';
import style from '../styles/docker.module.scss';

function Docker(): React.ReactElement | null {
  return (
    <div className={style.docker}>
      <div className={style.docker_fish}>
        <img
          className={style.docker_fish_icon}
          src="./assets/cloud/left.png"
        />
      </div>
      <div className={`${title.title} ${style.docker_text}`}>
        <p className={style.docker_text_1}>
          {localization.get('main.docker.text1')}
        </p>
        <p className={style.docker_text_2}>
          {localization.get('main.docker.text2')}
        </p>
        <p className={style.docker_text_3}>
          {localization.get('main.docker.text3')}
        </p>
        <p className={style.docker_text_4}>
          {localization.get('main.docker.text4')}
        </p>
        <a
          className={button.button}
          target="_blank"
          rel="noreferrer"
          href="https://hub.docker.com/r/bakhirev/assayo"
        >
          {localization.get('main.docker.button')}
        </a>
      </div>
      <div className={style.docker_cloud}>
        <img
          className={style.docker_cloud_icon}
          src="./assets/cloud/right.png"
        />
      </div>
    </div>
  );
}

export default Docker;
