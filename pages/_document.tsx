import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  const wrapper = {
    minHeight: 550,
    width: 300,
    borderRadius: 30,
    border: "2px solid gray",
    backgroundColor: '#ececec',
    margin: '50px auto'
  };
  return (
    <Html>
      <Head>
      </Head>
      <body style={wrapper}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
