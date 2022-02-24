import { FC, useContext } from 'react';
import styled from 'styled-components';
import { useLocales } from '../../../_utils';
import { RefContext } from '../../Contexts/RefContextProvider';
import Card from './Card';

const Collabs: FC = () => {
  const locales = useLocales();
  const context = useContext(RefContext);

  return (
    <Section ref={(el) => (context.refs.cases.current = el)}>
      <div className='content-container'>
        <Title>{locales.cooperationsTitle}</Title>
        <Content>
          {locales.cooperations.map((el, i) => (
            <Card key={i} {...el} />
          ))}
        </Content>
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 163px 0 167px;

  @media (max-width: 800px) {
    padding: 60px 0;
  }
`;

const Title = styled.h2`
  margin-bottom: 88px;

  @media (max-width: 800px) {
    margin-bottom: 40px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export default Collabs;
