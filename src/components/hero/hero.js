import React from 'react'
import { Grid, Container, Box } from '@mui/material'
import HeroText from './heroText'
import HeroImage from  '../../assests/hero-image.png'

export const Hero = () => {
    return (
        <>
            <Container maxWidth={'lg'}>
                <Grid container spacing={10}>
                    <Grid item md={6}>
                        <HeroText/>
                    </Grid>

                    <Grid item md={6}>
                        <Box sx={{maxHeight:'100px'}}>
                            <img src={HeroImage} alt="person wearing vr glasses" sx={{height:'100%'}}/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
