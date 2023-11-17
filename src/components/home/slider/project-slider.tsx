"use client";

import { useKeenSlider } from "keen-slider/react";
import { IProjectProps } from "./sliderTypes";
import { Box, Container, Link, Typography } from "@mui/material";

export default function ProjectSlider(props: IProjectProps) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    mode: "snap",
    loop: true,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1 },
      },
      "(min-width: 1000px)": {
        slides: () => [
          {
            size: 0.4,
            spacing: 0.01,
          },
          {
            size: 0.15,
            spacing: 0.01,
          },
          {
            size: 0.15,
            spacing: 0.01,
          },
          {
            size: 0.15,
            spacing: 0.01,
          },
          {
            size: 0.15,
            spacing: 0.01,
          },
          {
            size: 0.15,
            spacing: 0.01,
          },
          {
            size: 0.15,
            spacing: 0.01,
          },
          {
            size: 0.15,
            spacing: 0.01,
          },
        ],
      },
    },
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <Typography variant="h5" sx={{ padding: "25px 25px 10px" }}>
          Recent Projects
        </Typography>
      </div>
      <div className="slider-container custom-slider-container">
        {props.loaded && (
          <div ref={ref} className="keen-slider img-cont">
            {props.firstFive.map((project) => (
              <Link href={`project/${project.id}`} key={project.id}>
                <Box
                  key={project.id}
                  className="keen-slider__slide lazy__slide"
                  sx={{
                    backgroundImage: `url(${project.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    cursor: "pointer",
                    "&:hover": {
                      border: 3,
                      borderColor: "hoverFocus",
                    },
                  }}
                  onClick={() => props.projClicked(project.id, project.title)}
                >
                  <Container className="img-title">
                    <Typography
                      variant="subtitle1"
                      noWrap
                      sx={{ color: "secondaryText" }}
                    >
                      {project.title}
                    </Typography>
                  </Container>
                </Box>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              paddingTop: "2px",
              color: "secondaryText",
              cursor: "pointer",
              typography: { sm: "h6", xs: "subtitle1" },
              "&:hover": {
                color: "hoverFocus",
              },
            }}
          >
            View more projects
          </Typography>
        </div>
      </div>
    </div>
  );
}
