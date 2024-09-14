/* eslint-disable react/react-in-jsx-scope */
import { useTheme, Button } from "@mui/material";
import { orange } from "@mui/material/colors";

interface CustomButtonProps {
    text: string;
}

export function CustomButton({ text }: CustomButtonProps) {
    const theme = useTheme();

    return (
        <Button
            sx=
            {{
                borderRadius: '20px',
                fontSize: theme.typography.body4.fontSize,
                padding: '10px 30px',
                color: '#000', // Button text color
                backgroundColor: "#fff3e0", // Background color for the button
                transition: 'color 0.3s ease', // Smooth text color transition
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#ffcc80', // The color that will fill vertically on hover
                    transform: 'translateY(-100%)', // Start off-screen (above the button)
                    transition: 'transform 0.5s ease', // Smooth transition for the fill effect
                    // zIndex: 0, // Make sure the pseudo-element is behind the button text
                },
                '&:hover::before': {
                    transform: 'translateY(0)', // Fill the button vertically on hover
                },
                '&:hover': {
                    color: '#fff', // Change text color when hovered
                },
                // position: 'relative',
            }}
        >
            {text}
        </Button>
    );
}

export default CustomButton;