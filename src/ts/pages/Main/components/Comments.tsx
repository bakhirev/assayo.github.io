import React from 'react';
import { useTranslation } from 'react-i18next';

import Title from 'ts/components/Title';
import titleStyle from 'ts/components/Title/index.module.scss';

import style from '../styles/fitback.module.scss';

interface IFitBackProps {
  name: string;
  position: string;
  photo: string;
  message: string;
}

function FitBack({
  name,
  position,
  photo,
  message,
}: IFitBackProps): React.ReactElement | null {
  return (
    <article className={style.fitback}>
      <figure className={style.fitback_header}>
        <img
          className={style.fitback_header_icon}
          src={photo}
        />
        <figcaption className={style.fitback_header_text}>
          <h5 className={style.fitback_header_text_title}>
            {name}
          </h5>
          <p className={style.fitback_header_text_description}>
            {position}
          </p>
        </figcaption>
      </figure>
      <p className={style.fitback_message}>
        {message}
      </p>
    </article>
  );
}

function Comments(): React.ReactElement | null {
  const { t } = useTranslation();
  return (
    <>
      <Title
        text={t('main.comments.title')}
        className={titleStyle.title_second}
      />
      <section className={style.fitback_wrapper}>
        <FitBack
          position="Teamlead"
          photo="./assets/fitback/3.jpg"
          name={t('main.comments.user1.name')}
          message={t('main.comments.user1.message')}
        />
        <FitBack
          position="Java senior"
          photo="./assets/fitback/2.jpg"
          name={t('main.comments.user2.name')}
          message={t('main.comments.user2.message')}
        />
        <FitBack
          position="CEO"
          photo="./assets/fitback/4.jpg"
          name={t('main.comments.user3.name')}
          message={t('main.comments.user3.message')}
        />
        <FitBack
          position="Teamlead"
          photo="./assets/fitback/1.jpg"
          name={t('main.comments.user4.name')}
          message={t('main.comments.user4.message')}
        />
      </section>
    </>
  );
}

export default Comments;
