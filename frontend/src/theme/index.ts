import { createTheme, responsiveFontSizes } from '@mui/material';
import customFonts from './customFonts';

const theme = responsiveFontSizes(
	createTheme(
		{
			palette: {
				orange: {
					main: '#F75023',
					light: '#F88C6F',
					dark: '#AA2400',
					contrastText: '#FFFFFF',
				},
				bg: {
					main: '#19191C',
					light: '#616470',
					dark: '#0C0D10',
				},
			},
			typography: {
				fontFamily: 'Poppins, sans-serif',
				...customFonts,
			},

		}));

export default theme;
