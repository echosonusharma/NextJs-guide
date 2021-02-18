import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;

/*
via this page you can access the  your application's <html> and <body> tags.
as Next.js pages skip the definition of the surrounding document's markup.

try to avoid messing with it, it can be problematic

this file will be rendered on the server
 */