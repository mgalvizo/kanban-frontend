import { FONT_WEIGHTS } from "./constants";

type RemString = `${number}rem`;

type PxString = `${number}px`;

type Hex = `#${string}`;

type Layout = {
  maxDesignWith: PxString;
};

type Scheme = {
  colors: {
    primary: Hex;
    primaryHover: Hex;
    accent: Hex;
    accentHover: Hex;
    mediumGray: Hex;
    lightBlue: Hex;
    lightPurple: Hex;
    lightGreen: Hex;
  };
};

type Size = {
  xs: RemString | PxString | number;
  s: RemString | PxString | number;
  m: RemString | PxString | number;
  l: RemString | PxString | number;
  xl: RemString | PxString | number;
  xl2: RemString | PxString | number;
};

type FontWeights = {
  normal: FONT_WEIGHTS.NORMAL;
  medium: FONT_WEIGHTS.MEDIUM;
  bold: FONT_WEIGHTS.BOLD;
};

type Typography = {
  weights: FontWeights;
  body: {
    size: Pick<Size, "m" | "l">;
    lineHeight: Pick<Size, "m" | "l">;
  };
  headings: {
    size: Pick<Size, "s" | "m" | "l" | "xl">;
    lineHeight: Pick<Size, "s" | "m" | "l" | "xl">;
  };
};

type Spacing = {
  padding: Size;
  margin: Size;
};

export type { Layout, Scheme, Typography, Spacing, Hex };
