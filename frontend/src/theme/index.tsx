import { createTheme, responsiveFontSizes  } from '@mui/material';
import customFonts from './customFonts';

let theme = createTheme({
    typography: {
        ...customFonts,  // Apply your custom typography
      }
}
);
// Make typography responsive automatically
theme = responsiveFontSizes(theme);

export default theme;