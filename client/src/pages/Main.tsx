import React from "react";
import { Button } from "@mui/material";
import { Navbar } from '../components/Navbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { TypeAnimation } from 'react-type-animation';


export const Main = (): JSX.Element => {

  return (
    <>
      <div style={{backgroundImage: `url(./assets/background.png)`, 
          backgroundSize: 'cover'}}>
        <Navbar />
        <Container sx={{ top:'-10px' }}>
          <Box sx={{ marginTop:'-65px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh', 
          textAlign: 'center', 
          }}>
            <Typography variant="h1">Tired of looking up your favorite TV shows one by one?</Typography>
            <Typography variant="h2" sx={{ marginTop: '50px'}}>when is the next season of</Typography>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ width:'400px' }}>
                <TypeAnimation sequence={[
                  'The Witcher', 2000,
                  'Stranger Things', 2000,
                  'The Umbrella Academy', 2000,
                  'Survivor', 2000,
                  'The Crown', 2000,
                  ]}
                  repeat={ Infinity }
                  style={{ fontFamily: 'Open Sans', fontSize: '32px' }}
                />
              </Box>
              <Typography variant="h2" sx={{ position:'absolute' }}>__________________________</Typography>
              <Typography variant="h2">coming out?</Typography>
            </Box>
            <Button  variant="outlined" sx={{ marginTop: '100px'}}>Start</Button>
          </Box>
        </Container>
      </div>
    </>
  )
};
