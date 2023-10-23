import { Box, IconButton, Link } from "@mui/material";
import { socialLinks, usefulLinks } from "@/data/lists/navLists";
import "@/styles/footer/footer.css";

export default function Footer() {
  return (
    <Box
      component="footer"
      className="footer-cont"
      sx={{
        bgcolor: "secondary.main",
      }}
    >
      <Box>
        {usefulLinks.map((link) => (
          <Link
            key={link.id}
            target="_blank"
            rel="noopener"
            href={link.path}
            className="nav-links"
            sx={{
              color: "mainText",
              "&:hover": {
                color: "hoverFocus",
              },
            }}
          >
            {link.name}
          </Link>
        ))}
      </Box>
      <Box>
        {socialLinks.map((link) => (
          <IconButton
            key={link.id}
            aria-label={link.name}
            component="a"
            href={link.path}
            target="_blank"
            rel="noopener"
            className="nav-links"
            sx={{
              color: "mainText",
              "&:hover": {
                color: "hoverFocus",
              },
            }}
          >
            {<link.icon />}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}
