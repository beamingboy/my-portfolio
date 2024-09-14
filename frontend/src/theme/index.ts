import { createTheme, responsiveFontSizes } from '@mui/material';
import customFonts from './customFonts';

const theme = responsiveFontSizes(
	createTheme(
		{
			typography: {
				fontFamily: 'Poppins, sans-serif',
				...customFonts,
			},

		}));

export default theme;
