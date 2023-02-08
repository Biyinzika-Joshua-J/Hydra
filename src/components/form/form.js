import React from "react";
import { Container, Grid, Box, TextField } from "@mui/material";



const Form = () => {

  
 

  return (
    <Container maxWidth="lg">
      <Box width={"100%"}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <TextField
              variant="outlined"
              label="First Name"
              required
              fullWidth
             color="primary"
             inputProps={{}}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Form;
