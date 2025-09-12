"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --base-fsz: 62.5%;
  --base-ffam: sans-serif;
  --base-color: #000;
  --base-lh: 1.5;
  --base-link-color: #000;
  --base-link-hover-color: #000;
  --body-fsz: 1.6rem;
  --body-ffam: var(--font-plus-jakarta-sans);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    border: 0;
}

html {
    width: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
    scrollbar-gutter: stable;
    font-size: var(--base-fsz);
    font-family: var(--base-ffam);
}

body {
    font-size: var(--body-fsz);
    font-family: var(--body-ffam);
    color: var(--base-color);
    line-height: var(--base-lh);
    overflow-x: hidden;
}

body > * {
    color: inherit;
}

main,
footer {
    width: 100%;
}

img,
svg {
    width: auto;
    max-width: 100%;
    vertical-align: middle;
}

a:visited,
a:link {
    color: var(--base-link-color);
    text-decoration: underline;
}

a:visited:hover,
a:link:hover {
    color: var(--base-link-hover-color);
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(1px 1px 1px 1px);
    /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
}

// 576px
@media screen and (min-width: 36em) {}

// 768px
@media screen and (min-width: 48em) {}

// 992px
@media screen and (min-width: 62em) {}

// 1200px
@media screen and (min-width: 75em) {}

// 1440px
@media screen and (min-width: 90em) {}
`;

export default GlobalStyles;
