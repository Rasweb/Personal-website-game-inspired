import { Box, Typography } from "@mui/material";

export default function AboutBox() {
  return (
    <>
      <Box className="content-div text-div">
        <Typography sx={{ typography: { sm: "h5", xs: "h6" } }}>
          Hello and Welcome
        </Typography>
        <Typography
          align="center"
          paragraph={true}
          sx={{ typography: { sm: "h6", xs: "subtitle1" } }}
        >
          Here you can find my personal projects, read about my work experience,
          find my social links and read more about me. The images are
          screenshots so the quality may vary.
        </Typography>
      </Box>
    </>
  );
}
