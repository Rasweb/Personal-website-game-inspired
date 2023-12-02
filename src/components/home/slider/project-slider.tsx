"use client";

import { useKeenSlider } from "keen-slider/react";
import { IProjectProps } from "./sliderTypes";
import { Box, Container, Link, Typography } from "@mui/material";
import Image from "next/image";

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
            spacing: 0.02,
          },
          {
            size: 0.2,
            spacing: 0.01,
          },
          {
            size: 0.2,
            spacing: 0.01,
          },
          {
            size: 0.2,
            spacing: 0.01,
          },
          {
            size: 0.2,
            spacing: 0.01,
          },
          {
            size: 0.2,
            spacing: 0.01,
          },
          {
            size: 0.2,
            spacing: 0.01,
          },
          {
            size: 0.2,
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
          <div ref={ref} className="keen-slider">
            {props.firstFive.map((project) => (
              <Link href={`project/${project.id}`} key={project.id}>
                <Box
                  key={project.id}
                  className="keen-slider__slide lazy__slide"
                >
                  <div className="image-slider">
                    <div className="image-container">
                      <Image
                        className="lazy__slide image "
                        src={project.img}
                        alt={project.title}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                        width={200}
                        height={500}
                      />
                    </div>
                    <Container className="img-title ot-tex">
                      <Typography
                        variant="subtitle1"
                        noWrap
                        sx={{ color: "secondaryText" }}
                      >
                        {project.title}
                      </Typography>
                    </Container>
                  </div>
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
          <Link href="/projects">
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
          </Link>
        </div>
      </div>
    </div>
  );
}
