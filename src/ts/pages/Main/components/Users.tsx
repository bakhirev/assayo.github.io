import React from 'react';
import { useTranslation } from 'react-i18next';

import style from '../styles/cards.module.scss';

interface IFeaturesListProps {
  features: string[];
}

function FeaturesList({ features }: IFeaturesListProps): React.ReactElement | null {
  const list = features.map((title: string) => (
    <li
      key={title}
      className={style.cards_view_description}
    >
      {title}
    </li>
  ));

  return (
    <ul className={style.cards_view_list}>
      {list}
    </ul>
  );
}

interface IColumnProps {
  title: string;
  icon: string;
  features: string[];
  backgroundClass: string;
}

function Column({
  title,
  icon,
  features,
  backgroundClass,
}: IColumnProps): React.ReactElement | null {
  return (
    <article className={style.cards_view_item}>
      <h3 className={style.cards_view_title}>
        {title}
      </h3>
      <p className={`${style.cards_view_icon} ${backgroundClass}`}>
        {icon}
      </p>
      <FeaturesList features={features} />
    </article>
  );
}

function Users(): React.ReactElement | null {
  const { t } = useTranslation();
  return (
    <section className={style.cards_view}>
      <Column
        title={t('main.users.code.title')}
        icon="&lt;code/&gt;"
        backgroundClass={style.cards_view_icon_code}
        features={[
          t('main.users.code.description1'),
          t('main.users.code.description2'),
          t('main.users.code.description3'),
          t('main.users.code.description4'),
          t('main.users.code.description5'),
        ]}
      />

      <Column
        title={t('main.users.boss.title')}
        icon="for lead"
        backgroundClass={style.cards_view_icon_lead}
        features={[
          t('main.users.boss.description1'),
          t('main.users.boss.description2'),
          t('main.users.boss.description3'),
          t('main.users.boss.description4'),
          t('main.users.boss.description5'),
        ]}
      />

      <Column
        title={t('main.users.ceo.title')}
        icon="$ € ¥"
        backgroundClass={style.cards_view_icon_boss}
        features={[
          t('main.users.ceo.description1'),
          t('main.users.ceo.description2'),
          t('main.users.ceo.description3'),
          t('main.users.ceo.description4'),
          t('main.users.ceo.description5'),
        ]}
      />
    </section>
  );
}

export default Users;
