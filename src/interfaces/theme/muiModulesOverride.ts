/* eslint-disable @typescript-eslint/naming-convention */
import { PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material' {
  interface Color {
    [key: string]: string;
  }

  interface SimplePaletteColorOptions {
    [key: string]: string;
  }

  interface Palette {
    border: PaletteColorOptions;
    boxShadow: PaletteColorOptions;
  }

  interface PaletteColor {
    [key: string]: string;
  }

  interface PaletteOptions {
    border: PaletteColorOptions;
    boxShadow: PaletteColorOptions;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title?: true;
    textLg?: true;
    textMd?: true;
    textSm?: true;
    textXs?: true;
  }
}

declare module '@mui/material/styles/createTypography' {
  interface FontStyleOptions {
    fontWeightSemiBold?: number;
    title?: React.CSSProperties;
    textLg?: React.CSSProperties;
    textMd?: React.CSSProperties;
    textSm?: React.CSSProperties;
    textXs?: React.CSSProperties;
  }
}
