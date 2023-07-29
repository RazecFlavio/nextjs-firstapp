import { AppProps } from 'next/app'
import GlobalStyle from '../src/theme/GlobalStyle'
import Head from 'next/head'

export default function MyApp({
    Component,
    pageProps
}: AppProps) {
    return (
        <>
            <Head>
                {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap" rel="stylesheet" /> */}
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}