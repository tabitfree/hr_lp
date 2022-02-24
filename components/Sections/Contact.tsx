import { FC, useContext } from 'react';
import styled from 'styled-components';
import { useLocales } from '../../_utils';
import { RefContext } from '../Contexts/RefContextProvider';

const Contact: FC = () => {
  const locales = useLocales();
  const context = useContext(RefContext);

  return (
    <Section ref={(el) => (context.refs.consultation.current = el)}>
      <Content className={'content-container'}>
        <Title>{locales.contactTitle}</Title>
        <Name>{locales.contactName}</Name>
        <InfoContainer>
          <Info href={`mailto:${locales.contactMail}`}>
            {locales.contactMail}
          </Info>
          <Info href={`tel:${locales.contactTel}`}>{locales.contactTel}</Info>
        </InfoContainer>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  background: url(assets/images/applicants.png) center / cover no-repeat;
  padding: 60px 0;
`;

const Content = styled.div`
  color: ${(p) => p.theme.palette.secondary};
  padding-left: 102px;

  @media (max-width: 800px) {
    padding-left: 0;
  }
`;

const Title = styled.h2`
  margin-bottom: 57px;
  max-width: 510px;
`;

const Name = styled.p`
  margin-bottom: 9px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Info = styled.a`
  font-size: 37px;
  line-height: 56px;
  transition: all 0.3s ease;

  &:hover {
    color: #000;
  }

  @media (max-width: 400px) {
    font-size: 26px;
    line-height: 39px;
  }
`;

export default Contact;
