import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#9c77e1',
      main: '#8033FF',
      dark: '#4317a2',
      contrastText: '#FFF',
    },
    secondary: {
      light: '#726e7a',
      main: '#dfdee0',
      dark: '#3b3940',
      contrastText: '#FFF',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
  },
});
