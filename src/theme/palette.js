import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const lightPurple = '#595773';
const black = '#000000';
const boaRedDark = '#9a0e21';
const boaRed = '#dd1430';
const boaRedLight = '#e34359';
const boaRedLightest = '#f9dde0';

export default {
  black,
  white,
  lightPurple,
  primary: {
    contrastText: white,
    dark: boaRedDark,
    main: boaRed,
    light: boaRedLight,
    lightest: boaRedLightest,
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue['A400'],
    light: colors.blue['A400']
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[100]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  background: {
    default: '#F4F6F8',
    paper: white
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};
