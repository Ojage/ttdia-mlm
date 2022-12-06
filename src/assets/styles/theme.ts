import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { ButtonStyles as Button } from './components/buttonStyles';
import { BoxStyles as Box } from './components/boxStyles';
import { BodyStyles as Styles } from './components/bodyStyles';

/* Pallete 1 */
const black = '#000000';

const lightDark = '#121318';

const white = '#ffffff';
const platinum = '#e66868';
const silver = '#bfbfbf';
const manatee = '#96939b';
const dodgerBlue = '#1e90ff';
const mangoTango = '#fc814a';

const venetianRed = '#C90612ff';
const background = { _light: white, _dark: black };

export const myNewTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: background,
      },
      // styles for the `a`
      a: {
        color: 'blue.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  fonts: {
    heading: "'Open Sans', sans-serif",
    body: "'montserrat', sans-serif",
  },
  colors: {
    primary: dodgerBlue,
    secondary: manatee,
    tertiary: silver,
    cardColor: lightDark,
    highlight: platinum,
    warning: mangoTango,
    danger: venetianRed,
    darken: black,
  },

  components: {
    Button,
    Box,
    Styles,
  },
});
