"use client";

import { useKeenSlider } from "keen-slider/react";
import { IProjectProps } from "./sliderTypes";

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
    <div>
      <div>Recent Projects</div>
      <div className="slider-container">
        {props.loaded && (
          <div ref={ref} className="keen-slider img-cont">
            {props.firstFive.map((project, index) => (
              <div
                key={project.id}
                className="keen-slider__slide lazy__slide img-style"
                onClick={() => props.projClicked(project.id, project.title)}
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
    </div>
  );
}
