import React from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import client from '../apollo-client';
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    overflow: hidden;
    color: ${props => props.theme.colors.black}; 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Cloudshelf</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </React.Fragment>
  );
}
