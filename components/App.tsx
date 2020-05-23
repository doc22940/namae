import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Switch, Route, Redirect} from 'react-router-dom';

import Welcome from './Welcome';
import Form from './Form';
import Footer from './Footer';
import {mobile} from '../util/css';
import {isStandalone} from '../util/pwa';

export default function App() {
  return <Home />;
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      {!isStandalone() && <Footer />}
    </>
  );
}

function Home() {
  const {t} = useTranslation();

  return (
    <>
      <Helmet>
        <title>namae — {t('title')}</title>
      </Helmet>
      <Header>
        <Form />
      </Header>
      <Content>
        <Welcome />
      </Content>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  line-height: 1.625em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #ffffff;

  ${mobile} {
    background: #f5f5f5;
  }
}
`;

export const Content = styled.div`
  padding-top: 100px;

  ${mobile} {
    padding-top: 60px;
  }
`;

export const Header = styled.header`
  padding: 0 40px;
  background-image: linear-gradient(180deg, #bda2ff 0%, #1b24cc 99%);

  ${mobile} {
    padding: 0 20px;
  }
`;

export const Legend = styled.div`
  margin-top: -100px;
  padding: 100px 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  user-select: none;
  cursor: default;
  background-color: #f6f6fa;

  ${mobile} {
    flex-direction: column;
    align-items: center;
    margin-top: -80px;
    padding: 70px 0 30px;
    background-color: none;
  }

  > * {
    margin: 0 10px 0;
  }
`;

export const UniquenessIndicator = styled.div`
  color: #7b7b7b;
`;
