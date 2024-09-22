/* eslint-disable react/react-in-jsx-scope */
import { Typography } from "@mui/material";
import theme from "../../theme";
import React from 'react';
import './CustomButton.css';
import { accesslinks } from '../../utils/links';

interface CustomButtonProps {
    text: string;
    version: string;
    linkName: keyof typeof accesslinks;
}

export function CustomButton({ text, version, linkName }: CustomButtonProps) {
    // Determine the class to use based on the version prop
    const buttonClass = version === 'away' ? 'custom-button-home' : 'custom-button-home-slide-in';
    // Click handler function for button
    const handleClick = () => {
        // Navigate to the link
        window.location.href = accesslinks[linkName];
    };

    return (
        <button
            className={buttonClass}
            onClick={handleClick}
            style={{
                color: theme.palette.orange.contrastText, // Use theme color for initial text color
                border: `3px solid ${theme.palette.orange.main}`, // Use theme color for border
            }}
        >
            <Typography
                variant="body4"
            >
                {text}
            </Typography>
        </button>
    );
};

export default CustomButton;