import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from 'react-dom';

import './ts/helpers/i18n';
import './styles/index.scss';

import Main from './ts/pages/Main';

// eslint-disable-next-line
// @ts-ignore
if (module.hot) {
  // eslint-disable-next-line
  // @ts-ignore
  module.hot.accept();
}

render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/:lang"
          element={(
            <Main/>
          )}
        />
        <Route
          path="*"
          element={(
            <Main/>
          )}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
