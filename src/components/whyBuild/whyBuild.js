import React from 'react'
import { Box, Stack, Grid, IconButton, Typography, Container } from '@mui/material'
import ArrowRight from '../../assests/arrow-right-long.svg'

const WhyBuild = () => {
  return (
    <>
          <Container maxWidth={'lg'} sx={{marginTop:'100px'}}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Stack direction={'column'} spacing={1}>
                        <div>
                            <Typography variant='h4' sx={{color:'#fff'}}>
                                WHY BUILD
                            </Typography>
                        </div>
                        <Stack direction={'row'} spacing={3} sx={{alignItems:'center'}}>
                            <Typography variant='h5' sx={{color:'#fff', fontWeight:'light'}}>
                               WITH HYDRA?
                            </Typography>
                            <IconButton>
                                <img src={ArrowRight} alt="icon right long" />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant='subtitle1' sx={{color:'#fff'}}>
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </>
  )
}

export default WhyBuild