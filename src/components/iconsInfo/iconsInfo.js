import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import LocationIcon from '../../assests/Location-Icon.svg'
import PhoneCall from '../../assests/phone-call.svg'
import Mail from '../../assests/mail.svg'
import VectorLine from '../../assests/Vector 5.svg'

// remember to create a slider for smaller screens

const IconsInfo = () => {
  return (
    <>
        <Container maxWidth='lg' sx={{marginTop:'8rem'}}>
            <Box sx={{backgroundColor:'#3A3456', width:'100%', padding:'1rem .5rem', borderRadius:'100px'}}>
                <Stack direction={'row'} spacing={3} sx={{alignItems:'center', }}>
                    <Stack direction={'row'} spacing={2} sx={{alignItems:'center'}}>
                        <div>
                            <img src={LocationIcon} alt="location" />
                        </div>
                        <div>
                            <Typography variant='h5' sx={{color:'#fff'}}>
                                Pay Us a Visit
                            </Typography>
                            <Typography variant='h6' sx={{color:'#fff'}}>
                                Union St, Seattle, WA 98101, United States
                            </Typography>
                        </div>
                    </Stack>

                    <Stack direction={'row'} spacing={2} sx={{alignItems:'center'}}>
                        <div>
                            <img src={VectorLine} alt="vector" />
                        </div>
                        <div>
                            <img src={PhoneCall} alt="location" />
                        </div>
                        <div>
                            <Typography variant='h5' sx={{color:'#fff'}}>
                                Give Us a Call
                            </Typography>
                            <Typography variant='h6' sx={{color:'#fff'}}>
                                (110) 1111-1010
                            </Typography>
                        </div>
                        <div>
                            <img src={VectorLine} alt="vector" />
                        </div>
                    </Stack>

                    <Stack direction={'row'} spacing={2} sx={{alignItems:'center'}}>
                        <div>
                            <img src={Mail} alt="location" />
                        </div>
                        <div>
                            <Typography variant='h5' sx={{color:'#fff'}}>
                                Send Us a Message
                            </Typography>
                            <Typography variant='h6' sx={{color:'#fff'}}>
                                Contact@HydraVTech.com
                            </Typography>
                        </div>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    </>
  )
}

export default IconsInfo