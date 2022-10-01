import React from "react";
import { AppBar, Toolbar, Typography, MenuItem, Box } from "@mui/material";
// import { Main, About, Landing } from "../pages";
import { Link } from "react-router-dom";

export const Navbar = (): JSX.Element => {
  return (
    <React.Fragment>
      <AppBar
        sx={{
          background: "transparent",
          color: "black",
          position: "static",
          boxShadow: "none",
          zIndex: "2",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            noWrap
            sx={{ fontFamily: "Sora", fontSize: "24px", flexGrow: "0" }}
          >
            tv calendar
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Link to={"../pages/main"}>
              <MenuItem>
                <Typography textAlign="center">home</Typography>
              </MenuItem>
            </Link>
            <Link to={"../pages/about"}>
              <MenuItem>
                <Typography textAlign="center">about</Typography>
              </MenuItem>
            </Link>
            <Link to={"../pages/aboaut"}>
              <MenuItem>
                <Typography textAlign="center">sign in</Typography>
              </MenuItem>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

//
