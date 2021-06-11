import {colors} from '../constants';

export const TYPE_THEME = {
  dark: 'dark',
  light: 'light',
};

export const theme = {
  dark: {
    color: colors.white,
    backgroundColor: colors.black,
    foreground: '#383B42',
  },
  light: {
    color: colors.black,
    backgroundColor: colors.white,
    foreground: '#f8f8f8',
  },
};

export const useTheme = type => theme[type] || theme[TYPE_THEME.light];
