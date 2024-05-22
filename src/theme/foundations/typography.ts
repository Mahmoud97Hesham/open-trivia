import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
  fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif', 'inter'].join(','),
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  title: {
    fontSize: 72,
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: '-0.32px',
  },
  h1: {
    fontSize: 60,
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.32px',
  },
  h2: {
    fontSize: 48,
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: '-0.32px',
  },
  h3: {
    fontSize: 36,
    fontWeight: 700,
    lineHeight: 1.22,
    letterSpacing: '-0.32px',
  },
  h4: {
    fontSize: 30,
    fontWeight: 700,
    lineHeight: 1.26,
    letterSpacing: 0,
  },
  subtitle1: {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 1.33,
    letterSpacing: 0,
  },
  subtitle2: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  textLg: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 1.55,
    letterSpacing: 0,
  },
  textMd: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  textSm: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.428,
    letterSpacing: 0,
  },
  textXs: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: 0,
  },
};

export default typography;
