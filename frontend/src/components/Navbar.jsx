// frontend/src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6" style={{ marginLeft: "20px" }}>
          <Link to="/user" style={{ color: "white", textDecoration: "none" }}>
            User
          </Link>
        </Typography>
        <Typography variant="h6" style={{ marginLeft: "20px" }}>
          <Link to="/food" style={{ color: "white", textDecoration: "none" }}>
            Food
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
