"use client";

import { Box, Container, Link, Typography } from "@mui/material";
import Footer from "../global/footer";
import Header from "../global/header";
import Image from "next/image";
import { IProject } from "@/types/projectTypes";
import { useEffect, useState } from "react";
import projects from "@/data/lists/projects";
import "@/styles/projects-page/projects.css";

export default function ProjectsPage() {
  const [sortedProj, setSortedProj] = useState<IProject[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Sorted by showing recent changes first
    let rawProjects: IProject[] = projects;
    rawProjects.sort(
      (a, b) =>
        new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
    );
    let sortedArr = rawProjects;
    setSortedProj(sortedArr);
    setLoaded(true);
  }, []);

  return (
    <>
      <Header></Header>
      <Box sx={{ paddingBottom: "2rem" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "15px 0px",
          }}
        >
          <Typography variant="h4">Projects</Typography>
        </Container>
        <Box className="proj-cont">
          {sortedProj.map((item) => (
            <Container key={item.id} className="item-cont hover-style">
              <Link href={`project/${item.id}`}>
                <Typography
                  variant="subtitle1"
                  className="img-title item-title"
                  sx={{ color: "secondaryText" }}
                >
                  {item.title}
                </Typography>
                <div className={"image-container"}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    layout="fill"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    className={"image"}
                  />
                </div>
              </Link>
            </Container>
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
