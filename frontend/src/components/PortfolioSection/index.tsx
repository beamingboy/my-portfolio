import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import CustomButton from '../CustomButton';
import aboutimg from '../../images/about-image.png';
import theme from '../../theme'; // Assuming you're using a theme

export function PortfolioSection() {
    return (
        <Box>
            <Container
                maxWidth='xl'
                sx={{
                    paddingTop: '100px',
                    paddingBottom: '80px',
                    alignItems: 'center'
                }}
            >
                <Box
                    sx={{
                        paddingLeft: { xs: 2, md: 30 },
                        paddingRight: { xs: 2, md: 30 },
                        textAlign: 'center'
                    }}
                >
                    <Typography variant='body3' textAlign={'center'} color={theme.palette.orange.main} gutterBottom>
                        Portfolio
                    </Typography>
                    <Typography variant='h3' textAlign={'center'} color={theme.palette.orange.contrastText} gutterBottom>
                        My Notable Projects
                    </Typography>
                    <Typography variant='body4' textAlign={'center'} color={theme.palette.orange.contrastText} gutterBottom>
                        The most effective approaches for developing software and systems include scalable, maintainable architecture and responsive design, ensuring that solutions work seamlessly across platforms and meet evolving user needs.
                    </Typography>
                </Box>
                <Grid container spacing={10} marginTop={10} alignItems='center'>
                    {/* Left Section - Text */}
                    <Grid size={{ md: 6 }}>
                        <img
                            src={aboutimg}
                            alt='About'
                            style={{ width: '100%', borderRadius: '10px' }}
                        />
                    </Grid>


                    {/* Right Section - Image (Optional) */}
                    <Grid size={{ md: 5 }}>
                        <Typography variant='body3' color={theme.palette.orange.main} gutterBottom>
                            I’m an Engineer
                        </Typography>
                        <Typography variant='h4' color={theme.palette.orange.contrastText} sx={{ marginBottom: '25px' }}>
                            I Can Build <br />Anything You Need
                        </Typography>
                        <Typography variant='body4' color={theme.palette.orange.contrastText} textAlign={'center'}>
                            Hello there! I’m a software engineer, and I’m deeply passionate and dedicated to my craft.
                            With years of experience as a professional developer, I have honed the skills and
                            expertise necessary to ensure the success of your project. I take pride in every step
                            of the development process, from initial discussions and problem-solving to implementation and collaboration.
                        </Typography>
                        <Grid container spacing={4} alignItems='left' marginTop={3}>
                            <Grid size={{ md: 6 }}>
                                <CustomButton
                                    text='Hire Me'
                                    version='away'
                                    linkName='contact'
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default PortfolioSection;
