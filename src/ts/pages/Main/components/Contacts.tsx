import React, { useState } from 'react';

import Title from 'ts/components/Title';

import style from '../styles/contacts.module.scss';

interface ITabProps {
  links: string[][];
  selected: string;
  setSelected: Function;
}

function Tab({ links, selected, setSelected }: ITabProps) {
  const buttons = links.map((item: any) => (
    <div
      key={item[0]}
      className={`${style.contacts_nav_link} ${selected === item[0] ? style.contacts_nav_link_selected : ''}`}
      onClick={() => {
        setSelected(item[0]);
      }}
    >
      {item[1]}
    </div>
  ));

  return (
    <nav className={style.contacts_nav}>
      {buttons}
    </nav>
  );
}

function Contacts(): React.ReactElement | null {
  const [selected, setSelected] = useState<string>('ru');
  return (
    <>
      <Title text="Контакты" />
      <section className={style.contacts}>
        <Tab
          links={[
            ['ru', 'Россия'],
            ['am', 'Армения'],
          ]}
          selected={selected}
          setSelected={setSelected}
        />
        <address className={style.contacts_address}>
          <p className={style.contacts_address_street}>
            г. Санкт-Петербург, пр-т. Невский, д. 193, офис 32
          </p>
          <a className={style.contacts_address_email}>
            erevan@yandex.ru
          </a>
          <a
            className={style.contacts_address_phone}
            href="tel:+71112223344"
          >
            +7 (111) 222-33-44
          </a>
          <time className={style.contacts_address_time}>
            09:00 — 18:00
          </time>
        </address>
      </section>
    </>
  );
}

export default Contacts;
