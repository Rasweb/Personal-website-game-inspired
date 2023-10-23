"use client";
import Header from "@/components/global/header";
import "keen-slider/keen-slider.min.css";
import "@/styles/home/home.css";
import projects from "@/data/lists/projects";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material";
import ProjectSlider from "@/components/home/slider/project-slider";
import { IProject } from "@/types/projectTypes";
import Footer from "@/components/home/footer/footer";

export default function Home() {
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
      <Box className="content-div">
        <Box className="content-div" sx={{ maxWidth: "40%" }}>
          <Typography variant="h5" pt={2}>
            Hello and Welcome
          </Typography>
          <Typography variant="h6" align={"center"} paragraph={true}>
            Here you can find my personal projects, read about my work
            experience, find my social links and read more about me.
          </Typography>
        </Box>
        <Card
          sx={{
            width: 390,
            backgroundColor: "secondary.main",
            color: "mainText",
          }}
        >
          <CardMedia
            className="card-media"
            onClick={toLinkedin}
            image="/images/Linkedin-profile.png"
            title="linkedin profile image and link of Rasmus Palm"
            sx={{
              "&:hover": {
                border: 3,
                borderColor: "hoverFocus",
              },
            }}
          />
          <CardActions>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "accentCustom",
                color: "mainText",
                "&:hover": {
                  backgroundColor: "hoverFocus",
                },
              }}
            >
              About Me
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Footer></Footer>
    </>
  );
}
