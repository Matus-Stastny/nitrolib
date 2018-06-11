// @flow strict
/* eslint-disable react/no-danger */
import * as React from "react";

import type { Brand } from "client/records/Brand";
import type { Intl } from "client/records/Intl";
import type { Fetched } from "client/records/Fetched";
import type { Assets } from "../config";

const globalCss = `
  body {
    color: #212121;
    font-family: "Helvetica Neue", "Calibri Light", Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.02em;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

type Props = {
  root: string,
  css: React.Node,
  assets: Assets,
  brand: Brand,
  intl: Intl,
  fetched: Fetched,
};

const Html = (props: Props) => (
  <html lang="en">
    <head>
      <title>Reactizer</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {props.assets.vendor && <link rel="preload" href={props.assets.vendor.js} as="script" />}
      <link rel="preload" href={props.assets.bundle.js} as="script" />

      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: globalCss }} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.__BRAND__ = ${JSON.stringify(props.brand)};
            window.__INTL__ = ${JSON.stringify(props.intl)};
            window.__FETCHED__ = ${JSON.stringify(props.fetched)};
         `,
        }}
      />
      {props.css}
    </head>
    <body>
      <div id="react" dangerouslySetInnerHTML={{ __html: props.root }} />
      <div id="modal" />

      {props.assets.vendor && <script src={props.assets.vendor.js} />}
      <script src={props.assets.bundle.js} />
    </body>
  </html>
);

export default Html;
