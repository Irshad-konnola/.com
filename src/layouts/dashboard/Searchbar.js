
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:800px)': {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '4rem',
    
  },
};

export default function Searchbar() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h3" color="#127FDE">Konnola.com</Typography>
    </ThemeProvider>
  );
}
