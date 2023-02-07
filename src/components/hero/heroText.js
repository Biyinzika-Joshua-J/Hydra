import React from 'react'
import { Typography, Stack, IconButton } from '@mui/material'
import ButtonComp from '../utils/button'
import RightArrowIcon from '../../assests/arrow-small-right.svg'
import './heroText.css'

const HeroText = () => {
  return (
    <>
        <Stack spacing={2} direction={'column'}>
            <Typography variant='h3' sx={{color:'#fff'}}>
                <span className="heroTextHighlight">Dive</span> Into The Depths <br/> Of   <span className="heroTextHighlight">Virtual Reality</span>
            </Typography>
            <Typography variant='h6' sx={{color:'#fff'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                nisl tincidunt eget. Lectus mauris eros in vitae .
            </Typography>

            <Stack spacing={3} direction={'row'} sx={{alignItems:'center'}}>
                <ButtonComp sx={{padding:'10px'}} text={'BUILD YOUR WORLD'}/>
                <IconButton>
                    <img src={RightArrowIcon} alt="right arrow icon" />
                </IconButton>
            </Stack>
        </Stack>
    </>
  )
}

export default HeroText