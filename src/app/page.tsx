"use client";

import Header from "@/components/header";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "@/components/home/home.css";
import projects from "@/data/projects";
import { useEffect, useState } from "react";

export interface IProject {
  id: number;
  title: string;
  description: string;
  language: string[];
  img: string;
  link: string;
  dateUpdated: string;
}

export default function Home() {
  // let firstFive: IProject[] = [];
  const [firstFive, setFirstFive] = useState<IProject[]>([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // GMT+ 2

    // Sorted by showing recent changes first
    let sortedProjects: IProject[] = projects;
    sortedProjects.sort(
      (a, b) =>
        new Date(b.dateUpdated).getTime() - new Date(a.dateUpdated).getTime()
    );
    let sortedArr = sortedProjects.slice(0, 8);
    setFirstFive(sortedArr);
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
  return (
    <>
      <Header></Header>
      <div>Recent changes</div>
      <div className="slider-container">
        {loaded && (
          <div ref={ref} className="keen-slider img-cont">
            {firstFive.map((project, index) => (
              <div
                key={project.id}
                className="keen-slider__slide img-style"
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
      {/* Introduction div and some extra text */}
      {/* <div></div> */}
      {/* Recent projects slider */}
      {/* <div></div> */}
    </>
  );
}
