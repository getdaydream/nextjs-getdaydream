import React from 'react';
import App from 'next/app';
import { Provider as StyletronProvider } from 'styletron-react';
import {
  BaseProvider,
  DarkTheme,
  DarkThemeMove,
  LightTheme,
  LightThemeMove,
} from 'baseui';
import { styletron, debug } from '../styletron';
import { Theme } from 'baseui/theme';
import { NordLightTheme } from '@utils/theme';
import initHttpClient from '@utils/http';

const themes = {
  LightTheme: {
    ...LightTheme,
  } as Theme,
  LightThemeMove: {
    ...LightThemeMove,
  },
  DarkTheme: {
    ...DarkTheme,
  },
  DarkThemeMove: {
    ...DarkThemeMove,
  },
  NordLightTheme,
};

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  componentDidMount() {
    if (typeof window !== undefined) {
      initHttpClient();
    }
  }

  state = {
    theme: themes.DarkTheme,
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <BaseProvider theme={this.state.theme}>
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    );
  }
}

export default MyApp;
