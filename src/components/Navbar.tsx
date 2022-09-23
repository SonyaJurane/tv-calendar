import React from "react";
import { AppBar, Toolbar, Typography, MenuItem, Box } from "@mui/material";

const pages = ['sign in', 'about'];

export const Navbar = (): JSX.Element => {
  return (
    <React.Fragment>
        <AppBar sx={{ background: 'transparent', color: 'black', position: 'static', boxShadow: 'none', zIndex:'2'}}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography 
                  noWrap 
                  sx= {{ fontFamily: 'Sora', fontSize: '24px', flexGrow: '0' }}
                >
                    tv calendar
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  {pages.map((page) => (
                    <MenuItem key={page}>
                      <Typography textAlign='center'>{page}</Typography>
                    </MenuItem>
                  ))}
                </Box>

                
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}