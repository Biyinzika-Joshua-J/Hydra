import React, {useState} from 'react'
import { Drawer, Typography, IconButton, Toolbar } from '@mui/material'
import HumbergerMenuIcon from '../../../assests/Hamburger-Button.svg'
import Logo from '../../../assests/logo.svg'



const DrawerComp = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
        <Toolbar>
                <img src={Logo} alt="logo" /> 
                <Typography>Hydra</Typography>
        

            <Drawer open={drawerOpen} anchor={'right'} onClose={()=>setDrawerOpen(false)}>
            <Typography>Hydra</Typography>
            </Drawer>

            <IconButton sx={{ display: 'inline-block', marginLeft:'auto' }} onClick={()=>setDrawerOpen(true)}>
                <img src={HumbergerMenuIcon} alt="menu icon" />
            </IconButton>
        </Toolbar>
    </>
  )
}

export default DrawerComp