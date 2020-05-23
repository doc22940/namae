import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {useParams} from 'react-router-dom';
import {IoIosRocket, IoIosFlash} from 'react-icons/io';
import Form from '../../components/Form';
import Cards from '../../components/cards';
import {
  ResultItem,
  ResultIcon,
  ResultName,
  COLORS as ResultColor,
  AvailableIcon,
} from '../components/cards/core';
import {sanitize} from '../util/text';
import {useStoreState} from '../store';
import {Header, Content, Legend, UniquenessIndicator} from '../App';
export function Search() {
  const {query} = useParams<{
    query: string;
  }>();
  const currentQuery = sanitize(query);
  const {t} = useTranslation();
  return (
    <>
      <Helmet>
        <title>Search for &quot;{currentQuery}&quot; — namae</title>
      </Helmet>
      <Header>
        <Form initialValue={currentQuery} />
      </Header>
      <Content>
        <Legend>
          <Stat />
          <ResultItem color={ResultColor.available}>
            <ResultIcon>
              <IoIosRocket />
            </ResultIcon>
            <ResultName>{t('available')}</ResultName>
            <AvailableIcon>
              <IoIosFlash />
            </AvailableIcon>
          </ResultItem>
          <ResultItem color={ResultColor.unavailable}>
            <ResultIcon>
              <IoIosRocket />
            </ResultIcon>
            <ResultName>{t('unavailable')}</ResultName>
          </ResultItem>
        </Legend>
        <Cards query={currentQuery} />
      </Content>
    </>
  );
}
function Stat() {
  const totalCount = useStoreState((state) => state.stats.totalCount);
  const availableCount = useStoreState((state) => state.stats.availableCount);
  const {t} = useTranslation();
  const uniqueness = ((n) => {
    if (n > 0.7 && n <= 1.0) {
      return t('uniqueness.high');
    } else if (n > 0.4 && n <= 0.7) {
      return t('uniqueness.moderate');
    } else {
      return t('uniqueness.low');
    }
  })(availableCount / totalCount);
  return <UniquenessIndicator>{uniqueness}</UniquenessIndicator>;
}
