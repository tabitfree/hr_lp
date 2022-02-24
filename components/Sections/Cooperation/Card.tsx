import { FC } from 'react';
import styled from 'styled-components';

type CardProps = {
  num: number;
  title: string;
  text: string;
};

const Card: FC<CardProps> = ({ num, title, text }) => {
  return (
    <Wrap>
      <Rectangle>
        <Image src={`/assets/images/step_${num}.svg`} />
      </Rectangle>
      <Content>
        <Num className='light'>{num}</Num>
        <Title className='l bold'>{title}</Title>
        <Text className='m'>{text}</Text>
      </Content>
    </Wrap>
  );
};

const Wrap = styled.div``;

const Rectangle = styled.div`
  box-shadow: 0px 7px 18px rgba(52, 34, 61, 0.17);
  border-radius: ${(p) => p.theme.borderRadius};
  width: 80px;
  height: 80px;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Content = styled.div`
  transform: translateY(-20px);
`;

const Num = styled.div`
  font-size: 60px;
  line-height: 110.3%;
  color: ${(p) => p.theme.palette.main};
  margin-bottom: 13px;
`;

const Title = styled.p`
  margin-bottom: 24px;
`;

const Text = styled.p`
  max-width: 377px;
`;

export default Card;
