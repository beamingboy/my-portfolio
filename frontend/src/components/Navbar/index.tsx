import React, { useState, useEffect } from 'react';
import { Typography } from "@mui/material"; // Import MUI Typography
import CustomButton from '../CustomButton';
import './navbar.css'; // Import custom CSS
import theme from '../../theme';

const Sections = ['HOME', 'ABOUT', 'PORTFOLIO', 'BLOG', 'CONTACT'];

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navBackground, setNavBackground] = useState('transparent');

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const currentWidth = window.innerWidth

            // Check for screen width first
            if (currentWidth < 850) {
                setNavBackground(theme.palette.bg.main);
            }
            else if (currentScroll > 50) {
                setNavBackground(theme.palette.bg.main);
            }
            else {
                setNavBackground('transparent');
            }
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <nav
            className="custom-nav"
            style={{
                backgroundColor: navBackground,
                transition: 'background-color 0.3s ease', // Smooth transition effect
            }}
        >
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
