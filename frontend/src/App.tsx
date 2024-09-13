import React from 'react';
import { ThemeProvider, Typography } from '@mui/material';
import theme from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Typography variant='h2'>Vinay Kumar </Typography>
    </ThemeProvider>`
    </>
  );
}

export default App;
