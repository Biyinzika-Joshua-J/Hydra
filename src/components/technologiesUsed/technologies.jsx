import React from "react";
import { Container, Box, Stack, Typography, IconButton } from "@mui/material";
import ArrowDown from "../../assests/icons/chevron-small-down.svg";
import TechnologiesUsed from "../../assests/technologies-used.jpg";
import "./technologies.css";

const Technologies = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "60px" }}>
        <Box
          width={"100%"}
          height={"50vh"}
          sx={{
            position: "relative",
            backgroundImage: `url(${TechnologiesUsed})`,
            borderRadius: "200px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "40%",
              left: "50%",
              textAlign: "center",
              color: "#fff",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography variant="h5">TECHNOLOGIES & HARDWARE</Typography>
            <Typography variant="h5">USED BY HYDRA VR.</Typography>
          </Box>
          <IconButton
            sx={{
              backgroundColor: "#C0B7E8",
              top: "90%",
              left: "50%",
              ":hover": { bgcolor: "#C0B7E8" },
            }}
          >
            <img src={ArrowDown} alt="arrow down" />
          </IconButton>
        </Box>
      </Container>
    </>
  );
};

export default Technologies;
