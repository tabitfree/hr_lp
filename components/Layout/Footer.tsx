import { FC } from 'react';
import styled from 'styled-components';
import { useLocales } from '../../_utils';
import Logo from '../Logo';

const Footer: FC = () => {
  const locales = useLocales();
  return (
    <Section>
      <Row>
        <Col>
          <Logo />
          <Para>{locales.footerPara}</Para>
        </Col>
        <Col>
          <CompanyName href='https://www.advertia.cz/' className={'bold'}>
            {locales.advertia}
          </CompanyName>
          <ColContent>
            <div>
              <div>Tusarova 1215/55</div>
              <div>170 00, Praha - Holešovice</div>
              <div>{locales.czechRepublic}</div>
            </div>
            <div>
              <div>IČO: 27086411</div>
              <div>DIČ: CZ27086411</div>
              <Jury>Městský soud v Praze, odd. C vložka 95227</Jury>
              <Socials>
                <a href=''>
                  <img src='/assets/images/fb.svg' alt='facebook' />
                </a>
                <a href=''>
                  <img src='/assets/images/ig.svg' alt='instagram' />
                </a>
                <a href=''>
                  <img src='/assets/images/li.svg' alt='linkedin' />
                </a>
              </Socials>
              <a href='https://www.advertia.cz/'>www.advertia.cz</a>
            </div>
          </ColContent>
        </Col>
      </Row>
    </Section>
  );
};

const Section = styled.footer`
  background: #000;
  color: #fff9ea;
  padding: 52px 39px 185px 102px;
  font-size: 16px;
  line-height: 23px;

  & a:hover {
    color: ${(p) => p.theme.palette.main};
  }

  @media (max-width: 800px) {
    padding-left: 40px;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 200px 1fr;
  }
`;

const Col = styled.div`
  display: grid;
  grid-template-rows: 26px 1fr;
  grid-template-columns: 1fr;
  row-gap: 27px;
`;

const Para = styled.p`
  max-width: 381px;
`;

const ColContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 48px;

  @media (max-width: 440px) {
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr;
  }
`;

const CompanyName = styled.a`
  width: fit-content;
`;

const Jury = styled.div`
  margin-bottom: 18px;
`;

const Socials = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 27px;
`;

export default Footer;
