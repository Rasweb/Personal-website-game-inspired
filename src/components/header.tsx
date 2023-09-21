// Must be here for useState to work
"use client";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

type Anchor = "left";

export default function Header() {
  const Links = [
    { name: "Home", path: "/", id: 1 },
    { name: "Projects", path: "/projects", id: 2 },
    { name: "About", path: "/about", id: 3 },
    { name: "Settings", path: "/settings", id: 4 },
  ];
  const [state, setState] = useState(false);
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      if (state) {
        setState(false);
      } else {
        setState(true);
      }
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ mx: "auto", width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div></div>
      <List>
        {Links.map((text, index) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton href={text.path}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Menu
            </Typography>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            anchor="left"
            open={state}
            onClose={toggleDrawer("left", false)}
          >
            {/* {list("left")} */}
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              pt={12} // Adjust padding as needed
            >
              {/* Content */}
              {list("left")}

              {/* Additional content can be added here */}
            </Box>
          </Drawer>
        </nav>
      </Box>
    </>
  );
}
