import React, { useState } from 'react';
import { Typography } from "@mui/material"; // Import MUI Typography
import CustomButton from '../CustomButton';
import './navbar.css'; // Import custom CSS
import theme from '../../theme';

const Sections = ['HOME', 'ABOUT', 'PORTFOLIO', 'BLOG', 'CONTACT'];

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="custom-nav">
            <div className="nav-container">
                <Typography variant="logo" color={theme.palette.orange.contrastText}>
                    VINAY
                </Typography>


                {/* Menu Icon for Mobile View */}
                <div className="menu-icon" onClick={handleToggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                {/* Links Section */}
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    {Sections.map((section) => (
                        <li key={section}>
                            <Typography variant="body1" component="a" href={`#${section.toLowerCase()}`} onClick={() => setMenuOpen(false)} sx={{ textDecoration: 'none' }}>
                                {section}
                            </Typography>
                        </li>
                    ))}
                    <li>
                        {/* Custom Button */}
                        <CustomButton
                            text="Download CV"
                            version="in"
                            linkName='downloadcv'
                        />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
