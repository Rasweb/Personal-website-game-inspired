"use client";

import { useKeenSlider } from "keen-slider/react";
import { IProjectProps } from "./sliderTypes";
import { Box, Container, Typography } from "@mui/material";

export default function ProjectSlider(props: IProjectProps) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    mode: "snap",
    loop: true,
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
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <Typography variant="h5" sx={{ padding: "25px 25px 20px" }}>
          Recent Projects
        </Typography>
      </div>
      <div className="slider-container">
        {props.loaded && (
          <div ref={ref} className="keen-slider img-cont">
            {props.firstFive.map((project) => (
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
                  <Typography variant="subtitle1" noWrap>
                    {project.title}
                  </Typography>
                </Container>
              </Box>
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