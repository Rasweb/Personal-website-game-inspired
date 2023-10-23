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
import "@/styles/header/header.css";
import { usefulLinks } from "@/data/lists/navLists";

type Anchor = "left";

export default function Header() {
  const Links = [
    { name: "Home", path: "/", id: 1 },
    { name: "Projects", path: "/projects", id: 2 },
    { name: "About", path: "/about", id: 3 },
  ];
  const [state, setState] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);

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

  // function handleListItemClick(path: string, id: number) {
  //   console.log("Item clicked");
  //   setSelectedIndex(id);

  //   console.log("Selected", selectedIndex);
  // }
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ mx: "auto", width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {usefulLinks.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              selected={selectedIndex === item.id}
              onClick={(event) => handleListItemClick(event, item.id)}
            >
              <ListItemIcon sx={{ color: "mainText" }}>
                {<item.icon />}
              </ListItemIcon>
              <ListItemText primary={item.name}></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
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
        <Drawer
          anchor="left"
          open={state}
          onClose={toggleDrawer("left", false)}
          PaperProps={{
            sx: {
              backgroundColor: "#11122b",
              color: "white",
            },
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            pt={12}
          >
            {/* Content */}
            {list("left")}
          </Box>
        </Drawer>
      </Box>
    </>
  );
}
