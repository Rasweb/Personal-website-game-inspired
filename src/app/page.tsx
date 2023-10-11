"use client";

import Header from "@/components/header";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "@/components/home/home.css";
import projects from "@/data/projects";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export interface IProject {
  id: number;
  title: string;
  description: string;
  language: string[];
  img: string;
  link: string;
  dateCreated: string;
}

export default function Home() {
  // let firstFive: IProject[] = [];
  const theme = useTheme();
  const [firstFive, setFirstFive] = useState<IProject[]>([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // GMT+ 2

    // Sorted by showing recent changes first
    let sortedProjects: IProject[] = projects;
    sortedProjects.sort(
      (a, b) =>
        new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
    );
    let sortedArr = sortedProjects.slice(0, 8);
    setFirstFive(sortedArr);
    // For keen-slider to update when everything is rendered.
    setLoaded(true);
  }, []);
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

  function projClicked(id: number, name: string) {
    console.log("Project clicked");
    console.log("id", id);
    console.log("name", name);
  }
  function toLinkedin() {
    window.open("https://www.linkedin.com/in/rasmus-palm-076a83219", "_blank");
  }
  return (
    <>
      <Header></Header>
      <div>Recent Projects</div>
      {/* Using the custom theme */}
      {/* <Button
        style={{ backgroundColor: theme.palette.linkCustom }}
        variant="contained"
      >
        tets
      </Button> */}
      <div className="slider-container">
        {loaded && (
          <div ref={ref} className="keen-slider img-cont">
            {firstFive.map((project, index) => (
              <div
                key={project.id}
                className="keen-slider__slide lazy__slide img-style"
                onClick={() => projClicked(project.id, project.title)}
                style={{
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="img-title">{project.title}</div>
              </div>
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
        <div>View more projects</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          Welcome to my personal portfolio. Here you can find more information
          about me
        </div>
        <Card sx={{ width: 390 }}>
          <CardHeader title="Hello, I'm Rasmus" />
          <CardMedia
            style={{
              cursor: "pointer",
              maxWidth: "100%",
              height: "18rem",
            }}
            onClick={toLinkedin}
            image="/images/Linkedin-profile.png"
            title="linkedin img and link of Rasmus Palm"
          />
          <CardActions>
            <Button variant="outlined">About Me</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
