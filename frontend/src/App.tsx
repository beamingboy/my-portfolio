/* eslint-disable react/react-in-jsx-scope */
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { Navbar, CustomCursor, HomeSection, AboutSection } from "./components";

function App() {
	return (
		<>
			<CustomCursor />
			<ThemeProvider theme={theme}>
				<Navbar />
				<HomeSection />
				<AboutSection />

			</ThemeProvider>

		</>
	);
}

export default App;
