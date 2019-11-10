import { createTheme, lightThemePrimitives } from 'baseui';
import { Theme } from 'baseui/theme';

const theme: Partial<Theme> = {};

export const NordLightTheme = createTheme(
  {
    ...lightThemePrimitives,
    primary: '#88C0D0',
    primary700: '#2f4f5e',
    primary600: '#497485',
    primary500: '#679aab',
    primary400: '#b4d6de',
    primary300: '#dde8eb',
    primary200: '#e9f6f7',
    primary100: '#f0feff',
    primary50: '#f0feff',
  },
  {},
);
