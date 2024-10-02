import React from "react";
import type { AppProps } from "next/app";
import Head from 'next/head';

import "@/styles/styles.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon.png"></link>
                <meta name="theme-color" content="#red" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Holiday Calendar</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
