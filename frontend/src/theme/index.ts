import { createTheme, responsiveFontSizes } from '@mui/material';
import customFonts from './customFonts';

const theme = responsiveFontSizes(
	createTheme(
		{
			breakpoints: {
				values: {
					xs: 0,
					sm: 600,
					md: 960,
					lg: 1280,
					xl: 1920,
				},
			},
			typography: {
				...customFonts,
			},

		}));

export default theme;
