import { ComponentState, FC, useContext, useState } from 'react';
import Logo from '../Logo';
import { useLocales } from '../../_utils';
import { Locales } from '../../_types/types';
import styled from 'styled-components';
import Button from '../Button/Button';
import { RefContext } from '../Contexts/RefContextProvider';
import { scrollTo } from '../../_utils';

const Navbar: FC = () => {
  const locales: Locales = useLocales();
  const context: any = useContext(RefContext);
  const [expanded, setExpanded]: ComponentState = useState(false);

  const handleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledHeader>
      <LogoWrap>
        <Logo type={'dark'} />
      </LogoWrap>
      <StyledNav className={expanded ? 'expanded' : ''}>
        <InnerNav>
          <Item onClick={() => scrollTo(context.refs.how)}>
            {locales.howItWorks}
          </Item>
          <Item onClick={() => scrollTo(context.refs.cases)}>
            {locales.cases}
          </Item>
          <Item onClick={() => scrollTo(context.refs.price)}>
            {locales.priceList}
          </Item>
        </InnerNav>
        <StyledButton
          onClick={() => scrollTo(context.refs.consultation)}
          txt={locales.freeConsultation}
          type='dark'
        />
      </StyledNav>
      <Hamburger onClick={handleExpansion}>
        <Ham />
        <Ham />
        <Ham />
      </Hamburger>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background: transparent;
  position: absolute;
  width: 100%;
  left: 0;
  top: 25px;
  padding: 0;
  z-index: 1;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: all 0.6s ease;

  @media (max-width: 900px) {
    position: absolute;
    width: 100%;
    top: 100%;
    opacity: 0;
    flex-direction: column;

    &.expanded {
      opacity: 1;
    }
  }
`;

const InnerNav = styled.div`
  display: flex;
  gap: 58px;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
    gap: 15px;
    margin-bottom: 15px;
  }
`;

const LogoWrap = styled.div`
  margin-right: 100px;
  margin-left: 80px;

  @media (max-width: 900px) {
    margin-right: 0;
    margin-left: 40px;
  }

  @media (max-width: 440px) {
    margin-left: 10px;
  }
`;

const Item = styled.span`
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${(p) => p.theme.palette.main};
  }
`;

const StyledButton = styled(Button)`
  @media (min-width: 901px) {
    margin-right: 50px;
  }
`;

const Hamburger = styled.div`
  position: relative;
  width: 30px;
  height: 19px;
  margin-left: auto;
  margin-right: 50px;

  @media (min-width: 901px) {
    display: none;
  }

  @media (max-width: 440px) {
    margin-right: 10px;
  }
`;

const Ham = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background: #000;
  left: 0;

  &:nth-of-type(1) {
    top: 0;
  }

  &:nth-of-type(2) {
    top: 50%;
  }

  &:nth-of-type(3) {
    bottom: 0;
  }
`;

export default Navbar;
