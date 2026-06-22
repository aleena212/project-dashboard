import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Toolbar,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const drawerWidth = 220;

function Sidebar() {
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();

  return (
    <>
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          position: "fixed",
          top: 80,
          left: open ? 170 : 10,
          zIndex: 2000,
          background: "#1976d2",
          color: "white",
          "&:hover": {
            background: "#1565c0",
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: drawerWidth,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            marginTop: "64px",
            paddingTop: 2,
          },
        }}
      >
        <List>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton onClick={() => navigate("/projects")}>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}

export default Sidebar;
