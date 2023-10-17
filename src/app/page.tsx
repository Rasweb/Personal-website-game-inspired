"use client";

import Header from "@/components/global/header";
import "keen-slider/keen-slider.min.css";
import "@/styles/home/home.css";
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
import ProjectSlider from "@/components/home/project-slider";
import { IProject } from "@/types/projectTypes";

export default function Home() {
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
      <ProjectSlider
        firstFive={firstFive}
        loaded={loaded}
        projClicked={projClicked}
      ></ProjectSlider>
      {/* Using the custom theme */}
      {/* <Button
        style={{ backgroundColor: theme.palette.linkCustom }}
        variant="contained"
        >
        tets
      </Button> */}
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
        <Card sx={{ width: 390 }} className="card-color">
          <CardHeader title="Hello, I'm Rasmus" />
          <CardMedia
            className="card-media"
            onClick={toLinkedin}
            image="/images/Linkedin-profile.png"
            title="linkedin img and link of Rasmus Palm"
          />
          <CardActions>
            <Button
              variant="outlined"
              style={{ backgroundColor: "#1d1e44", color: "#ffffff" }}
            >
              About Me
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
