"use client";
import Header from "@/components/global/header";
import "keen-slider/keen-slider.min.css";
import "@/styles/home/home.css";
import projects from "@/data/lists/projects";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ProjectSlider from "@/components/home/slider/project-slider";
import { IProject } from "@/types/projectTypes";
import Footer from "@/components/global/footer";
import AboutBox from "./info/about-box";
import CardBox from "./info/card-box";

export default function HomePage() {
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
      <Box className="content-div" sx={{ paddingBottom: "30px;" }}>
        <AboutBox />
        <CardBox toLinkedin={toLinkedin} />
      </Box>
      <Footer></Footer>
    </>
  );
}
