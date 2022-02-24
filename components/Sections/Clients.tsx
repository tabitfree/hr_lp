import { FC } from 'react';
import styled from 'styled-components';
import { useLocales } from '../../_utils';

const Clients: FC = () => {
  const locales = useLocales();

  return (
    <Section>
      <div className={'content-container'}>
        <Content>
          <Title>{locales.someClients}</Title>
          <Para className={'m'}>{locales.someClientsPara}</Para>
        </Content>
        <Logos>
          <img src='/assets/images/logo_abb.svg' alt='abb' />
          <img src='/assets/images/logo_tipsport.svg' alt='tipsport' />
          <img src='/assets/images/logo_shameless.svg' alt='shameless' />
          <img src='/assets/images/logo_huegli.svg' alt='huegli' />
          <img src='/assets/images/logo_imaginox.svg' alt='imaginox' />
        </Logos>
      </div>
    </Section>
  );
};

const Section = styled.section`
  background: ${(p) => p.theme.palette.light.secondary};
  position: relative;
  text-align: center;
  padding: 80px 0;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: 0;
  }

  &::before {
    background: url('/assets/images/clients_one.svg') center / cover no-repeat;
    width: 140px;
    height: 148px;
    left: 0;
    bottom: 0;
  }

  &::after {
    background: url('/assets/images/clients_two.svg') center / cover no-repeat;
    width: 224px;
    height: 428px;
    right: 0;
    bottom: -30px;
  }

  @media (max-width: 500px) {
    &::before {
      bottom: 80%;
    }
  }
`;

const Content = styled.div`
  margin: 0 auto;
`;

const Title = styled.h3`
  margin-bottom: 32px;
  position: relative;
  z-index: 1;
`;

const Para = styled.p`
  max-width: 769px;
  margin: 0 auto;
  margin-bottom: 53px;
  position: relative;
  z-index: 1;
`;

const Logos = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 88px;
  flex-wrap: wrap;
  row-gap: 30px;
  position: relative;
  z-index: 1;

  @media (max-width: 800px) {
    column-gap: 20px;
  }
`;

export default Clients;
