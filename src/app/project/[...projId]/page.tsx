"use client";
import projects from "@/data/lists/projects";
import { IProject } from "@/types/projectTypes";
import { useEffect, useState } from "react";
export default function SingleProject({
  params,
}: {
  params: { projId: number };
}) {
  const [currentProj, setCurrentProj] = useState<IProject[]>([]);

  useEffect(() => {
    let allProjects: IProject[] = projects;

    // myArray.filter(x => x.id === '45');
    let oneProj = allProjects.filter((x) => x.id == params.projId);
    console.log("One", oneProj);

    // GMT+ 2
    // // Sorted by showing recent changes first
    // let sortedProjects: IProject[] = projects;
    // sortedProjects.sort(
    //   (a, b) =>
    //     new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
    // );
    // let sortedArr = sortedProjects.slice(0, 8);
    // setFirstFive(sortedArr);
    // // For keen-slider to update when everything is rendered.
    // setLoaded(true);
  }, [params.projId]);

  return (
    <div>
      <h1>{params.projId}</h1>
    </div>
  );
}
