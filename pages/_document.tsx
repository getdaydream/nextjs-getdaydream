import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  Head,
} from 'next/document';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from '../styletron';
import { Sheet } from 'styletron-engine-atomic';

class MyDocument extends Document<{ stylesheets: Sheet[] }> {
  static async getInitialProps(props: DocumentContext) {
    const page = await props.renderPage(App => props => (
      <StyletronProvider value={styletron}>
        <App {...props} />
      </StyletronProvider>
    ));
    const stylesheets = styletron.getStylesheets() || [];
    return { ...page, stylesheets };
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i}
            />
          ))}
          <style>{`
            body {
              margin: 0;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
