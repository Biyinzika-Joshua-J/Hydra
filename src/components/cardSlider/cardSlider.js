import React from 'react'
import { Card, CardMedia, CardContent,Grid, Container, Stack, Typography  } from '@mui/material'
import ButtonComp from '../utils/button'
import UnderlinedIcon from '../../assests/underline-icon.svg'

import CardImageOne from '../../assests/card-img-1.jpg'
import CardImageTwo from '../../assests/card-img-2.jpg'
import CardImageThree from '../../assests/card-img-3.jpg'
import CardImageFour from '../../assests/card-img-4.jpg'

const cardDetails = [
  {
    image:CardImageOne,
    heading:'SIMULATION',
    content:'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.'
  },

  {
    image:CardImageTwo,
    heading:'EDUCATION',
    content:'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.'
  },

  {
    image:CardImageThree,
    heading:'SELF-CARE',
    content:'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.'
  },

  {
    image:CardImageFour,
    heading:'OUTDOOR',
    content:'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.'
  },
]

const CardSlider = () => {
  return (
    <>
        <Container maxWidth={'lg'}>
          <Grid container spacing={2}>
            {
              cardDetails.map((details, index) => <Grid item md={6} lg={3} key={index}>
              <Card sx={{borderRadius:'50px', backgroundColor:'#433D60', padding:'1rem 0'}} >
                <CardMedia
                  component={'img'}
                  sx={{height:'150px', width:'150px', borderRadius:'100%', marginLeft:'auto', marginRight:'auto', marginTop:'1rem', padding:'1rem', backgroundColor:'#0E0E0E'}}
                  image={details.image}
                  alt="card"
              
                />

                <CardContent>
                  <Stack direction={'column'} spacing={1}>
                      <Typography variant='h5' sx={{textAlign:'center', color:'#fff'}}>
                        {details.heading}
                      </Typography>
                      <div style={{textAlign:'center'}}>
                         <img src={UnderlinedIcon} alt="underlined svg icon" />
                      </div>
                      <Typography variant='subtitle1' sx={{color:'#fff'}}>
                        {details.content}
                      </Typography>

                      <ButtonComp text={'TRY IT NOW'} />
            
                  </Stack>

                </CardContent>
              </Card>
            </Grid>)
            }
          </Grid>
        </Container>
    </>
  )
}

export default CardSlider