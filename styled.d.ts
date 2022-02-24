import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    palette: {
      main: string;
      secondary: string;
      light: {
        main: string;
        secondary: string;
      };
      dark: {
        main: string;
        secondary: string;
        btn: string;
      };
      gray: {
        main: string;
      };
    };
  }
}
