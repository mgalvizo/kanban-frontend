import { DefaultTheme } from "styled-components";
import type { BaseTheme } from "./styled";
import { MAX_DESIGN_WIDTH, SPACING, FONT_WEIGHTS, SCHEME } from "./constants";

const baseTheme: BaseTheme = {
  layout: {
    maxDesignWith: MAX_DESIGN_WIDTH,
  },
  scheme: {
    colors: {
      primary: SCHEME.PURPLE,
      primaryHover: SCHEME.PURPLE_HOVER,
      accent: SCHEME.RED,
      accentHover: SCHEME.RED_HOVER,
      mediumGray: SCHEME.MEDIUM_GRAY,
      lightBlue: SCHEME.LIGHT_BLUE,
      lightPurple: SCHEME.LIGHT_PURPLE,
      lightGreen: SCHEME.LIGHT_GREEN,
    },
  },
  typography: {
    weights: {
      normal: FONT_WEIGHTS.NORMAL,
      medium: FONT_WEIGHTS.MEDIUM,
      bold: FONT_WEIGHTS.BOLD,
    },
    body: {
      size: {
        m: "1.2rem",
        l: "1.3rem",
      },
      lineHeight: {
        m: 1.7,
        l: 1.25,
      },
    },
    headings: {
      size: {
        s: "1.2rem",
        m: "1.5rem",
        l: "1.8rem",
        xl: "2.4rem",
      },
      lineHeight: {
        s: 1.25,
        m: 1.26,
        l: 1.27,
        xl: 1.25,
      },
    },
  },
  spacing: {
    margin: SPACING,
    padding: SPACING,
  },
};

const lightTheme: DefaultTheme = {
  ...baseTheme,
  scheme: {
    colors: {
      ...baseTheme.scheme.colors,
      text: SCHEME.BLACK,
      secondary: SCHEME.WHITE,
      background: SCHEME.LIGHT_GRAY,
      lines: SCHEME.DARK_LINES,
    },
  },
};

const darkTheme: DefaultTheme = {
  ...baseTheme,
  scheme: {
    colors: {
      ...baseTheme.scheme.colors,
      text: SCHEME.WHITE,
      secondary: SCHEME.DARK_GRAY,
      background: SCHEME.VERY_DARK_GRAY,
      lines: SCHEME.DARK_LINES,
    },
  },
};

export { darkTheme, lightTheme };
