import { FC, useContext } from 'react';
import styled from 'styled-components';
import { useLocales } from '../../_utils';
import Button from '../Button/Button';
import { RefContext } from '../Contexts/RefContextProvider';
import { scrollTo } from '../../_utils';

const Campaignes: FC = () => {
  const locales = useLocales();
  const context = useContext(RefContext);

  return (
    <Section>
      <Content className='content-container'>
        <Titles>
          <Title className={'bold'}>{locales.hrCampaignes}</Title>
          <Title className={'bold'}>{locales.newApplicant}</Title>
        </Titles>
        <StyledButton
          onClick={() => scrollTo(context.refs.consultation)}
          txt={locales.wantFreeConsultation}
          type={'dark'}
        />
      </Content>
    </Section>
  );
};

const Section = styled.section`
  background: ${(p) => p.theme.palette.main};
  position: relative;
  overflow: hidden;
  padding: 53px 0;

  &::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 200px;
    background: url('/assets/images/hr_bg.png') center / cover no-repeat;
    right: 0;
    top: -30px;
    z-index: 0;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Titles = styled.div`
  @media (max-width: 1100px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.h3`
  color: ${(p) => p.theme.palette.light.main};
  font-size: 37px;
  line-height: 47px;
  position: relative;
  z-index: 1;
`;

const StyledButton = styled(Button)`
  z-index: 1;
`;

export default Campaignes;
