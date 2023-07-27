import React from 'react';

import Header from 'ts/components/Header';
import Footer from 'ts/components/Footer';
import Title from 'ts/components/Title';
import localization from 'ts/helpers/Localization';

import Demo from './components/Demo';
import Features from './components/Features';
import Users from './components/Users';
import Comments from './components/Comments';

import style from './styles/background.module.scss';

function Background() {
  return (
    <>
      <img
        className={style.background_left_1}
        src="./assets/background/left-1.svg"
      />
      <img
        className={style.background_left_2}
        src="./assets/background/left-2.svg"
      />
      <img
        className={style.background_right_1}
        src="./assets/background/right-1.svg"
      />
      <img
        className={style.background_right_2}
        src="./assets/background/right-2.svg"
      />
    </>
  );
}

function MainPage() {
  return (
    <>
      <Background />
      <Header/>
      <main>
        <Demo/>
        <Title text={localization.get('main.users.title')} />
        <Users/>
        <Features/>
        <Comments/>
      </main>
      <Footer/>
    </>
  );
}

export default MainPage;
