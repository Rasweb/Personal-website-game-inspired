"use client";
import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import projects from "@/data/lists/projects";
import { Box } from "@mui/material";
import { IProject } from "@/types/projectTypes";
import { useEffect, useState } from "react";
import "@/styles/single-project/project.css";
import { ISingleProjectProps } from "./singleProjectTypes";
import ImageCont from "../global/image-cont";
import TopRow from "./top-row/top-row";
import DetailsRow from "./details-row/details";

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
      {currentProj.map((proj) => (
        <Box className="info-cont" key={proj.id}>
          <ImageCont src={proj.img} alt={proj.title} />
          <TopRow
            title={proj.title}
            dateCreated={proj.dateCreated}
            link={proj.link}
          ></TopRow>
          <DetailsRow
            description={proj.description}
            language={proj.language}
          ></DetailsRow>
        </Box>
      ))}
      <Footer />
    </>
  );
}
