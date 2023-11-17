"use client";
import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import projects from "@/data/lists/projects";
import { Box, Container } from "@mui/material";
import { IProject } from "@/types/projectTypes";
import { useEffect, useState } from "react";
import "@/styles/single-project/project.css";
import { ISingleProjectProps } from "./singleProjectTypes";
import ImageCont from "../global/image-cont";
import TopRow from "./top-row/top-row";
import AboutRow from "./about-row/about-row";
import TechStack from "./tech-stack/tech-stack";

export default function SingleProject(props: ISingleProjectProps) {
  const [currentProj, setCurrentProj] = useState<IProject[]>([]);

  useEffect(() => {
    let allProjects: IProject[] = projects;

    // Goes through the project list and finds the matching one
    let oneProj = allProjects.filter((x) => x.id == props.currentID);

    setCurrentProj(oneProj);
  }, [props.currentID]);

  return (
    <>
      <Header />
      <Box className="bob">
        {currentProj.map((project) => (
          <Container key={project.id}>
            <ImageCont
              src={project.img}
              alt={project.title}
              customCss="specific-height"
            />
            <Container sx={{ backgroundColor: "info.main" }}>
              <TopRow
                title={project.title}
                dateCreated={project.dateCreated}
                link={project.link}
              />
              <AboutRow description={project.description} />
              <TechStack language={project.language} />
            </Container>
          </Container>
        ))}
      </Box>
      <Footer />
    </>
  );
}
