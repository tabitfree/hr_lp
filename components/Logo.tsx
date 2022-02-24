import { forwardRef } from 'react';
import styled from 'styled-components';

type LogoType = 'light' | 'dark';
type LogoProps = { type?: LogoType };

const Logo = forwardRef<HTMLAnchorElement, LogoProps>(
  ({ type = 'light', ...rest }, ref) => {
    return (
      <StyledAnchor href='https://www.advertia.cz/' ref={ref} {...rest}>
        <img src={`/assets/images/advertia_${type}.svg`} alt='advertia logo' />
      </StyledAnchor>
    );
  }
);

const StyledAnchor = styled.a`
  display: flex;
`;

Logo.displayName = 'Logo';

export default Logo;
