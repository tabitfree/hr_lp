import { FC, useContext } from 'react';
import styled from 'styled-components';
import { Locales } from '../../_types/types';
import { useLocales } from '../../_utils';
import Button from '../Button/Button';
import { RefContext } from '../Contexts/RefContextProvider';
import { scrollTo } from '../../_utils';

const Hero: FC = () => {
  const locales: Locales = useLocales();
  const context = useContext(RefContext);

  return (
    <HeroSection>
      <div className={'content-container'}>
        <HeroContent>
          <Title>{locales.heroTitle}</Title>
          <Subtitles>
            <Subtitle className='xm'>{locales.heroSubtitleOne}</Subtitle>
            <Subtitle className='xm'>{locales.heroSubtitleTwo}</Subtitle>
          </Subtitles>
          <Buttons>
            <StyledButton
              onClick={() => scrollTo(context.refs.consultation)}
              txt={locales.freeConsultation}
              type='light'
            />
            <UnderlinedButtonWrap onClick={() => scrollTo(context.refs.price)}>
              <UnderlinedButton>{locales.priceList}</UnderlinedButton>
              <Like
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.4336 6.1091H10.0472C11.3779 4.2729 10.9799 2.46092 11.0523 1.76057C11.0523 0.174982 8.91373 -0.275389 8.30898 1.19982C7.89364 1.96827 7.60609 4.07455 5.39951 5.14289L4.27539 5.68748V5.61339C4.27539 5.28263 4.00615 5.01339 3.67539 5.01339H1.7998C0.972753 5.01339 0.299805 5.68634 0.299805 6.51339V12.949C0.299805 13.7761 0.972753 14.449 1.7998 14.449H3.67539C4.00615 14.449 4.27539 14.1798 4.27539 13.849V13.835C6.07943 14.2519 7.06477 14.6983 8.75693 14.6983H11.9274C12.6259 14.6983 13.1939 14.1159 13.1939 13.3999C13.1939 13.1009 13.0909 12.8286 12.9246 12.6088C13.3949 12.4189 13.7298 11.9511 13.7298 11.4025C13.7298 11.1034 13.6267 10.8311 13.4603 10.6113C13.9305 10.4214 14.2653 9.95361 14.2653 9.40499C14.2653 9.09005 14.151 8.80484 13.9684 8.5797C14.4417 8.35217 14.6998 7.88957 14.6998 7.40724C14.6998 6.69152 14.1317 6.1091 13.4336 6.1091ZM1.7998 13.849C1.30351 13.849 0.899805 13.4453 0.899805 12.949V6.5134C0.899805 6.01711 1.30351 5.6134 1.7998 5.6134H3.67539C3.67539 16.706 3.67514 5.36093 3.67597 13.849H1.7998ZM13.4336 8.10539C13.4028 8.1054 11.6248 8.10628 11.6556 8.10627C11.4897 8.10627 11.3556 8.24045 11.3556 8.40627C11.3556 8.57209 11.4897 8.70627 11.6556 8.70627H12.9985C13.3662 8.70627 13.6653 9.01974 13.6653 9.405C13.6653 9.79025 13.3662 10.1037 12.9985 10.1037C12.9328 10.1037 10.989 10.1037 11.1197 10.1037C10.9539 10.1037 10.8197 10.2379 10.8197 10.4037C10.8197 10.5695 10.9539 10.7037 11.1197 10.7037C11.1889 10.7037 12.5016 10.7037 12.463 10.7037C12.8307 10.7037 13.1298 11.0172 13.1298 11.4025C13.1298 11.7877 12.8307 12.1012 12.463 12.1012C12.2618 12.1012 10.5116 12.1012 10.5842 12.1012C10.4184 12.1012 10.2842 12.2354 10.2842 12.4012C10.2842 12.567 10.4184 12.7012 10.5842 12.7012C10.6788 12.7012 11.9719 12.7012 11.9274 12.7012C12.2948 12.7012 12.5939 13.0147 12.5939 13.3999C12.5939 13.7852 12.2948 14.0984 11.9274 14.0984H8.75693C7.15735 14.0984 6.26096 13.6784 4.27539 13.2153V6.35431L5.66084 5.68312C8.13206 4.48651 8.45844 2.16796 8.86445 1.42629C9.221 0.55675 10.4523 0.831535 10.4523 1.76057C10.383 2.45513 10.7771 4.1025 9.54619 5.77951L9.21484 6.23185C9.07086 6.42747 9.22034 6.7091 9.45683 6.7091H13.4336C13.801 6.7091 14.0998 7.02228 14.0998 7.40724C14.0998 7.80166 13.7911 8.10539 13.4336 8.10539Z'
                  fill='black'
                />
              </Like>
            </UnderlinedButtonWrap>
          </Buttons>
        </HeroContent>
      </div>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  background: url('/assets/images/hero-bg.png') center / cover no-repeat;
  padding: 392px 0 82px;

  @media (max-width: 800px) {
    padding: 193px 0 82px;
  }
`;

const HeroContent = styled.div`
  max-width: 502px;
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;

const Subtitles = styled.div`
  margin-bottom: 52px;
`;

const Subtitle = styled.p`
  line-height: 174.8%;
`;

const Buttons = styled.div`
  display: flex;
  gap: 41px;
`;

const UnderlinedButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: #000;
    bottom: 5px;
  }

  &:hover svg {
    transform: translateY(-6px) rotate(10deg);
  }
`;

const Like = styled.svg`
  transition: all 0.3s ease;
`;

const UnderlinedButton = styled.div``;

const StyledButton = styled(Button)``;

export default Hero;
