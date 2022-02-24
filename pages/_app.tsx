import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../_utils/globalStyles';
import { theme } from '../_utils/theme';
import Layout from '../components/Layout/Layout';
import RefContextProvider from '../components/Contexts/RefContextProvider';
import '../fonts/fonts.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RefContextProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RefContextProvider>
  );
}

export default MyApp;
