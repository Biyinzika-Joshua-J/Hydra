import React from 'react'
import { Grid, Container, Stack, Typography, IconButton } from '@mui/material'
import Logo from '../../../assests/logo.svg'
import FooterLine from '../../../assests/footer-line-svg.svg'
import ButtonComp from '../../utils/button'

import Facebook from '../../../assests/icons/facebook.svg'
import Instagram from '../../../assests/icons/instagram.svg'
import Linkedin from '../../../assests/icons/linkedin.svg'
import Pinterest from '../../../assests/icons/pinterest.svg'
import Twitter from '../../../assests/icons/twitter.svg'
import Youtube from '../../../assests/icons/youtube.svg'

const columnTwo = ['ABOUT', 'SERVICES', 'TECHNOLOGIES', 'HOW TO', 'JOIN HYDRA'];
const columnThree = ['F.A.Q', 'SITEMAP', 'CONDITIONS', 'LICENSES'];

const Icons = [Facebook, Instagram, Linkedin, Pinterest, Twitter, Youtube];

export const Footer = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={1} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6} lg={3}>
          <img src={Logo} alt="logo" height={'300px'} width={'200px'} />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>

          <Stack direction={'row'} spacing={8}>
            <div>
              <img src={FooterLine} alt="footer line svg" />
            </div>

            <Stack direction={'column'} spacing={1}>

              {
                columnTwo.map((footerItem, index) => <Typography key={index} variant='subtitle1' sx={{ color: '#fff' }}>
                  {footerItem}
                </Typography>)
              }

            </Stack>
          </Stack>


        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Stack direction={'row'} spacing={8}>
            <div>
              <img src={FooterLine} alt="footer line svg" />
            </div>

            <Stack direction={'column'} spacing={1}>

              {
                columnThree.map((footerItem, index) => <Typography key={index} variant='subtitle1' sx={{ color: '#fff' }}>
                  {footerItem}
                </Typography>)
              }

            </Stack>
          </Stack>

        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Stack direction={'row'} spacing={4}>
            <div>
              <img src={FooterLine} alt="footer line svg" />
            </div>

            <Stack direction={'column'} spacing={5}>
              <Typography variant='subtitle1' sx={{ color: '#fff' }}>
                SOCIALIZE WITH HYDRA
              </Typography>
              <Stack direction={'row'}>
                {Icons.map((Icon, index) => <IconButton key={index}> <img src={Icon} alt='social icon' /> </IconButton>)}
              </Stack>
              <ButtonComp text={'BUILD YOUR WORLD'} />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}
