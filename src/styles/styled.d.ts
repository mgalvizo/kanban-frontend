import "styled-components";
import { Layout, Typography, Spacing, Hex, Scheme } from "./types";

export interface BaseTheme {
  layout: Layout;
  scheme: Scheme;
  typography: Typography;
  spacing: Spacing;
}

declare module "styled-components" {
  export interface DefaultTheme extends BaseTheme {
    scheme: {
      colors: {
        text: Hex;
        secondary: Hex;
        background: Hex;
        lines: Hex;
      };
    };
  }
}
