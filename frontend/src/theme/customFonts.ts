import { createTheme } from '@mui/material';
const customFonts = {
	logo: {
		fontFamily: 'Stick No Bills',
		fontWeight: 600,
		fontSize: '4.063rem',
	},
	// Titles
	h1: {
		fontFamily: 'poppins',
		fontWeight: 700,
		fontSize: '5.313rem',
	},
	h2: {
		fontFamily: 'poppins',
		fontWeight: 500,
		fontSize: '4.375rem',
	},
	h3: {
		fontFamily: 'poppins',
		fontWeight: 500,
		fontSize: '3.125rem',
	},
	h4: {
		fontFamily: 'poppins',
		fontWeight: 500,
		fontSize: '2.813rem',
	},

	// body1 is the Medium in the style guide
	body1: {
		fontFamily: 'poppins',
		fontWeight: 400,
		fontSize: '1.75rem',
	},
	body2: {
		fontFamily: 'poppins',
		fontWeight: 400,
		fontSize: '1.5rem',
	},
	body3: {
		fontFamily: 'poppins',
		fontWeight: 400,
		fontSize: '1.25rem',
		lineHeight: '33px',
		[createTheme().breakpoints.down('sm')]: {
			fontSize: '1.125rem', // Responsive size for small screens
		},
	},
	body4: {
		fontFamily: 'poppins',
		fontWeight: 400,
		fontSize: '1.125rem',
		lineHeight: '33px',
		[createTheme().breakpoints.down('md')]: {
			fontSize: '1rem', // Responsive size for medium screens
		},
		[createTheme().breakpoints.down('sm')]: {
			fontSize: '1rem', // Responsive size for small screens
		},
	},
};

export default customFonts;
