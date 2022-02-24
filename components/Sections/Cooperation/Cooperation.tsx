import { FC, useContext } from 'react';
import styled from 'styled-components';
import { useLocales } from '../../../_utils';
import { RefContext } from '../../Contexts/RefContextProvider';
import Card from './Card';

type Step = { title: string; para: string };

const Cooperation: FC = () => {
  const locales = useLocales();
  const context = useContext(RefContext);

  return (
    <Section ref={(el) => (context.refs.how.current = el)}>
      <Content className='content-container'>
        <Title>{locales.howCollabWorks}</Title>
        <Subtitle className={'xm'}>{locales.inSixSteps}</Subtitle>
        <Cards>
          {locales.steps.map((step: Step, i: number) => (
            <Card key={i} title={step.title} text={step.para} num={i + 1} />
          ))}
        </Cards>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  padding: 96px 0 148px;

  @media (max-width: 800px) {
    padding: 60px 0;
  }
`;

const Content = styled.div`
  margin-right: 120px;
`;

const Title = styled.h2`
  color: ${(p) => p.theme.palette.main};
  margin-bottom: 30px;
  max-width: 432px;
  font-family: 'GroteskRegular', sans-serif;
  font-weight: 400;
`;

const Subtitle = styled.p`
  margin-bottom: 64px;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 54px;
  row-gap: 64px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
`;

export default Cooperation;
