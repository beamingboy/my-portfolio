import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Grid from '@mui/material/Grid2';
import CustomButton from '../CustomButton';
import cover from '../../images/lg-hero-bg.jpg';
import profileimg from '../../images/hero-image.png';
import theme from '../../theme'; // Assuming you're using a theme
import { accesslinks } from '../../utils/links';

export function HomeSection() {
    return (
        <Box
            sx={{
                backgroundImage: `url(${cover})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Container
                maxWidth='xl'
                sx={{
                    paddingTop: '200px',
                    paddingBottom: '80px',
                    height: '100vh',
                }}
            >
                <Grid container spacing={4} alignItems='center'>
                    {/* Left Section - Text */}
                    <Grid size={{ md: 6 }}>
                        <Typography variant='h4' color={theme.palette.orange.main} gutterBottom>
                            Hello, I’m
                        </Typography>
                        <Typography variant='h1' color={theme.palette.orange.contrastText} gutterBottom>
                            Vinay Kumar
                        </Typography>
                        <Typography variant='body3' color={theme.palette.orange.contrastText} gutterBottom>
                            A passionate{' '}
                            <Typography variant='body3' component='span' sx={{ color: theme.palette.success.main }}>
                                Software Engineer
                            </Typography>
                        </Typography>
                        <Grid container spacing={4} alignItems='left' marginTop={3}>
                            <Grid size={{ md: 6 }}>
                                <CustomButton
                                    text='About Me'
                                    version='away'
                                    linkName='about'
                                />
                            </Grid>
                            <Grid
                                size={{ md: 6 }}
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center'
                                }}>
                                <Link
                                    marginRight={2}
                                    href={accesslinks.linkedin}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    color='inherit'
                                >
                                    <LinkedInIcon color='primary' fontSize='large' />
                                </Link>
                                <Link
                                    marginRight={2}
                                    href={accesslinks.instagram}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    color='inherit'
                                >
                                    <InstagramIcon sx={{ color: '#C13584' }} fontSize='large' />
                                </Link>
                                <Link
                                    marginRight={2}
                                    href={accesslinks.github}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    color='inherit'
                                >
                                    <GitHubIcon fontSize='large' />
                                </Link>

                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Right Section - Image (Optional) */}
                    <Grid size={{ md: 6 }}>
                        <img
                            src={profileimg}
                            alt='Profile'
                            style={{ width: '100%', borderRadius: '10px' }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default HomeSection;
