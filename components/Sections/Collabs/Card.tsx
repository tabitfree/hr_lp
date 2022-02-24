import { FC } from 'react';
import styled from 'styled-components';
import { CardProps } from '../../../_types/props';

const Card: FC<CardProps> = ({ name, place, position, desc, result }) => {
  return (
    <Container>
      <Content>
        <Logo src={`/assets/images/logo_${name}.svg`} alt={name} />
        <Place className={'s'}>{place}</Place>
        <Position className={'l'}>{position}</Position>
        <Desc className={'m'}>{desc}</Desc>
        <Result>
          <ResultContent>
            <ResultTitle className={'xm'}>{result.title}</ResultTitle>
            <ResultTxts>
              {result.texts.map((el, i) => (
                <ResultTxt className={'m'} key={i}>
                  {el}
                </ResultTxt>
              ))}
            </ResultTxts>
          </ResultContent>
        </Result>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 38px 37px 47px;
  border: 1px solid rgba(28, 28, 28, 0.3);
  border-radius: ${(p) => p.theme.borderRadius};
  min-height: 536px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`;

const Logo = styled.img`
  margin-bottom: 11px;
`;

const Place = styled.p`
  margin-bottom: 23px;
`;

const Position = styled.p`
  margin-bottom: 15px;
`;

const Desc = styled.p``;

const Result = styled.div`
  border-radius: ${(p) => p.theme.borderRadius};
  background: url(assets/images/result_bg.png) center / cover no-repeat;
  padding: 24px 26px 24px 23px;
  color: #fff9ea;
  margin-top: auto;
  width: 100%;
`;

const ResultContent = styled.div``;

const ResultTitle = styled.p`
  margin-bottom: 9px;
`;

const ResultTxts = styled.div``;

const ResultTxt = styled.p`
  line-height: 21px;
`;

export default Card;
