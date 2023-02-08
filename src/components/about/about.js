import React from 'react'
import { Grid, Container, Box, Typography, Stack } from '@mui/material'
import AboutImage from '../../assests/about-image.png'
import ButtonComp from '../utils/button'

const About = () => {
  return (
    <>
        <Container maxWidth={'lg'} sx={{marginTop:'100px'}}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Box sx={{borderBottomLeftRadius:'100px'}}>
                        <img src={AboutImage} alt="man wearing vr glasses" sx={{borderBottomLeftRadius:'50%'}} />
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box>
                        <Stack direction={'column'} spacing={2}>
                            <Typography variant='h3' sx={{color:'#fff'}}>
                                ABOUT
                            </Typography>
                            <Typography variant='h3' sx={{color:'#fff'}}>
                                HYDRA VR
                            </Typography>
                            <Typography variant='subtitle1' sx={{color:'#fff'}}>
                                Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                                urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                                dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                                Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                                sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                                etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                                cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                                retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                                n tempor.
                            </Typography>
                        </Stack>
                        <ButtonComp text={"LET'S GET STARTED"} sx={{marginTop:'30px'}}/>
                    </Box>
                </Grid>
            </Grid>

           
            
        </Container>
    </>
  )
}

export default About