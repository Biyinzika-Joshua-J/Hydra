import React from "react";
import { Container, Grid } from "@mui/material";
import BrandOne from "../../assests/icons/Hydra-Tech1 1.svg";
import BrandTwo from "../../assests/icons/Hydra-Tech2 1.svg";
import BrandThree from "../../assests/icons/Hydra-Tech3 1.svg";
import BrandFour from "../../assests/icons/Hydra-Tech4 1.svg";

const Logos = [BrandOne, BrandTwo, BrandThree, BrandFour];

const Brands = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{marginTop:'80px'}}>
        <Grid container sx={{alignItems:'center'}}>
          {Logos.map((logo, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <img src={logo} alt="brand" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Brands;
