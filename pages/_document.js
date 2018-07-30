import Document, { Head, Main, NextScript } from 'next/document'
import classes from './app.css';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
            <title>Truong Dang</title>
            <meta charSet="utf-8" />
		        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <link rel="stylesheet" href="/_next/static/style.css" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Head>
        <body className="is-preload" id="is-body">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}