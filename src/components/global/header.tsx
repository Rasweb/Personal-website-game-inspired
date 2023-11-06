// Must be here for useState to work
"use client";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
import Link from "next/link";
import { usePathname } from "next/navigation";

type Anchor = "left";

export default function Header() {
  const [state, setState] = useState(false);
  const pathname = usePathname();
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
      <List>
        {usefulLinks.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
            sx={{
              "&:hover": {
                border: 3,
                borderColor: "hoverFocus",
                color: "hoverFocus",
              },
            }}
          >
            <Link href={item.path} style={{ width: "100%" }} passHref>
              <ListItemButton selected={pathname === item.path}>
                <ListItemIcon sx={{ color: "mainText" }}>
                  {<item.icon />}
                </ListItemIcon>
                <ListItemText primary={item.name}></ListItemText>
              </ListItemButton>
            </Link>
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
            {list("left")}
          </Box>
        </Drawer>
      </Box>
    </>
  );
}
