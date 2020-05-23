import {AppProps} from 'next/app';

import 'rc-tooltip/assets/bootstrap.css';

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
