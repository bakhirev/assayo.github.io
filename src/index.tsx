import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { render } from 'react-dom';

import ru from './ts/config/translations/ru';
import './styles/index.scss';
import Main from './ts/pages/Main';

// eslint-disable-next-line
// @ts-ignore
if (module.hot) {
  // eslint-disable-next-line
  // @ts-ignore
  module.hot.accept();
}

// @ts-ignore
console.log(ru + '');

render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route
          path="*"
          element={(
            <Main />
          )}
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
