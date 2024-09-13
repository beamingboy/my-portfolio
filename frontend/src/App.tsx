/* eslint-disable react/react-in-jsx-scope */
import { ThemeProvider, Typography } from '@mui/material';
import theme from './theme';
import { CustomButton } from "./components";

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Typography variant="h4">Vinay Kumar </Typography>
				<CustomButton text="Outlined Button" />
				<Typography variant="body1">Vinay Kumar </Typography>

			</ThemeProvider>
			`
		</>
	);
}

export default App;
