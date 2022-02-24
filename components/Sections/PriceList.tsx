import { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useLocales } from '../../_utils';
import Button from '../Button/Button';
import { scrollTo } from '../../_utils';
import { RefContext } from '../Contexts/RefContextProvider';

const PriceList: FC = () => {
  const locales = useLocales();
  const context = useContext(RefContext);

  return (
    <Section ref={(el) => (context.refs.price.current = el)}>
      <Content>
        <Title>{locales.priceList}</Title>
        <Text className={'m'}>{locales.universalPrices}</Text>
        <List className={'xm'}>
          <StyledLi>{locales.grafWork}</StyledLi>
          <StyledLi>{locales.settingUpCampaignes}</StyledLi>
          <StyledLi>{locales.invest}</StyledLi>
          <StyledLi>{locales.surcharge}</StyledLi>
        </List>

        <StyledButton
          onClick={() => scrollTo(context.refs.consultation)}
          txt={locales.wantFreeConsultation}
          type='dark'
        />
      </Content>
    </Section>
  );
};

const Section = styled.section`
  padding: 84px 0;
  background: url(assets/images/price_list_bg.png) center / cover no-repeat;
`;

const Content = styled.div`
  background: ${(p) => p.theme.palette.main};
  padding: 40px 41px 48px 45px;
  border-radius: ${(p) => p.theme.borderRadius};
  box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.22);
  margin: 0 auto;
  width: fit-content;
  color: ${(p) => p.theme.palette.secondary};
  max-width: 416px;

  @media (max-width: 480px) {
    margin: 0 10px;
    padding: 40px 20px;
  }
`;

const Title = styled.h3`
  margin-bottom: 15px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  padding-left: 46px;
  margin-bottom: 61px;
  list-style: none;

  @media (max-width: 400px) {
    padding-left: 20px;
  }
`;

const StyledLi = styled.li`
  line-height: 129%;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: url('assets/images/price_list_tick.svg') center / cover
      no-repeat;
    top: 0;
    left: -46px;
  }

  @media (max-width: 400px) {
    &::before {
      left: -24px;
      height: 13px;
      width: 13px;
    }
  }
`;

const Text = styled.p`
  margin-bottom: 36px;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

export default PriceList;
