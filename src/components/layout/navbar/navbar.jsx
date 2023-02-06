import React, {useState} from 'react'
import { AppBar, Toolbar, useMediaQuery, useTheme, Container, Typography, Grid, Tabs, Tab, Button, Stack, } from '@mui/material'
import DrawerComp from './drawer'
import ButtonComp from '../../utils/button'
import Logo from '../../../assests/logo.svg'

const navLinks = ['ABOUT', 'SERVICES', 'TECHNOLOGIES', 'HOW TO'];

export const Navbar = () => {
    const [value, setValue] = useState(0)
    const theme = useTheme();
    console.log(theme.primary)
    const screenIsSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <AppBar sx={{paddingTop:4, paddingBottom:2}} position='fixed' color='secondary'>
                <Container maxWidth='lg'>
                    {
                        screenIsSmall ? <DrawerComp /> : <><Toolbar><img src={Logo} alt="logo" height={'97.16px'} width={'101.99px'} /> <Typography sx={{marginLeft:2}} variant='h5'  color={'primary'}>Hydra</Typography> 
                        <Grid container sx={{alignItems:'center'}}>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={6}>
                                <Tabs textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
                                    {navLinks.map((link, index) => <Tab label={link} key={index} />)}
                                </Tabs>
                            </Grid>
                            <Grid item xs={0}></Grid>
                            <Grid item xs={4}>
                                <Stack direction={'row'}>
                             
                                    <Button sx={{marginLeft:'auto', border:'2px solid #fff', borderRadius:'20px'}} color='secondary' variant='contained'>
                                        CONTACT US
                                    </Button>
                                    
                                    <ButtonComp text={'JOIN HYDRA'} sx={{marginLeft:5}}/>
                                 
                                </Stack>
                            </Grid>
                        </Grid>
                        </Toolbar> </>
                    }
                </Container>
            </AppBar>
        </>
    )
}
