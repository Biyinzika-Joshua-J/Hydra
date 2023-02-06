import React from 'react'
import { Button } from '@mui/material'

const ButtonComp = ({sx, text}) => {
  return (
    <Button sx={{...sx,borderRadius:'20px', backgroundColor:'#8176AF' }} color={'primary'}  variant={'contained'}>
        {text}
    </Button>
  )
}

export default ButtonComp