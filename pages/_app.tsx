import Head from "next/head";
import React from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

import "../styles/globals.css";

const Application: NextPage<AppProps<{}>> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Zoom Components</title>
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Application;
