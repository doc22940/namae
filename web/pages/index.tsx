import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {StoreProvider} from 'easy-peasy';
import {createBrowserHistory} from 'history';

import App from './App';
import * as serviceWorker from './serviceWorker';
import {FullScreenSuspense} from './util/suspense';
import {wrapHistoryWithGA, initSentry} from './util/analytics';
import {initCrisp} from './util/crip';
import {compose} from './util/array';
import {store, wrapHistoryWithStoreHandler} from './store';

// import './util/i18n';

import useSwr from 'swr';
import Link from 'next/link';

initSentry();
initCrisp();

const history = compose(
  createBrowserHistory(),
  wrapHistoryWithStoreHandler,
  wrapHistoryWithGA,
);

export default function Index() {
  return (
    <StoreProvider store={store}>
      <FullScreenSuspense>
        <Router history={history}>
          <App />
        </Router>
      </FullScreenSuspense>
    </StoreProvider>
  );
}
